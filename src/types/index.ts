export interface Repo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
    url: string;
  };
  description: string;
  url: string;
  topics: string[];
  visibility: string;
  forks: number;
  html_url: string;
}
