import React from 'react'

const Footer = () => {


    return (
        <div className="pt-28">
        <footer className="bg-white py-5 w-screen mx-auto sm:px-8 md:px-20">
            <div className="max-w-lg sm:mx-auto sm:text-center">
                <img src="https://res.cloudinary.com/damonjohnson/image/upload/v1671517449/Boa/Boa_Wraps_1_yiq0cj.svg" className="w-64 sm:mx-auto" />
                <p className="leading-relaxed mt-2 text-[15px] text-secondary">
                    &copy; 2023 Boa Wraps All Rights Reserved
                </p>
            </div>
            <div className="mt-8 items-center justify-between flex">
                    <div className="mt-4 sm:mt-0 text-secondary">
                        ABN: 62422154942
                </div>
                    <div className="md:mt-6 sm:mt-4 w-20">
                            <a href="https://www.linkedin.com/company/boa-wraps">
                                <img src="https://res.cloudinary.com/damonjohnson/image/upload/v1671518886/Boa/LI-Logo_eqw7vt.png" alt="Linkedin Logo" />
                            </a>
                </div>
            </div>
            </footer>
            </div>
    )
}

export default Footer