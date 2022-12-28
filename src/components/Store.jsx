import React from "react"
import ImageCarousel from "./ImageCarousel"

const Store = () => {

    const data = [
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
            alt: "San Francisco"
        },
        {
            image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
            alt: "Scotland"
        },
        {
            image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
            alt: "Darjeeling"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
            alt: "San Francisco"
        },
        {
            image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
            alt: "Scotland"
        },
        {
            image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
            alt: "Darjeeling"
        },
        {
            image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
            alt: "San Francisco"
        },
        {
            image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
            alt: "Scotland"
        },
        {
            image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
            alt: "Darjeeling"
        }
    ];

    return (
        <section>
            <div className="container px-6 py-10 mx-auto">
                <div className="lg:-mx-6 lg:flex lg:items-center">
                    <ImageCarousel data={data} />
                    <div className="mt-8 md:w-3/4 lg:w-2/5 md:mx-24 md:px-14 md:py-14 md:mt-40 lg:mt-0 bg-pale-grey rounded-lg text-secondary">

                        <h1 className="text-xl font-semibold text-secondary lg:text-xl lg:w-100">
                            Boa Reusable Pallet Wrap
                        </h1>

                        <ul className="max-w-lg mt-6 secondary">
                            <li className='font-semibold'>Item Details:</li>
                            <li>Pallet Size: 1.2 x 1.2m</li>
                            <li>Mesh Length: 4m</li>
                            <li>Material: PVC Mesh</li>
                            <li>Colour: Black</li>
                            <li></li>
                        </ul>



                        <div className="flex items-center justify-between mt-12 space-x-8 lg:justify-start">
                            <div className="flex justify-center">
                                <div>
                                    <div className="dropdown relative">
                                        <button
                                            className="
                                            dropdown-toggle
                                            px-6
                                            py-2.5
                                            bg-secondary
                                            text-white
                                            font-medium
                                            text-xs
                                            leading-tight
                                            uppercase
                                            rounded
                                            shadow-md
                                            hover:bg-blue-700 hover:shadow-lg
                                            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                            active:bg-blue-800 active:shadow-lg active:text-white
                                            transition
                                            duration-150
                                            ease-in-out
                                            flex
                                            items-center
                                            whitespace-nowrap"
                                            type="button"
                                            id="size"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Size
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fas"
                                                data-icon="caret-down"
                                                className="w-2 ml-2"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 320 512"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </div>
                                    
                                </div>
                            </div>

                            <label className="font-semibold" for="quantity">Quantity:</label>
<input type="number" id="quantity" name="quantity" min="1" max="50"></input>

                        


                            <button
                                href="/product4"
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
                            >
                                Add to cart
                                <svg
                                    aria-hidden="true"
                                    className="w-4 h-4 ml-2 -mr-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </button>





                            
                        </div>
                    </div>
                </div>
            </div>

   <div className="py-32 mx-auto max-w-screen-2xl text-secondary">
        <h3 className="mb-4 text-2xl tracking-tight font-extrabold text-center">
          Do you have special requirements?
        </h3>
        <p className="mb-4 tracking-tight text-center">
          We can manufacture a fully customised solution to meet your needs.
        </p>
        <div className="text-center">
        <a
          href="/product4"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Custom Order
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          </a>
          </div>
            </div>
            
            

        </section>
        
   

    )
}

export default Store
