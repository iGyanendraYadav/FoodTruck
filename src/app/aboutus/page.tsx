import Image from "next/image";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <>
      <div className="bg-emerald-500 text-white font-Poppins">
        <div className="container mx-auto py-20">
          <div className="flex flex-col lg:flex-row justify-center items-center space-x-0 lg:space-x-20 space-y-16 lg:space-y-0 mx-5 lg:mx-12">
            <Image  src="/about2.jpg" width={475} height={645} alt="about" />
            <div className="flexTwo w-auto lg:w-1/2 flex flex-col justify-start items-start space-y-3">
              <span className="text-5xl lg:text-7xl font-extrabold uppercase">
                About Us
              </span>
              <span className="h-1 w-20 bg-white" />
              <span className="text-3xl font-bold">
                NULLAM AC URNA EU FELIS DAPIBUS CONDIMENTUM SIT AMET A AUGUE.
                SED NON NEQUE ELIT.
              </span>
              <p className="">
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
