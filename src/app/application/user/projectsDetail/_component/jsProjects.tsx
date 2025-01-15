import Card_GlassImageV from "@/components/card_GlassImageV";
import CTAButton from "@/components/ctaButton";
import { iProjectDetails } from "@/types/types";

export default function JSProjects({
  listProjectDetails,
}: {
  listProjectDetails: iProjectDetails[];
}) {
  return (
    <div id="WhoIAm" className="p-10 font-mono">
      <div className="flex justify-between">
        <div>
          <div className="text-white text-4xl font-bold">
            Full Stack JavaScript
          </div>
          <div className="text-zinc-300">
            I have completed one
            <span className="text-white"> major project</span>.
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
