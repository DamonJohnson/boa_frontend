import React from 'react'

const Hero = () => {
  return (
      <>
    
    <div class="relative pt-40 pb-20 lg:pt-44 dark:bg-gray-900">
        <div class="relative xl:container m-auto px-6 md:px-12 lg:px-6">
                  <h1 class="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-background">A Smarter Way to Wrap Pallets</h1>
            <div class="lg:flex">
                <div class="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
                    <p class="sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12">
                              Save Time. Save Money. Reduce Waste.            
                    </p>
                    <span class="block font-semibold text-gray-500 dark:text-gray-400">Boa Wraps are a cost effective and sustainable alternative to single use shrink wrap film.</span>
                    <div class="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                        <a aria-label="add to slack" href="/store" class="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30">
                            <div class="flex justify-center space-x-4">
                                <span class="hidden font-medium md:block dark:text-white">View Product</span>
                            </div>
                        </a>       
                    </div>
                </div>
                <div class="mt-12 md:mt-0 lg:absolute -right-10 lg:w-7/12">
                </div>
            </div>
        </div>
    </div>
          </>
  )
}

export default Hero