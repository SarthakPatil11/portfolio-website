"use client";

import { iWhatIDoData } from "@/types/types";
import { usePathname } from "next/navigation";

const listWhatIDo: iWhatIDoData[] = [
  {
    workType: "Projects",
    workTitle: "Full Stack JavaScript",
    workSubtitle: "I have completed one major project.",
    workDescription:
      "I have completed one major project that include MongoDB - ExpressJS - VeuJS - NodeJS (MEVN Stack). Please navigate to learn more or click above link.",
    workTopic: "JS",
    workProjects: [
      {
        projImgPath: "/images/ProjectSS/js/ForYou.png",
        projTopic: "JS",
        projTitle: "ForYOU: Learning Website",
        projSubtitle: "Major Project | April 2023 - May 2023",
        projDescription:
          "In this project, JavaScript’s ExpressJS framework with NodeJS Environment is used as backend technology to handle user requests and to create APIs for frontend. MongoDB is the database to store information. VueJS framework for triggering appropriate pages and queries with HTML, CSS and Bootstrap as frontend technology.",
        projLinks: [{ btnText: "See Github", btnLink: "" }],
      },
      {
        projImgPath: "/images/ProjectSS/js/ForYou.png",
        projTopic: "JS",
        projTitle: "Parking Palace: Using MERN",
        projSubtitle: "Personal Project | Aug 2024 - Now",
        projDescription:
          "In this project, JavaScript’s ExpressJS framework with NodeJS Environment is used as backend technology to handle user requests and to create APIs for frontend. MongoDB is the database to store information. ReactJS for triggering appropriate pages and queries with HTML, CSS and Tailwind as frontend technology.",
        projLinks: [{ btnText: "See Github", btnLink: "" }],
      },
    ],
  },
  {
    workType: "Projects",
    workTitle: "C# with DotNET",
    workSubtitle:
      "Currently, I am working in this technology and have completed ten challenges as well as one mini-project.",
    workDescription:
      "Currently, I am working in this technology and have completed ten challenges as well as one mini-project. Please navigate to learn more or click above link.",
    workTopic: "CSHARP",
    workProjects: [
      {
        projImgPath: "/images/ProjectSS/js/ForYou.png",
        projTopic: "CSHARP",
        projTitle: "10 Problems Challenge",
        projSubtitle: "Challenge | July 2023 - Sept 2023",
        projDescription:
          "I have successfully solved 10 problems that will help you become proficient in C# using DotNet. Almost every concept is efficiently used in these problems.",
        projLinks: [{ btnText: "See Github", btnLink: "" }],
      },
      {
        projImgPath: "/images/ProjectSS/js/ForYou.png",
        projTopic: "CSHARP",
        projTitle: "People Organization System",
        projSubtitle: "Minor Project | Sept 2023 - Oct 2023",
        projDescription:
          "In this project, C# with .NET6 is used as backend technology to handle user requests and fetch the data using REST API. SQL server is used to store the information. HTML, CSS and Bootstrap as frontend technology.",
        projLinks: [{ btnText: "See Github", btnLink: "" }],
      },
    ],
  },
];

export default function Navbar() {
  const path = usePathname();
  console.log(path);
  const isProjectDetailPaths = path === "/application/user/projectsDetail";

  return (
    <div className="navbar bg-[#312450] sticky top-0 left-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#312450] rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {isProjectDetailPaths ? <AllProjectLinks /> : <AllOverviewLinks />}
          </ul>
        </div>
        {/* <a className="btn btn-ghost text-xl">Sarthak Patil</a> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {isProjectDetailPaths ? <AllProjectLinks /> : <AllOverviewLinks />}
        </ul>
      </div>
      <div className="navbar-end">{/* <a className="btn ">Button</a> */}</div>
    </div>
  );
}

function AllOverviewLinks() {
  return (
    <>
      <li className="text-1xl font-extrabold bg-gradient-to-r from-purple-start to-pink-end bg-clip-text text-transparent">
        <a href="">WELCOME</a>
      </li>
      <li className="text-1xl font-extrabold text-slate-400">
        <a href="#WhoIAm">WHO I AM</a>
      </li>
      <li className="text-1xl font-extrabold text-slate-400">
        <a href="#WhatIDo">WHAT I DO</a>
      </li>
      <li className="text-1xl font-extrabold text-slate-400">
        <a href="#Footer">GET IN TOUCH</a>
      </li>
    </>
  );
}

function AllProjectLinks() {
  return (
    <>
      <li className="text-1xl font-extrabold bg-gradient-to-r from-purple-start to-pink-end bg-clip-text text-transparent">
        <a href="/application/user/overview">WELCOME</a>
      </li>
      {listWhatIDo.map((v, i) => (
        <li key={i} className="text-1xl font-extrabold text-slate-400">
          <a href={`#${v.workTopic}`}>{v.workTopic}</a>
        </li>
      ))}
    </>
  );
}
