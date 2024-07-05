import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faHeart, faLeaf } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import backgroundImg from "../../app/public/images/aboutBg.jpeg"; // Adjust the path as needed

function AboutUs() {
  return (
    <div className="relative lg:px-36 gap-6 flex flex-col md:flex-row items-center justify-around p-6 h-screen">
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="pointer-events-none -z-10 rounded-3xl"
          style={{
            backgroundRepeat: "repeat",
          }}
        />
      </div>
      <div className="flex flex-col items-center md:w-1/3 p-4 z-10 bg-white py-28 rounded-lg bg-opacity-80">
        <FontAwesomeIcon icon={faPaw} height={40} width={40} className="mb-4" />
        <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
        <p className="text-center">
          We aim to provide the best information and resources to help you take
          care of your furry friends.
        </p>
      </div>
      <div className="flex flex-col items-center md:w-1/3 p-4 z-10 bg-white py-28 rounded-lg bg-opacity-80">
        <FontAwesomeIcon
          icon={faHeart}
          height={40}
          width={40}
          className="mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">Our Values</h2>
        <p className="text-center">
          We believe in compassion, care, and love for all pets. Our content is
          driven by these values.
        </p>
      </div>
      <div className="flex flex-col items-center md:w-1/3 p-4 z-10 bg-white py-28 rounded-lg bg-opacity-80">
        <FontAwesomeIcon
          icon={faLeaf}
          height={40}
          width={40}
          className="mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">Sustainability</h2>
        <p className="text-center">
          We promote eco-friendly practices and products to ensure a better
          future for our pets and the planet.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
