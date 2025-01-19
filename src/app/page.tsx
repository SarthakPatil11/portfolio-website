import { redirect } from "next/navigation";

export default function Home() {
  redirect("/application/user/overview");
}
