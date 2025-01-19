import { iProjectDetails, iWhatIDoData } from "@/types/types";
import { db } from "@/utilities/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function getProjectDetails(): Promise<
  Array<Partial<iWhatIDoData>>
> {
  try {
    const q_WhatIDo = query(collection(db, "whatido"));
    const qs_WhatIDo = await getDocs(q_WhatIDo);
    const whatIDo: Array<Partial<iWhatIDoData>> = [];

    for (const docDo of qs_WhatIDo.docs) {
      const whatIdoData: iWhatIDoData = docDo.data();

      const q_Projects = query(
        collection(db, "projectdetails"),
        where("projTopic", "==", whatIdoData.workTopic)
      );
      const qs_Projects = await getDocs(q_Projects);
      const projects: Array<Partial<iProjectDetails>> = [];

      qs_Projects.forEach((docProject) => {
        projects.push({ ...docProject.data(), id: docProject.id });
      });

      whatIDo.push({ ...whatIdoData, workProjects: projects, id: docDo.id });
    }

    return whatIDo;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}
