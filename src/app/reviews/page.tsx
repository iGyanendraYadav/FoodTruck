import Image from 'next/image'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'

type Props = {}

const Reviews = (props: Props) => {
  return (
    <div className='font-Poppins bg-emerald-500 text-white'>
    <div className="container mx-auto pt-20 pb-0">
        <div className="headline flex flex-col justify-center items-center space-y-3 lg:space-y-5">
            <span className="text-5xl lg:text-7xl font-extrabold uppercase">Reviews</span>
            <span className="h-1 w-20 bg-white" />
            <p className="mx-10 lg:mx-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10 py-10 mx-5 lg:mx-12">
            <div className="flex flex-col justify-start items-start border border-emerald-300 border-opacity-40 p-4 rounded-xl hover:shadow-emerald-300 shadow-inner">
                <span className="text-2xl font-bold">&#8220;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, odit! Nemo dicta hic vero earum.&#8221;</span>
                <div className="flex flex-row justify-start items-start space-x-3">
                    <Image className='rounded-full border-2 border-emerald-300 h-14 w-14' src="/user1.jfif" alt='user1' width={50} height={50}  />
                    <div className="flex flex-col justify-start items-start">
                    <span className="text-lg ">Shree Ram Singh</span>
                <span className="text-sm">Ayodhya, Uttar Pradesh</span>

                    </div>
                </div>


            </div>

            <div className="flex flex-col justify-start items-start border border-emerald-300 border-opacity-40 p-4 rounded-xl hover:shadow-emerald-300 shadow-inner">
                <span className="text-2xl font-bold">&#8220;Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias recusandae eum consectetur rerum. &#8221;</span>
                <div className="flex flex-row justify-start items-start space-x-3">
                    <Image className='rounded-full border-2 border-emerald-300 h-14 w-14' src="/user2.jpg" alt='user2' width={50} height={50}  />
                    <div className="flex flex-col justify-start items-start">
                    <span className="text-lg ">Manish Yadav</span>
                <span className="text-sm">Ghazipur, Uttar Pradesh</span>

                    </div>
                </div>

            </div>

            <div className="flex flex-col justify-start items-start border border-emerald-300 border-opacity-40 p-4 rounded-xl hover:shadow-emerald-300 shadow-inner">
                <span className="text-2xl font-bold">&#8220;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, odit! Nemo dicta hic vero earum.&#8221;</span>
                <div className="flex flex-row justify-start items-start space-x-3">
                    <Image className='rounded-full border-2 border-emerald-300 h-14 w-14' src="/user3.jpg" alt='user3' width={50} height={50}  />
                    <div className="flex flex-col justify-start items-start">
                    <span className="text-lg ">Venkatesh Srinivas</span>
                <span className="text-sm">Vijaywada, Andhra Pradesh</span>

                    </div>
                </div>

            </div>

            <div className="flex flex-col justify-start items-start border border-emerald-300 border-opacity-40 p-4 rounded-xl hover:shadow-emerald-300 shadow-inner">
                <span className="text-2xl font-bold">&#8220;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, odit! Nemo dicta hic vero earum.&#8221;</span>
                <div className="flex flex-row justify-start items-start space-x-3">
                    <Image className='rounded-full border-2 border-emerald-300 h-14 w-14' src="/user4.jfif" alt='user4' width={50} height={50}  />
                    <div className="flex flex-col justify-start items-start">
                    <span className="text-lg ">Ramesh Singhania</span>
                <span className="text-sm">Jaipur, Rajasthan</span>

                    </div>
                </div>

            </div>

            <div className="flex flex-col justify-start items-start border border-emerald-300 border-opacity-40 p-4 rounded-xl hover:shadow-emerald-300 shadow-inner">
                <span className="text-2xl font-bold">&#8220;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, odit! Nemo dicta hic vero earum.&#8221;</span>
                <div className="flex flex-row justify-start items-start space-x-3">
                    <Image className='rounded-full border-2 border-emerald-300 h-14 w-14' src="/user5.jfif" alt='user5' width={50} height={50}  />
                    <div className="flex flex-col justify-start items-start">
                    <span className="text-lg ">Kristen Peter</span>
                <span className="text-sm">LA, USA</span>

                    </div>
                </div>

            </div>

            <div className="flex flex-col justify-start items-start border border-emerald-300 border-opacity-40 p-4 rounded-xl hover:shadow-emerald-300 shadow-inner">
                <span className="text-2xl font-bold">&#8220;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, odit! Nemo dicta hic vero earum.&#8221;</span>
                <div className="flex flex-row justify-start items-start space-x-3">
                    <Image className='rounded-full border-2 border-emerald-300 h-14 w-14' src="/user6.jfif" alt='user6' width={50} height={50}  />
                    <div className="flex flex-col justify-start items-start">
                    <span className="text-lg ">David James</span>
                <span className="text-sm">London, UK</span>

                    </div>
                </div>

            </div>
        </div>

    </div>

 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#D81B60" fill-opacity="1" d="M0,224L60,218.7C120,213,240,203,360,176C480,149,600,107,720,96C840,85,960,107,1080,144C1200,181,1320,235,1380,261.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

    <div className=" bg-[#D81B60]">
        <div className="container mx-auto">
           <div className="flex flex-col justify-center items-center space-y-3 pb-16">
            <span className="text-3xl lg:text-5xl font-extrabold uppercase tracking-widest">Mostly Got</span>
            <span className="text-5xl lg:text-9xl flex flex-row justify-center items-center space-x-2"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></span>
           </div>
        </div>
    </div>
</div>
  )
}

export default Reviews