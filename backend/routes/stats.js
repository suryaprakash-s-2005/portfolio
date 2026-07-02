const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        // Build LeetCode GraphQL query
        const leetcodeQuery = `
          query getUserProfile($username: String!) {
            matchedUser(username: $username) {
              profile { ranking }
              submitStats: submitStatsGlobal {
                acSubmissionNum { difficulty count }
              }
              badges { id displayName icon }
              userCalendar { submissionCalendar }
            }
          }
        `;

        const leetcodeRes = await fetch('https://leetcode.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0'
            },
            body: JSON.stringify({
                query: leetcodeQuery,
                variables: { username: 'Surya_Prakash_S_CSE' }
            })
        });

        const leetcodeData = await leetcodeRes.json();
        const leetUser = leetcodeData?.data?.matchedUser;

        // Parse Leetcode data
        const leetRanking = leetUser?.profile?.ranking || 0;
        const allSolved = leetUser?.submitStats?.acSubmissionNum?.find(item => item.difficulty === 'All')?.count || 0;
        const leetBadges = leetUser?.badges || [];

        let parsedCalendar = {};
        try {
            if (leetUser?.userCalendar?.submissionCalendar) {
                parsedCalendar = JSON.parse(leetUser.userCalendar.submissionCalendar);
            }
        } catch (e) { }

        // Helper function to safely fetch HackerRank JSON
        const safeFetchHR = async (url) => {
            try {
                const hrRes = await fetch(url, {
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:136.0) Gecko/20100101 Firefox/136.0',
                        'Accept': 'application/json'
                    }
                });
                if (!hrRes.ok) return {};
                const text = await hrRes.text();
                try {
                    return JSON.parse(text);
                } catch (e) { return {}; }
            } catch (err) { return {}; }
        };

        const hrBadgesData = await safeFetchHR('https://www.hackerrank.com/rest/hackers/4160suryaprakash/badges');
        let hrBadges = [];
        let hrStars = 0;
        let hrChallenges = 0;

        if (hrBadgesData.models) {
            hrBadges = hrBadgesData.models.map(badge => ({
                name: badge.badge_name,
                stars: badge.stars,
                icon: badge.icon?.replace('http:', 'https:') || null,
                solved: badge.solved || 0
            }));
            hrStars = hrBadgesData.models.reduce((acc, curr) => acc + curr.stars, 0);
            hrChallenges = hrBadgesData.models.reduce((acc, curr) => acc + (curr.solved || 0), 0);
        }

        res.json({
            leetcode: {
                solved: allSolved,
                ranking: leetRanking,
                badges: leetBadges,
                calendar: parsedCalendar
            },
            hackerrank: {
                badges: hrBadges,
                stars: hrStars,
                challenges: hrChallenges || 0,
            }
        });
    } catch (error) {
        console.error('Error fetching stats:', error.message);
        res.status(500).json({ error: 'Failed to fetch dynamic coding stats' });
    }
});

module.exports = router;
