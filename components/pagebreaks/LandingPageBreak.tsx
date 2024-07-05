import React from "react";
import Image from "next/image";
import blob1 from "../../app/public/blobs/blob1.svg";

function LandingPageBreak() {
  return (
    <div className="absolute w-full flex justify-center mb-20">
      <Image
        src={blob1}
        alt={"blob"}
        className="absolute w-full h-auto max-w-screen-2xl"
      />
    </div>
  );
}

export default LandingPageBreak;
