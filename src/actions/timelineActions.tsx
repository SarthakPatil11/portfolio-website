import { iTimelineData } from "@/types/types";
import { db } from "@/utilities/firebase";
import { collection, query, getDocs } from "firebase/firestore";

export async function getTimelineData(): Promise<
  Array<Partial<iTimelineData>>
> {
  try {
    const q = query(collection(db, "timeline"));
    const querySnapshot = await getDocs(q);
    const projects: Array<Partial<iTimelineData>> = [];

    querySnapshot.forEach((doc) => {
      projects.push({ ...doc.data(), id: doc.id });
      console.log(doc.id, " => ", doc.data());
    });

    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}
