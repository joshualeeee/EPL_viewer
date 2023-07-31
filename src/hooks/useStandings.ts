import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface standing {
    Season: string;
    Pos: number;
    Team: string;
    W: number;
    D: number;
    L: number;
    GF: number;
    GA: number;
    GD: number;
    Pts: number;
    "Qualification or relegation": string;
}

const useStandings = () => {
   const [standings, setStandings] = useState<standing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<standing[]>("/standings", {signal: controller.signal})
      .then((res) => {
        setStandings(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
      return ()=>controller.abort();
  }, []);

  return {standings, error}
}

export default useStandings;