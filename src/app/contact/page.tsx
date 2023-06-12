import Image from "next/image";
import React from "react";
import { BsFillTelephoneFill, BsGlobe } from 'react-icons/bs';
import { AiFillFacebook, AiFillYoutube, AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai';

type Props = {};




const Contact = (props: Props) => {
  return (
    <>
      <div className="bg-emerald-500 text-white font-Poppins">
        <div className="container mx-auto py-10">
          <div className="flex flex-col lg:flex-row justify-center items-center space-x-0 lg:space-x-20 space-y-16 lg:space-y-0 mx-8 lg:mx-12">
           
            <div className="flexTwo w-auto lg:w-1/2 flex flex-col justify-start items-start space-y-5 lg:space-y-8">
              <span className="text-5xl lg:text-7xl font-extrabold uppercase">
                Contact
              </span>
              <span className="h-1 w-20 bg-white" />
              <p className="">
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>

              <div className="flex flex-row justify-center items-center space-x-5">
                <span className="icon text-3xl text-white p-3 rounded-full border border-cyan-200"><BsFillTelephoneFill/></span>
                <div className="flex flex-col justify-start items-start">
                  <span className="text-base font-bold">Phone</span>
                  <span className="text-base ">+91 9090909090</span>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center space-x-5">
                <span className="icon text-3xl text-white p-3 rounded-full border border-cyan-200"><AiOutlineMail/></span>
                <div className="flex flex-col justify-start items-start">
                  <span className="text-base font-bold">Email</span>
                  <span className="text-base ">gyanindrayadav1@gmail.com</span>
                </div>
              </div>


              <a href="http://www.gyanindra.com" target="_blank" rel="noopener noreferrer">
              <div className="flex flex-row justify-center items-center space-x-5">
                <span className="icon text-3xl text-white p-3 rounded-full border border-cyan-200"><BsGlobe/></span>
                <div className="flex flex-col justify-start items-start">
                  <span className="text-base font-bold">Website</span>
                  <span className="text-base ">www.gyanindra.com</span>
                </div>
              </div>
              </a>
            </div>

            <div className="lg:w-1/3 md:w-1/2  flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
    
      <div className="relative mb-4">
      
        <input type="text" id="name" name="name" placeholder="Your Name" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
  
        <input type="email" id="email" name="email" placeholder="Email Address" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
  
        <textarea id="message" name="message" placeholder="Your Message" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded-xl text-lg">Send Message</button>
    </div>

          </div>

          
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#D81B60" fill-opacity="1" d="M0,224L40,186.7C80,149,160,75,240,42.7C320,11,400,21,480,64C560,107,640,181,720,213.3C800,245,880,235,960,202.7C1040,171,1120,117,1200,117.3C1280,117,1360,171,1400,197.3L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
        <div className="bg-[#D81B60]">
          <div className="container mx-auto">
            <div className="flex flex-col justify-center items-center space-y-8">
              <Image className="" src="/small.png" width={266} height={158} alt="smallOne"/>
              <span className="text-xl lg:text-3xl font-bold uppercase">it&apos;s trucking good !</span>
              <p className="mx-10 lg:mx-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis praesentium impedit aut illo qui ut porro quidem nihil aperiam corporis iste, fuga explicabo sint numquam fugiat.</p>

              <div className="flex flex-row justify-center items-center space-x-5">
              <span className="text-3xl p-2 text-white hover:text-pink-700 bg-pink-500 hover:bg-white"><AiFillFacebook/></span>
                <span className="text-3xl p-2 text-white hover:text-pink-700 bg-pink-500 hover:bg-white"><AiOutlineTwitter/></span>
                <span className="text-3xl p-2 text-white hover:text-pink-700 bg-pink-500 hover:bg-white"><AiFillYoutube/></span>
              </div>

              <span className="text-sm pt-16 pb-20 lg:pb-0">Copyright @ 2023 || Designed by Gyanindra Yadav</span>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Contact;
