import { getWhatIDoData } from "@/actions/whatIDoData";

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

export async function AllProjectLinks() {
  const listWhatIDo = await getWhatIDoData();

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
