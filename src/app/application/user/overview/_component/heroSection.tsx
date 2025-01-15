import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function HeroSection() {
  return (
    <div
      id="HeroSection"
      className="hero mt-[-40px] bg-base-200 min-h-screen bg-[url('/images/background.png')] bg-cover bg-center"
    >
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src="/images/profile.png"
          alt="Example Image"
          width={600}
          height={800}
          className="h-80 w-60 glass rounded-xl"
        />
        <div className="px-3">
          <h1 className="text-5xl font-bold">
            Hello, I am <span className="text-yellow-500">Sarthak Patil.</span>
          </h1>
          <p className="py-6">
            A <span className="text-yellow-500">Software Developer</span> likes
            to solve problems and enjoy learning new things.
            <br />
            Currently, Learning 
            <span className="text-yellow-500"> UI/ UX Design</span>.
          </p>
          <button className="btn btn-warning text-white">
            Resume <ExternalLink className="h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
