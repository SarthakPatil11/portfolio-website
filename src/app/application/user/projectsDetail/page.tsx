import { iWhatIDoData } from "@/types/types";
import Project from "./_component/Project";

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

export default function page() {
  return (
    <div
      style={{
        background:
          "url(/images/background1.png) center, linear-gradient(45deg, rgb(0 9 95), rgb(124 50 154) 70%)",
      }}
    >
      {listWhatIDo.map((v, i) => (
        <Project key={i} workDetails={v} />
      ))}
    </div>
  );
}
