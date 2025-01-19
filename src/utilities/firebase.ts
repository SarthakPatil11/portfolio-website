import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { listProjects, listTimelineData, listWhatIDo } from "./initialData";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// async function addDataWhatIDo() {
//   console.log("[START] addDataWhatIDo()");
//   for (const wdo of listWhatIDo) {
//     console.log(wdo);
//     const data = await addDoc(collection(db, "whatido"), listWhatIDo[0]);
//     console.log(data.id);
//   }
//   console.log("[END] addDataWhatIDo()");
// }

// async function addDataProjectDetails() {
//   console.log("[START] addDataProjectDetails()");
//   for (const wdo of listProjects) {
//     console.log(wdo);
//     const data = await addDoc(collection(db, "projectdetails"), wdo);
//     console.log(data);
//   }
//   console.log("[END] addDataProjectDetails()");
// }

// async function addDataTimeline() {
//   console.log("[START] addDataTimeline()");
//   for (const wdo of listTimelineData) {
//     console.log(wdo);
//     const data = await addDoc(collection(db, "timeline"), wdo);
//     console.log(data);
//   }
//   console.log("[END] addDataTimeline()");
// }

// async function addInitialData() {
//   console.log("[START] addInitialData()");
//   await addDataWhatIDo();
//   await addDataProjectDetails();
//   await addDataTimeline();
//   console.log("[END] addInitialData()");
// }

export { db };
