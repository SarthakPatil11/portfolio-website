import { getProjectDetails } from "@/actions/projectDetails";
import Project from "./_component/Project";

export default async function page() {
  const listWhatIDo = await getProjectDetails();

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
