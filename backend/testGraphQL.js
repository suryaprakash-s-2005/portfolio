const fetchLeetcode = async () => {
    const query = `
    query userProfileCalendar($username: String!) {
      matchedUser(username: $username) {
        userCalendar {
          submissionCalendar
        }
      }
    }
  `;

    try {
        const res = await fetch('https://leetcode.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0'
            },
            body: JSON.stringify({
                query: query,
                variables: { username: "Surya_Prakash_S_CSE" }
            })
        });
        const data = await res.json();
        console.log(Object.keys(JSON.parse(data.data.matchedUser.userCalendar.submissionCalendar)).length + " calendar days");
    } catch (e) { console.error(e) }
};
fetchLeetcode();
