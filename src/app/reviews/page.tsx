import Image from 'next/image'
import React from 'react'

type Props = {}

const Reviews = (props: Props) => {
  return (
    <div className='font-Poppins bg-emerald-500 text-white'>
    <div className="container mx-auto py-20">
        <div className="headline flex flex-col justify-center items-center space-y-3 lg:space-y-5">
            <span className="text-5xl lg:text-7xl font-extrabold uppercase">Reviews</span>
            <span className="h-1 w-20 bg-white" />
            <p className="mx-10 lg:mx-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10 py-10 mx-5 lg:mx-12">
            <div className="flex flex-col justify-start items-start border border-emerald-300 border-opacity-40 p-4 rounded-xl hover:shadow-emerald-300 shadow-inner">
                <span className="text-2xl font-bold">&#8220;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, odit! Nemo dicta hic vero earum.&#8221;</span>
                <span className="text-lg ">Shree Ram Singh</span>
                <span className="text-sm">Ayodhya, Uttar Pradesh</span>

            </div>

            <div className="flex flex-col justify-start items-start border border-emerald-300 border-opacity-40 p-4 rounded-xl hover:shadow-emerald-300 shadow-inner">
                <span className="text-2xl font-bold">&#8220;Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias recusandae eum consectetur rerum, in dicta. &#8221;</span>
                <span className="text-lg ">Shree Krishna Yadav</span>
                <span className="text-sm">Dwaraka, Gujrat</span>

            </div>

            <div className="flex flex-col justify-start items-start border border-emerald-300 border-opacity-40 p-4 rounded-xl hover:shadow-emerald-300 shadow-inner">
                <span className="text-2xl font-bold">&#8220;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, odit! Nemo dicta hic vero earum.&#8221;</span>
                <span className="text-lg ">Ajeet Singhania</span>
                <span className="text-sm">Bengaluru, Karnataka</span>

            </div>

            <div className="flex flex-col justify-start items-start border border-emerald-300 border-opacity-40 p-4 rounded-xl hover:shadow-emerald-300 shadow-inner">
                <span className="text-2xl font-bold">&#8220;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, odit! Nemo dicta hic vero earum.&#8221;</span>
                <span className="text-lg ">J Sai Deepak</span>
                <span className="text-sm">Tamilnadu, India</span>

            </div>

            <div className="flex flex-col justify-start items-start border border-emerald-300 border-opacity-40 p-4 rounded-xl hover:shadow-emerald-300 shadow-inner">
                <span className="text-2xl font-bold">&#8220;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, odit! Nemo dicta hic vero earum.&#8221;</span>
                <span className="text-lg ">Rajesh Bharat</span>
                <span className="text-sm">Prayagraj, Uttar Pradesh</span>

            </div>

            <div className="flex flex-col justify-start items-start border border-emerald-300 border-opacity-40 p-4 rounded-xl hover:shadow-emerald-300 shadow-inner">
                <span className="text-2xl font-bold">&#8220;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, odit! Nemo dicta hic vero earum.&#8221;</span>
                <span className="text-lg ">Mohit Tiwari</span>
                <span className="text-sm">Rewa, Madhya Pradesh</span>

            </div>
        </div>

    </div>
</div>
  )
}

export default Reviews