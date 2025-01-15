import HeroSection from "./_component/heroSection";
import WhatIDo from "./_component/whatIdo";
import WhoIAm from "./_component/whoIAm";

export const metadata = {
  title: "Dashboard : Overview",
};

export default function page() {
  return (
    <div
      style={{
        background:
          "url(/images/background1.png) center, linear-gradient(45deg, rgb(0 9 95), rgb(124 50 154) 70%)",
      }}
    >
      <HeroSection />
      <WhoIAm />
      <WhatIDo />
    </div>
  );
}
