import { useState } from "react";
import Starter from "./components/Starter";
import Response from "./components/Response";
import IUser from "./types";

function App() {
  const [user, setUser] = useState<IUser>({
    name: "The Octocat",
    login: "octocat",
    avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
    created_at: "25 Jan 2011",
    bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
    public_repos: 8,
    followers: 3938,
    following: 9,
    location: "San Francisco",
    company: "@github",
    blog: "https://github.blog",
    twitter_username: null,
  });

  const [light, setLight] = useState(true);

  return (
    <>
      <main
        className={`min-h-[100vh] ${light ? "bg-[#f6f8ff]" : "bg-[#141d2f]"}`}
      >
        <Starter setUser={setUser} light={light} setLight={setLight} />
        <Response user={user} light={light}  />
      </main>
    </>
  );
}

export default App;
