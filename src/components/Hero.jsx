import React from 'react'

const Hero = () => {
  return (
      <>
    
    <div class="relative pt-80 pb-20 lg:pt-44 lg:top-1/3">
        <div class="relative xl:container m-auto px-6 md:px-12 lg:px-6">
                  <h1 class="sm:mx-auto text-primary sm:w-10/12 md:w-2/3 font-primary text-4xl text-center sm:text-5xl md:text-6xl lg:text-right xl:text-7xl dark:text-background">Reusable Pallet Wraps</h1>
            <div class="lg:flex">
                <div class="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3  sm:mx-auto text-center lg:text-right lg:ml-auto lg:pr-44">
                    <p class="sm:text-lg text-primary dark:text-gray-300">
                              Save Time. Save Money. Reduce Waste.
                              <br></br>
                              A sustainable alternative to single use shrink wrap.
                    </p>
                    <div class="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center  lg:absolute lg:right-1 lg:-top-8">
                        <a aria-label="add to slack" href="/store" class="p-4 border-primary text-primary border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-white hover:text-white">
                            <div class="flex justify-center space-x-4">
                                <span class="hidden text-primary font-medium md:block dark:text-primary">View Product</span>
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