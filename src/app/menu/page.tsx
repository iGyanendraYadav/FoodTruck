import Image from 'next/image'
import React from 'react'

type Props = {}

const Menu = (props: Props) => {
  return (
    <div className='font-Poppins bg-emerald-500 text-white'>
        <div className="container mx-auto py-20">
            <div className="headline flex flex-col justify-center items-center space-y-3 lg:space-y-5">
                <span className="text-5xl lg:text-7xl font-extrabold uppercase">Our Menu</span>
                <span className="h-1 w-20 bg-white" />
                <p className="mx-10 lg:mx-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 my-10 mx-5 lg:mx-12">
                <div className="IceCreame group flex flex-col justify-center items-center space-y-3 border border-emerald-300 border-opacity-30 hover:border-opacity-0 hover:bg-emerald-600 p-10 ">
                    <div className="flex flex-row justify-center items-center space-x-3">
                        <span className='text-xl lg:text-3xl font-bold uppercase'>Ice Creame</span>
                        <span className="h-1 w-40 bg-white"/>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-3">
                        <div className="singleOne flex flex-row justify-between items-center space-x-10">
                            <div className="flex flex-row justify-center items-center space-x-3">
                                <Image src="/ic01.jpg" height={100} width={100} alt='ic01' />
                                <div className="flex flex-col justify-start items-start">
                                    <span className='text-lg font-bold'>Ice Cream 01</span>
                                    <p>A short description</p>
                                </div>
                            </div>
                            <span className='text-lg font-bold'>₹ 199</span>

                            


                        </div>
                        <hr className='h-[1px] bg-emerald-300 w-full opacity-30 group-hover:opacity-0'/>

                        <div className="singleOne flex flex-row justify-between items-center space-x-10">
                            <div className="flex flex-row justify-center items-center space-x-3">
                                <Image src="/ic02.jpg" height={100} width={100} alt='ic02' />
                                <div className="flex flex-col justify-start items-start">
                                    <span className='text-lg font-bold'>Ice Cream 02</span>
                                    <p>A short description</p>
                                </div>
                            </div>
                            <span className='text-lg font-bold'>₹ 299</span>

                            


                        </div>
                        <hr className='h-[1px] bg-emerald-300 w-full opacity-30 group-hover:opacity-0'/>

                        <div className="singleOne flex flex-row justify-between items-center space-x-10">
                            <div className="flex flex-row justify-center items-center space-x-3">
                                <Image src="/ic03.jpg" height={100} width={100} alt='ic03' />
                                <div className="flex flex-col justify-start items-start">
                                    <span className='text-lg font-bold'>Ice Cream 03</span>
                                    <p>A short description</p>
                                </div>
                            </div>
                            <span className='text-lg font-bold'>₹ 399</span>

                            


                        </div>
                        <hr className='h-[1px] bg-emerald-300 w-full opacity-30 group-hover:opacity-0'/>

                        <div className="singleOne flex flex-row justify-between items-center space-x-10">
                            <div className="flex flex-row justify-center items-center space-x-3">
                                <Image src="/ic04.jpg" height={100} width={100} alt='ic04' />
                                <div className="flex flex-col justify-start items-start">
                                    <span className='text-lg font-bold'>Ice Cream 04</span>
                                    <p>A short description</p>
                                </div>
                            </div>
                            <span className='text-lg font-bold'>₹ 499</span>

                            


                        </div>
                        <hr className='h-[1px] bg-emerald-300 w-full opacity-30 group-hover:opacity-0'/>
                    </div>
                </div>
                <div className="Shakes group flex flex-col justify-center items-center space-y-3 border border-emerald-300 border-opacity-30 hover:border-opacity-0 hover:bg-emerald-600 p-10">
                    <div className="flex flex-row justify-center items-center space-x-3">
                        <span className='text-xl lg:text-3xl font-bold uppercase'>Shakes</span>
                        <span className="h-1 w-40 bg-white"/>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-3">
                        <div className="singleOne flex flex-row justify-between items-center space-x-10">
                            <div className="flex flex-row justify-center items-center space-x-3">
                                <Image src="/shake1.jpg" height={100} width={100} alt='shake1' />
                                <div className="flex flex-col justify-start items-start">
                                    <span className='text-lg font-bold'>Shake 01</span>
                                    <p>A short description</p>
                                </div>
                            </div>
                            <span className='text-lg font-bold'>₹ 149</span>

                            


                        </div>
                        <hr className='h-[1px] bg-emerald-300 w-full opacity-30 group-hover:opacity-0'/>

                        <div className="singleOne flex flex-row justify-between items-center space-x-10">
                            <div className="flex flex-row justify-center items-center space-x-3">
                                <Image src="/shake2.jpg" height={100} width={100} alt='shake2' />
                                <div className="flex flex-col justify-start items-start">
                                    <span className='text-lg font-bold'>Shake 02</span>
                                    <p>A short description</p>
                                </div>
                            </div>
                            <span className='text-lg font-bold'>₹ 249</span>

                            


                        </div>
                        <hr className='h-[1px] bg-emerald-300 w-full opacity-30 group-hover:opacity-0'/>

                        <div className="singleOne flex flex-row justify-between items-center space-x-10">
                            <div className="flex flex-row justify-center items-center space-x-3">
                                <Image src="/shake3.jpg" height={100} width={100} alt='shake3' />
                                <div className="flex flex-col justify-start items-start">
                                    <span className='text-lg font-bold'>Shake 03</span>
                                    <p>A short description</p>
                                </div>
                            </div>
                            <span className='text-lg font-bold'>₹ 349</span>

                            


                        </div>
                        <hr className='h-[1px] bg-emerald-300 w-full opacity-30 group-hover:opacity-0'/>

                        <div className="singleOne flex flex-row justify-between items-center space-x-10">
                            <div className="flex flex-row justify-center items-center space-x-3">
                                <Image src="/shake4.jpg" height={100} width={100} alt='shake4' />
                                <div className="flex flex-col justify-start items-start">
                                    <span className='text-lg font-bold'>Shake 04</span>
                                    <p>A short description</p>
                                </div>
                            </div>
                            <span className='text-lg font-bold'>₹ 449</span>

                            


                        </div>
                        <hr className='h-[1px] bg-emerald-300 w-full opacity-30 group-hover:opacity-0'/>
                    </div>
                </div>
                <div className="Coolers group flex flex-col justify-center items-center space-y-3 border border-emerald-300 border-opacity-30 hover:border-opacity-0 hover:bg-emerald-600 p-10">
                    <div className="flex flex-row justify-center items-center space-x-3">
                        <span className='text-xl lg:text-3xl font-bold uppercase'>Coolers</span>
                        <span className="h-1 w-40 bg-white"/>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-3">
                        <div className="singleOne flex flex-row justify-between items-center space-x-10">
                            <div className="flex flex-row justify-center items-center space-x-3">
                                <Image src="/cooler1.jpg" height={100} width={100} alt='cooler1' />
                                <div className="flex flex-col justify-start items-start">
                                    <span className='text-lg font-bold'>Cooler 01</span>
                                    <p>A short description</p>
                                </div>
                            </div>
                            <span className='text-lg font-bold'>₹ 1049</span>

                            


                        </div>
                        <hr className='h-[1px] bg-emerald-300 w-full opacity-30 group-hover:opacity-0'/>

                        <div className="singleOne flex flex-row justify-between items-center space-x-10">
                            <div className="flex flex-row justify-center items-center space-x-3">
                                <Image src="/cooler2.jpg" height={100} width={100} alt='cooler2' />
                                <div className="flex flex-col justify-start items-start">
                                    <span className='text-lg font-bold'>Cooler 02</span>
                                    <p>A short description</p>
                                </div>
                            </div>
                            <span className='text-lg font-bold'>₹ 2049</span>

                            


                        </div>
                        <hr className='h-[1px] bg-emerald-300 w-full opacity-30 group-hover:opacity-0'/>

                        <div className="singleOne flex flex-row justify-between items-center space-x-10">
                            <div className="flex flex-row justify-center items-center space-x-3">
                                <Image src="/cooler3.jpg" height={100} width={100} alt='cooler3' />
                                <div className="flex flex-col justify-start items-start">
                                    <span className='text-lg font-bold'>Cooler 03</span>
                                    <p>A short description</p>
                                </div>
                            </div>
                            <span className='text-lg font-bold'>₹ 3049</span>

                            


                        </div>
                        <hr className='h-[1px] bg-emerald-300 w-full opacity-30 group-hover:opacity-0'/>

                        <div className="singleOne flex flex-row justify-between items-center space-x-10">
                            <div className="flex flex-row justify-center items-center space-x-3">
                                <Image src="/cooler4.jpg" height={100} width={100} alt='cooler4' />
                                <div className="flex flex-col justify-start items-start">
                                    <span className='text-lg font-bold'>Cooler 04</span>
                                    <p>A short description</p>
                                </div>
                            </div>
                            <span className='text-lg font-bold'>₹ 4049</span>

                            


                        </div>
                        <hr className='h-[1px] bg-emerald-300 w-full opacity-30 group-hover:opacity-0'/>
                    </div>
                </div>
                <div className="Gelato group flex flex-col justify-center items-center space-y-3 border border-emerald-300 border-opacity-30 hover:border-opacity-0 hover:bg-emerald-600 p-10">
                    <div className="flex flex-row justify-center items-center space-x-3">
                        <span className='text-xl lg:text-3xl font-bold uppercase'>Gelato</span>
                        <span className="h-1 w-40 bg-white"/>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-3">
                        <div className="singleOne flex flex-row justify-between items-center space-x-10">
                            <div className="flex flex-row justify-center items-center space-x-3">
                                <Image src="/g1.jpg" height={100} width={100} alt='gelato 1' />
                                <div className="flex flex-col justify-start items-start">
                                    <span className='text-lg font-bold'>Gelato 01</span>
                                    <p>A short description</p>
                                </div>
                            </div>
                            <span className='text-lg font-bold'>₹ 1011</span>

                            


                        </div>
                        <hr className='h-[1px] bg-emerald-300 w-full opacity-30 group-hover:opacity-0'/>

                        <div className="singleOne flex flex-row justify-between items-center space-x-10">
                            <div className="flex flex-row justify-center items-center space-x-3">
                                <Image src="/g2.jpg" height={100} width={100} alt='gelato 2' />
                                <div className="flex flex-col justify-start items-start">
                                    <span className='text-lg font-bold'>Gelato 02</span>
                                    <p>A short description</p>
                                </div>
                            </div>
                            <span className='text-lg font-bold'>₹ 2011</span>

                            


                        </div>
                        <hr className='h-[1px] bg-emerald-300 w-full opacity-30 group-hover:opacity-0'/>

                        <div className="singleOne flex flex-row justify-between items-center space-x-10">
                            <div className="flex flex-row justify-center items-center space-x-3">
                                <Image src="/g3.jpg" height={100} width={100} alt='gelato 3' />
                                <div className="flex flex-col justify-start items-start">
                                    <span className='text-lg font-bold'>Gelato 03</span>
                                    <p>A short description</p>
                                </div>
                            </div>
                            <span className='text-lg font-bold'>₹ 3011</span>

                            


                        </div>
                        <hr className='h-[1px] bg-emerald-300 w-full opacity-30 group-hover:opacity-0'/>

                        <div className="singleOne flex flex-row justify-between items-center space-x-10">
                            <div className="flex flex-row justify-center items-center space-x-3">
                                <Image src="/g4.jpg" height={100} width={100} alt='Gelato 4' />
                                <div className="flex flex-col justify-start items-start">
                                    <span className='text-lg font-bold'>Gelato 04</span>
                                    <p>A short description</p>
                                </div>
                            </div>
                            <span className='text-lg font-bold'>₹ 4011</span>

                            


                        </div>
                        <hr className='h-[1px] bg-emerald-300 w-full opacity-30 group-hover:opacity-0'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu