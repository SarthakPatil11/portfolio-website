import Card_Glass from "@/components/card_Glass";
import { getWhatIDoData } from "@/actions/whatIDoData";

export default async function WhatIDo() {
  const listWhatIDo = await getWhatIDoData();

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
        {/* <CTAButton
          onClick={() => {
            addInitialData();
          }}
        >
          <SquarePlus className="h-4" />
        </CTAButton> */}
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
      {/* <ProjectModal isOpen={isProjectModalOpen} onSubmit={projectFormSubmit} /> */}
    </div>
  );
}
