import AboutUs from "@/components/home/AboutUs";
import ContactUs from "@/components/home/ContactUs";
import Landing from "@/components/home/Landing";
import LatestNews from "@/components/home/LatestNews";

import Post from "@/components/home/Post";
import React from "react";

function Home() {
  return (
    <div>
      <div className="py-24">
        <div className="items-center ">
          <Landing />
          <LatestNews />
          <AboutUs />
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

export default Home;
