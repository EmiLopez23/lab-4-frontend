import { getRepo } from "@/api";
import type { Repo } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useRepo = (repoName: string) =>
  useQuery<Repo>({
    queryKey: ["repoData"], // cache key
    queryFn: async () => await getRepo(repoName),
  });
