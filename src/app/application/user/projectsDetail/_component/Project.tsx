import Card_GlassImageV from "@/components/card_GlassImageV";
import { iWhatIDoData } from "@/types/types";

export default function Project({
  workDetails,
}: {
  workDetails?: Partial<iWhatIDoData>;
}) {
  return (
    <div id={workDetails?.workTopic} className="p-10 font-mono">
      <div className="flex justify-between">
        <div>
          <div className="text-white text-4xl font-bold">
            {workDetails?.workTitle}
          </div>
          <div className="text-zinc-300">{workDetails?.workSubtitle}</div>
        </div>
      </div>

      <div className="flex flex-wrap py-5 lg:p-3 gap-5 justify-center">
        {workDetails?.workProjects?.map((v, i) => (
          <Card_GlassImageV
            key={i}
            imgPath={v?.projImgPath ? v?.projImgPath : ""}
            title={v?.projTitle}
            subtitle={v?.projSubtitle}
            description={v?.projDescription}
            links={v?.projLinks}
          />
        ))}
      </div>
    </div>
  );
}
