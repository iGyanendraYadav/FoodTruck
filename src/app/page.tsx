import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-b from-emerald-500 to-cyan-600 text-white font-Poppins">
        <div className="container mx-auto pt-0">
          <div className="flex flex-col lg:flex-row justify-center items-center py-20 mx-5 lg:mx-12  ">
            <div className="flexOne w-auto lg:w-1/2 flex flex-col justify-start items-start space-y-3">
              <span className="text-5xl lg:text-7xl font-extrabold uppercase">
                Welcome
              </span>
              <span className="h-1 w-20 bg-white" />
              <span className="text-3xl font-bold">
                WE HAVE THE BEST SED NON MAURIS VITAE ERAT CONSEQUAT AUCTOR EU
                IN ELIT.
              </span>
              <p className="">
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin.
              </p>
            </div>
            <div className="flexTwo w-auto lg:w-1/2 flex flex-row justify-center items-center">
              <Image
                className="lg:ml-24 "
                src="/truck.png"
                width={1062}
                height={629}
                alt="Hello"
              />
            </div>
          </div>

          <div className="dailySpecial flex flex-col lg:flex-row justify-center items-center py-24 mx-5 lg:mx-12 space-x-0 lg:space-x-16">
            <div className="FlexLeft w-auto lg:w-[60%] grid grid-cols-1 lg:grid-cols-4 gap-0 order-2 lg:order-1">
              {/* <div className="FlexLeft w-auto lg:w-[60%] flex flex-col lg:flex-row justify-center items-center"> */}
              <div className="IceCreameBox p-4 hover:bg-cyan-400  flex flex-col justify-center items-center space-y-5 border border-emerald-300 border-opacity-30 hover:border-opacity-0">
                <Image
                  className="items-center"
                  src="/ds1.png"
                  width={267}
                  height={430}
                  alt="ds1"
                />
                <div className="flex flex-col justify-start items-start space-y-3 ">
                  <span className="price text-sm font-bold">₹ 499</span>
                  <span className="text-xl lg:text-2xl font-bold uppercase">
                    Vanilla Ice Creame
                  </span>
                </div>
              </div>

              <div className="IceCreameBox p-4 hover:bg-cyan-400  flex flex-col justify-center items-center space-y-5 border border-emerald-300 border-opacity-30 hover:border-opacity-0">
                <Image
                  className="items-center"
                  src="/ds2.png"
                  width={267}
                  height={430}
                  alt="ds2"
                />
                <div className="flex flex-col justify-start items-start space-y-3 ">
                  <span className="price text-sm font-bold">₹ 199</span>
                  <span className="text-xl lg:text-2xl font-bold uppercase">
                    MANGO MILKSHAKE
                  </span>
                </div>
              </div>

              <div className="IceCreameBox p-4 hover:bg-cyan-400  flex flex-col justify-center items-center space-y-5 border border-emerald-300 border-opacity-30 hover:border-opacity-0">
                <Image
                  className="items-center"
                  src="/ds3.png"
                  width={267}
                  height={430}
                  alt="ds3"
                />
                <div className="flex flex-col justify-start items-start space-y-3 ">
                  <span className="price text-sm font-bold">₹ 1099</span>
                  <span className="text-xl lg:text-2xl font-bold uppercase">
                    CHOCOLATE ICE CREAM
                  </span>
                </div>
              </div>

              <div className="IceCreameBox p-4 hover:bg-cyan-400  flex flex-col justify-center items-center space-y-5 border border-emerald-300 border-opacity-30 hover:border-opacity-0">
                <Image
                  className="items-center"
                  src="/ds4.png"
                  width={267}
                  height={430}
                  alt="ds4"
                />
                <div className="flex flex-col justify-start items-start space-y-3 ">
                  <span className="price text-sm font-bold">₹ 999</span>
                  <span className="text-xl lg:text-2xl font-bold uppercase">
                    CHOCOLATE MILKSHAKE
                  </span>
                </div>
              </div>
            </div>
            <div className="flexRight w-auto lg:w-[40%] flex flex-col justify-start items-start space-y-3 order-1 lg:order-2">
              <span className="text-5xl lg:text-7xl font-extrabold uppercase">
                Daily specials
              </span>
              <span className="h-1 w-20 bg-white" />

              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}
