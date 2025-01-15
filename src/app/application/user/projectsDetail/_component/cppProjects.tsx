import Card_GlassImageV from "@/components/card_GlassImageV";
import CTAButton from "@/components/ctaButton";
import { iProjectDetails } from "@/types/types";

export default function CPPProjects({
  listProjectDetails,
}: {
  listProjectDetails: iProjectDetails[];
}) {
  return (
    <div id="WhoIAm" className="p-10 font-mono">
      <div className="flex justify-between">
        <div>
          <div className="text-white text-4xl font-bold">C & C++</div>
          <div className="text-zinc-300">
            Completed Data Structures and Algorithms course, utilized in
            competitive programming, and completed a
            <span className="text-white"> hardware project</span>.
          </div>
        </div>
      </div>

      <div className="flex flex-wrap p-7 gap-5 justify-center">
        {listProjectDetails.map((v, i) => (
          <Card_GlassImageV
            key={i}
            imgPath={v.projImgPath}
            title={v.projTitle}
            subtitle={v.projSubtitle}
            description={v.projDescription}
            links={<CTAButton>See Github</CTAButton>}
          />
        ))}
      </div>
    </div>
  );
}
