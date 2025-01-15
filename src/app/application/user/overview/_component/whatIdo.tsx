import Card_Glass from "@/components/card_Glass";
import { iWhatIDoData } from "@/types/types";
import { SquarePlus } from "lucide-react";

const listWhatIDo: iWhatIDoData[] = [
  {
    workType: "Projects",
    workSubtitle: "I have completed one major project.",
    workTitle: "Full Stack JavaScript",
    workDescription:
      "I have completed one major project that include MongoDB - ExpressJS - VeuJS - NodeJS (MEVN Stack). Please navigate to learn more or click above link.",
    workTopic: "JS",
  },
  {
    workType: "Projects",
    workSubtitle:
      "Currently, I am working in this technology and have completed ten challenges as well as one mini-project.",
    workTitle: "C# with DotNET",
    workDescription:
      "Currently, I am working in this technology and have completed ten challenges as well as one mini-project. Please navigate to learn more or click above link.",
    workTopic: "CSHARP",
  },
];

export default function WhatIDo() {
  return (
    <div id="WhatIDo" className="p-10 font-mono">
      <div className="flex justify-between">
        <div>
          <div className="text-white text-4xl font-bold">What I do</div>
          <div className="text-zinc-300">
            The
            <span className="text-white"> skills </span>
            that I possess and enjoy working with.
          </div>
        </div>
        <button className="btn btn-warning">
          <SquarePlus className="h-4" />
        </button>
      </div>

      <div className="flex flex-wrap py-5 lg:p-3 gap-5 justify-center">
        {listWhatIDo.map((v, i) => (
          <Card_Glass
            key={i}
            workTopic={v.workTopic}
            CTAText={v.workType}
            title={v.workTitle}
            description={v.workDescription}
          />
        ))}
      </div>
    </div>
  );
}
