import type { Repo } from "@/types";

export async function getRepos(): Promise<Repo[]> {
  const response = await fetch("https://api.github.com/repos/TanStack/query");
  return await response.json();
}
