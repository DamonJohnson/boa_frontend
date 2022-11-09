import React from 'react'

const Hero = () => {
    return (
        <>
            <header class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
                <video
                    autoplay
                    loop
                    muted
                    class="absolute z-10 w-auto min-w-full min-h-full max-w-none">
                    <source
                        src="https://res.cloudinary.com/damonjohnson/video/upload/v1667991352/Boa/production_ID_4294438_m1ir2d.mp4"
                        type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div class="relative pt-40 pb-20 lg:pt-44 dark:bg-gray-900 z-30">
                    <div class="relative xl:container m-auto px-6 md:px-12 lg:px-6">
                        <h1 class="sm:mx-auto sm:w-10/12 md:w-2/3 text-white text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl">Resuable Wrap Pallets</h1>
                        <div class="lg:flex">
                            <div class="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
                                <p class="sm:text-lg text-white lg:w-11/12">
                                    Save Time. Save Money. Reduce Waste.
                                </p>
                                <span class="block font-semibold text-white">A sustainable alternative to single use shrink wrap film.</span>
                                <div class="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                                    <a aria-label="add to slack" href="/store" class="p-4 border border-white  rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 ">
                                        <div class="flex justify-center space-x-4">
                                            <span class="hidden font-medium md:block text-white">View Product</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="mt-12 md:mt-0 lg:absolute -right-10 lg:w-7/12">
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Hero