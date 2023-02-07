import React from "react"

const Hero = () => {
    return (
        <>
            <header className="relative sm:flex sm:items-center sm:justify-center sm:h-screen overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute z-10 w-auto min-w-full min-h-full max-w-none brightness-75"
                >
                    <source
                        src="https://res.cloudinary.com/damonjohnson/video/upload/v1669295293/Boa/Hero-short.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                <div className="z-30 ml-auto mr-64 md:mt-64" id="">
                    <div className="bg-secondary border-primary border-2 lg:ml-16 lg:w-full lg:py-6 rounded-l-3xl rounded-tr-3xl"
                        style={
                            { background: "linear-gradient(90deg, rgba(38,36,61,1) 3%, rgba(26,48,62,1) 45%, rgba(9,86,145,1) 90%, rgba(26,48,62,1) 100%, rgba(38,36,61,1) 100%)" }}>
                        <div className="lg:ml-12">
                            <h1 className="text-white font-semibold sm:text-4xl lg:w-11/12 md:text-2xl lg:text-6xl ">
                                Reusable Pallet Wraps
                            </h1>
                            <div className="mt-6 lg:flex">
                                <p className="text-white font-semibold sm:text-lg lg:w-8/12 lg:text-l mr-8">
                                    A sustainable alternative to single use shrink wrap film
                                </p>
                                <div className="lg:relative lg:bottom-2">
                                    <a href="/store">
                                        <button className="bg-primary font-semibold w-full text-white py-3 lg:px-8 duration-100 rounded-l-lg rounded-tr-lg hover:ring-4">
                                            View Store
                                        </button>
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
