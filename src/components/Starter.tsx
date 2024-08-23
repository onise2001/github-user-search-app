import React, { useEffect, useState } from "react";
import IUser from "../types";
import { format } from "date-fns";

interface IStarterProps {
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  light: boolean;
  setLight: React.Dispatch<React.SetStateAction<boolean>>;
}

const Starter: React.FC<IStarterProps> = ({ setUser, light, setLight }) => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const response = await fetch(
      `https://api.github.com/users/${search || "octocat"}`
    );
    console.log("API");
    if (response.ok) {
      const data = await response.json();
      const formattedDate = format(new Date(data.created_at), "dd MMM yyyy");
      data.created_at = formattedDate;
      setUser(data);
    } else {
      if (response.status === 403) setError("Rate Exceded");
      else {
        setError("No Result");
      }
    }
  };

  return (
    <section className="px-[2.4rem] md:px-[0] pt-[3.1rem] mb-[1.6rem] md:mb-[2.4rem] w-full max-w-[37.5rem] mx-auto md:max-w-[57.3rem] xl:max-w-[73rem] xl:pt-[14.4rem]">
      <div className="flex justify-between items-center mb-[3.6rem] ">
        <h1
          className={`text-[2.6rem]  font-bold ${
            light ? "text-[#text-[#222731]]" : "text-[#fff]"
          }`}
        >
          devfinder
        </h1>
        <div className="flex items-center gap-[1.6rem]">
          <span
            className={`text-[1.3rem]  tracking-[2.5px] ${
              light ? "text-[#4b6a9b]" : "text-[#fff]"
            }`}
          >
            {light ? "DARK" : "LIGHT"}
          </span>
          <img
            src={`${light ? "/assets/icon-moon.svg" : "/assets/icon-sun.svg"}`}
            alt=""
            onClick={() => {
              setLight(!light);
            }}
          />
        </div>
      </div>

      <div className="relative shadow-input-shadow">
        <img
          src="/assets/icon-search.svg"
          alt=""
          className="w-[2rem] h-[2rem] md:w-[2.4rem] md:h-[2.4rem] absolute top-[50%] left-[1.6rem] md:left-[3.2rem] translate-y-[-50%]"
        />
        <input
          type="text"
          placeholder={`${error ? "" : "Search GitHub username…"}`}
          className={`w-full outline-none text-[1.3rem] md:text-[1.8rem] leading-[1.92] md:leading-[1.39] py-[1.8rem] pl-[4.5rem] md:pl-[8rem] rounded-[1.5rem] ${
            error ? "pr-[19rem]" : ""
          } ${light ? "bg-[#fff] text-[#222731]" : "bg-[#1e2a47] text-[#fff]"}`}
          value={search}
          onChange={(event) => {
            setError("");
            setSearch(event.target.value);
          }}
        />

        {error ? (
          <span className="text-[1.3rem] text-[#f74646] absolute top-[50%] right-[10rem] translate-y-[-50%]">
            No Results
          </span>
        ) : null}

        <button
          onClick={() => {
            fetchUser();
          }}
          className="hover:bg-[#60abff] absolute right-[0.7rem] top-[50%] translate-y-[-50%] bg-[#0079ff] text-[1.4rem] text-[#fff] text-center font-bold py-[1.25rem] pl-[1.8rem] pr-[1.4rem] rounded-[10px]"
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default Starter;
