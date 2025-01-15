import Timeline from "@/components/timeline";
import { iTimelineData } from "@/types/types";
import { SquarePlus } from "lucide-react";

const listTimelineData: iTimelineData[] = [
  {
    year: "Full Time Job | Jul 2023 - Present",
    title: "Programmer",
    company: "Acty Systems",
    description: [
      "Developed web applications using C# with front-end technologies (HTML, CSS, JavaScript) and RESTful APIs to manage communication between client and server.",
      "Built and consumed REST APIs for seamless integration and data exchange across services.",
      "Developed Windows Services for background tasks, ensuring reliable performance and task automation.",
      "Worked with SQL Server, Entity Framework, and LINQ for data access, querying, and management.",
      "Contributed to .NET web solutions, implementing secure authentication and custom business logic.",
      "Integrated AWS services like SQS, RDS, S3, and IoT Core for cloud-based solutions. Utilized MQTT for efficient messaging in C# applications, enhancing IoT communication.",
    ],
    head: true,
  },
  {
    year: "Internship | May 2019 - Aug 2019 | 16 weeks",
    title: "Web Developer",
    company: "Fox & Cloud Technologies",
    description: [
      "Learned Python concepts from basic to intermediate level for web development and applied them to day-to-day tasks.",
      "Developed expertise in Django framework for full-stack web development and maintained backend for various websites.",
      "Improved skills in HTML, CSS, JS and learned Bootstrap framework for maintaining the frontend.",
      "Enhancing communication abilities and improving teamwork.",
    ],
    isLeft: true,
    tail: true,
  },
];

export default function WhoIAm() {
  return (
    <div id="WhoIAm" className="p-10 font-mono">
      <div className="flex justify-between">
        <div>
          <div className="text-white text-4xl font-bold">Who I am</div>
          <div className="text-zinc-300">
            The roles in which I have work
            <span className="text-white"> experience</span>.
          </div>
        </div>
        <button className="btn btn-warning">
          <SquarePlus className="h-4" />
        </button>
      </div>

      <div className="flex flex-wrap py-5 lg:p-3 gap-5 justify-center">
        <Timeline listTimelineData={listTimelineData} />
      </div>
    </div>
  );
}
