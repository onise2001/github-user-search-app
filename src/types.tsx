interface IUser {
  name: string | null;
  login: string;
  avatar_url: string;
  created_at: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  location: string | null;
  company: string | null;
  blog: string | null;
  twitter_username: string | null;
}

export default IUser;
