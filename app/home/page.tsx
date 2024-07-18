import AboutUs from "@/components/home/AboutUs";
import ContactUs from "@/components/home/ContactUs";
import Landing from "@/components/home/Landing";
import LatestNews from "@/components/home/LatestNews";
import blob1 from "../../app/public/blobs/blob1.svg";
import Image from "next/image";
import React from "react";
import LandingPageBreak from "@/components/pagebreaks/LandingPageBreak";

function Home() {
  return (
    <div className="relative">
      <div className="py-24">
        <div className="items-center">
          <Landing />

          <LandingPageBreak />

          <LatestNews />
          <AboutUs />
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

export default Home;
