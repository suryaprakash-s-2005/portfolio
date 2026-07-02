import { useCallback, useEffect, useState } from "react";

const GITHUB_USER = "suryaprakash-s-2005";

export const useGitHubStats = () => {
  const [data, setData] = useState({ loading: true, error: null, data: null });

  const fetchStats = useCallback(async () => {
    setData({ loading: true, error: null, data: null });
    try {
      const res = await fetch(`https://api.github.com/users/${GITHUB_USER}`);
      if (!res.ok) throw new Error("GitHub API failed");
      const profile = await res.json();
      setData({ loading: false, error: null, data: profile });
    } catch (err) {
      setData({ loading: false, error: err.message, data: null });
    }
  }, []);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  return data;
};
