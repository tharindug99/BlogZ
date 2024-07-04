import React from "react";
import Image from "next/image";
import backgroundImg from "../../app/public/images/bg.jpg";

function Landing() {
  return (
    <div className="flex flex-col md:flex-row items-center p-6 z-0 w-full h-screen">
      <Image
        src={backgroundImg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="pointer-events-none -z-10"
        style={{
          backgroundRepeat: "repeat",
          backgroundImage: `url(${backgroundImg.src})`,
        }}
      />
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="lg:text-8xl font-bold lg:mb-4">
          Welcome to Little Paws
        </h1>
        <p className="text-lg">Your go-to blog for all things pets!</p>
      </div>

      <div className="lg:my-6 md:mt-0 md:w-1/2 flex justify-center lg:pb-20">
        <div className="grid grid-cols-2 gap-2 -z-10">
          <div className="col-span-1 flex justify-center ">
            <img
              src="https://www.shutterstock.com/image-photo/furry-friends-red-cat-corgi-600nw-1992708143.jpg"
              alt="Cute pet 1"
              className="w-full h-auto max-w-xs rounded-lg shadow-md "
            />
          </div>
          <div className="col-span-1 flex justify-center ">
            <div>
              <img
                src="https://media.zenfs.com/en/purewow_185/d5075b7e41abc21717ef270c4916238c"
                alt="Cute pet 2"
                className="w-full h-auto max-w-xs rounded-lg shadow-md "
              />
            </div>
          </div>
          <div className="col-span-1 flex justify-center ">
            <img
              src="https://birdsupplies.com/cdn/shop/articles/6_Things_I_Learned_From_My_Parrot.jpg?v=1614149703&width=1024"
              alt="Cute pet 1"
              className="w-full h-auto max-w-xs rounded-lg shadow-md "
            />
          </div>
          <div className="col-span-1 flex justify-center ">
            <img
              src="https://wallpapers.com/images/hd/hamster-02ues2pcgj1wp15x.jpg"
              alt="Cute pet 1"
              className="w-full h-auto max-w-xs rounded-lg shadow-md "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
