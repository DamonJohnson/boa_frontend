import React from 'react'

const Hero = () => {
    return (
        <>
            <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute z-10 w-auto min-w-full min-h-full max-w-none brightness-75">
                    <source
                        src="https://res.cloudinary.com/damonjohnson/video/upload/v1669295293/Boa/Hero-short.mp4"
                        type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="relative pt-40 pb-20 lg:pt-44 dark:bg-gray-900 z-30">
                    <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
                        <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 text-white text-center sm:text-4xl md:text-5xl lg:w-auto  xl:text-6xl">Reusable Pallet Wraps</h1>
                        <div className="lg:flex">
                            <div className="relative mt-8 md:mt-8 space-y-8 sm:w-10/12 md:w-2/3 sm:mx-auto text-center lg:w-auto">
                                <p className="text-xl text-center text-white">
                                    A sustainable alternative to single use shrink wrap film
                                </p>
                                <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-centre">
                                    <a aria-label="add to slack" href="/store" className="p-4 border-2 bg-secondary rounded-md hover:bg-primary border-white duration-100  hover:shadow-secondary ">
                                        <div className="flex justify-center w-40">
                                            <span className="hidden text-l md:block text-white">View Products</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Hero