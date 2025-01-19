import { getTimelineData } from "@/actions/timelineActions";
import Timeline from "@/components/timeline";
// import { SquarePlus } from "lucide-react";

export default async function WhoIAm() {
  const listTimelineData = await getTimelineData();
  listTimelineData.sort((a, b) => {
    if (a.nodeNum === null || a.nodeNum === undefined) return 1;
    if (b.nodeNum === null || b.nodeNum === undefined) return -1;
    return a.nodeNum - b.nodeNum;
  });

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
        {/* <button className="btn btn-warning">
          <SquarePlus className="h-4" />
        </button> */}
      </div>

      <div className="flex flex-wrap py-5 lg:p-3 gap-5 justify-center">
        <Timeline listTimelineData={listTimelineData} />
      </div>
    </div>
  );
}
