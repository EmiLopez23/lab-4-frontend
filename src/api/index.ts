import type { Repo } from "@/types";
import axios from "axios";

export const publicClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getRepo(repoName: string): Promise<Repo> {
  const response = await fetch(`https://api.github.com/repos/${repoName}`);
  return await response.json();
}

export async function loginUser(userdata: any) {
  try {
    const response = await publicClient.post<any>("/auth/login", userdata);
    return response.data;
  } catch (error) {
    throw error;
  }
}
