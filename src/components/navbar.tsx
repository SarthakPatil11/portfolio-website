"use client";

import { usePathname } from "next/navigation";
import { getWhatIDoData } from "@/actions/whatIDoData";
import { useEffect, useState } from "react";
import { iWhatIDoData } from "@/types/types";

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

export function AllOverviewLinks() {
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

export function AllProjectLinks() {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [listWhatIDo, setListWhatIDo] =
    useState<Array<Partial<iWhatIDoData>>>();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await getWhatIDoData();
        setListWhatIDo(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    })();
  }, []);
  // const listWhatIDo = await getWhatIDoData();

  if (isLoading) {
    return <>Loading.....</>;
  }

  return (
    <>
      <li className="text-1xl font-extrabold bg-gradient-to-r from-purple-start to-pink-end bg-clip-text text-transparent">
        <a href="/application/user/overview">WELCOME</a>
      </li>
      {listWhatIDo?.map((v, i) => (
        <li key={i} className="text-1xl font-extrabold text-slate-400">
          <a href={`#${v.workTopic}`}>{v.workTopic}</a>
        </li>
      ))}
    </>
  );
}
