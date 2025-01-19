import { iWhatIDoData } from "@/types/types";
import { db } from "@/utilities/firebase";
import { collection, getDocs, query } from "firebase/firestore";

export async function getWhatIDoData(): Promise<Array<Partial<iWhatIDoData>>> {
  try {
    const q = query(collection(db, "whatido"));
    const querySnapshot = await getDocs(q);
    const projects: Array<Partial<iWhatIDoData>> = [];

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
