import { useCallback, useEffect, useState } from "react";

const GFG_USER = "suryaprakashcse";

const BASE = (path) => `https://gfg-stats.tashif.codes/${GFG_USER}${path}`;

const APIS = [
  async () => {
    const res = await fetch(BASE(""));
    if (!res.ok) throw new Error("tashif-main failed");
    const json = await res.json();
    return {
      totalProblemsSolved: json.totalProblemsSolved ?? 0,
      School: json.School ?? 0,
      Basic: json.Basic ?? 0,
      Easy: json.Easy ?? 0,
      Medium: json.Medium ?? 0,
      Hard: json.Hard ?? 0,
    };
  },
  async () => {
    const res = await fetch(BASE("/profile"));
    if (!res.ok) throw new Error("tashif-profile failed");
    const json = await res.json();
    return {
      codingScore: json.codingScore ?? null,
      rank: json.instituteRank ?? json.rank ?? null,
      institute: json.institute ?? null,
    };
  },
];

const merge = (target, source) => {
  for (const key of Object.keys(source)) {
    if (source[key] != null && source[key] !== 0) {
      target[key] = source[key];
    }
  }
};

export const useGFGStats = () => {
  const [state, setState] = useState({ loading: true, error: null, data: null });

  const fetchStats = useCallback(async () => {
    setState({ loading: true, error: null, data: null });
    const result = {
      totalProblemsSolved: 0,
      codingScore: null,
      rank: null,
      institute: null,
      School: 0,
      Basic: 0,
      Easy: 0,
      Medium: 0,
      Hard: 0,
    };
    let anySuccess = false;
    for (const attempt of APIS) {
      try {
        const data = await attempt();
        merge(result, data);
        anySuccess = true;
      } catch (err) {
        continue;
      }
    }
    if (anySuccess) {
      setState({ loading: false, error: null, data: result });
    } else {
      setState({ loading: false, error: "All GFG APIs failed", data: null });
    }
  }, []);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  return state;
};
