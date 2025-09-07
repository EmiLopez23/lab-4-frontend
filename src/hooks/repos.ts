import { getRepo, loginUser } from "@/api";
import type { Repo } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";

export const useRepo = (repoName: string) =>
  useQuery<Repo>({
    queryKey: ["repoData"], // cache key
    queryFn: async () => await getRepo(repoName),
  });

type LoginMutationProps = {
  onError: (message: string) => void;
};

export function useLoginMutation({ onError }: LoginMutationProps) {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (_) => {
      navigate("/");
    },
    onError: (error) => {
      onError(error.message);
    },
  });
}
