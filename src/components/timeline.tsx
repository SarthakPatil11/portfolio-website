import { CircleCheck } from "lucide-react";
import { iTimelineData } from "@/types/types";

export default function Timeline({
  listTimelineData,
}: {
  listTimelineData: Array<Partial<iTimelineData>>;
}) {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      {listTimelineData.map((v, i) => (
        <Milestone key={i} timelineData={v} />
      ))}
    </ul>
  );
}

function Milestone({ timelineData }: { timelineData: Partial<iTimelineData> }) {
  return (
    <li>
      {timelineData.head ? "" : <hr className="bg-zinc-300" />}
      <div className="timeline-middle">
        <CircleCheck />
      </div>
      <div
        className={
          timelineData.isLeft
            ? "timeline-start mb-10 md:text-end"
            : "timeline-end md:mb-10"
        }
      >
        <time className="font-mono italic">{timelineData.year}</time>
        <div className="glass mt-2 p-4 rounded-lg md:text-start">
          <div className="text-xl font-black">{timelineData.title}</div>
          <p className="text-sm font-normal text-zinc-100 mb-2">
            @ {timelineData.company}
          </p>
          <div className="text-zinc-200 text-sm">
            <ul className="list-disc pl-5">
              {timelineData.description?.map((v, i) => (
                <li key={i}>{v}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {timelineData.tail ? "" : <hr className="bg-zinc-300" />}
    </li>
  );
}
