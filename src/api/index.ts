import type { Repo } from "@/types";

export async function getRepo(repoName: string): Promise<Repo> {
  const response = await fetch(`https://api.github.com/repos/${repoName}`);
  return await response.json();
}
