import React from 'react'

const MobileHero = () => {

    return (
        <>
            <div className="xs:contents md:hidden">
            <header className="relative flex items-center justify-center h-screen">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute z-10 max-h-none max-w-none brightness-50"
                >
                    <source
                        src="https://res.cloudinary.com/damonjohnson/video/upload/v1669295293/Boa/Hero-short.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                <div className="z-30 mb-24 pb-24">
                    <div className= "py-6 ml-auto mr-auto">
                        <div className="w-3/4 pl-4 pr-4">
                            <h1 className="text-white font-semibold text-xl">
                                Reusable Pallet Wraps
                            </h1>
                            <div className="mt-4 ">
                                <p className="text-white font-semibold text-md block ml-auto mr-auto">
                                    A sustainable alternative to single use shrink wrap film
                                </p>
                                <div className="mt-8 pr-4">
                                    <a href="/store">
                                        <button className="bg-secondary border-2 border-primary font-semibold w-full text-white py-3 px-8 duration-100 rounded-l-lg rounded-tr-lg hover:ring-4">
                                            View Store
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                </header>
                </div>
        </>
    )
}

export default MobileHero