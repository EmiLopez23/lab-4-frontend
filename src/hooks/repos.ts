import type { Repo } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useGetRepo = (repoName: string) =>
  useQuery<Repo>({
    queryKey: ["repoData"], // cache key
    queryFn: async () => {
      const response = await fetch(`https://api.github.com/repos/${repoName}`);
      return await response.json(); // return data
    },
  });
