import { useCallback, useEffect, useState } from "react";

const GITHUB_USER = "suryaprakash-s-2005";

export const useGitHubContributions = () => {
  const [state, setState] = useState({ loading: true, error: null, totalContributions: null });

  const fetchContributions = useCallback(async () => {
    setState({ loading: true, error: null, totalContributions: null });
    try {
      const res = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}`
      );
      if (!res.ok) throw new Error("Contributions API failed");
      const json = await res.json();
      const total = Object.values(json.total ?? {}).reduce((sum, val) => sum + val, 0);
      setState({ loading: false, error: null, totalContributions: total });
    } catch (err) {
      setState({ loading: false, error: err.message, totalContributions: null });
    }
  }, []);

  useEffect(() => {
    fetchContributions();
  }, [fetchContributions]);

  return state;
};
