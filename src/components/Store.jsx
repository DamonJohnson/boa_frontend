import { useEffect } from "react"
import { useState, react } from "react"
import ImageCarousel from "./ImageCarousel"

const Store = () => {
  const data = [
    {
      image:
        "https://res.cloudinary.com/damonjohnson/image/upload/v1672232434/Boa/Untitled_design_o6a2z9.png",
      alt: "frontview image 1",
    },
    {
      image:
        "https://res.cloudinary.com/damonjohnson/image/upload/v1672232246/Boa/HTB1qBtGCntYBeNjy1Xdq6xXyVXaF_sycwcs.webp",
      alt: "frontview image 2",
    },
    {
      image:
        "https://res.cloudinary.com/damonjohnson/image/upload/v1672231925/Boa/HTB19k9tGAyWBuNjy0Fpq6yssXXan.jpg_960x960_adx9yn.webp",
      alt: "corner strap",
    },
    {
      image:
        "https://res.cloudinary.com/damonjohnson/image/upload/v1672231925/Boa/HTB141qIBVGWBuNjy0Fbq6z4sXXaS.jpg_960x960_inctyq.webp",
      alt: "diagonal view",
    },
    {
      image:
        "https://res.cloudinary.com/damonjohnson/image/upload/v1672231926/Boa/HTB1276PB49YBuNjy0Ffq6xIsVXa6.jpg_960x960_yzpya7.webp",
      alt: "backview",
    },
    {
      image:
        "https://res.cloudinary.com/damonjohnson/image/upload/v1672231925/Boa/HTB1i7VUGAKWBuNjy1zjq6AOypXay.jpg_960x960_bqfdzv.webp",
      alt: "document sleeve",
    },

  ]
    
    const [price, setPrice] = useState()
    const [quantity, setQuantity] = useState(1)
    const [height, setHeight] = useState(1200)

    const priceList = { '1200': 9999, '1500': 12999 }

    const total = priceList[height] * quantity

    return (
      


    <section>
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:-mx-6 lg:flex lg:items-center">
          <ImageCarousel data={data} />
          <div className="xl:mx-32 lg:mx-8 sm:px-8 sm:py-8 sm:mt-40 lg:mt-0 bg-pale-grey rounded-lg text-secondary">
            <h1 className="text-xl font-semibold text-secondary lg:text-xl lg:w-100">
              Boa Reusable Pallet Wrap
            </h1>

            <ul className="max-w-lg mt-6 secondary">
              <li className="font-semibold">Item Details:</li>
              <li>Pallet Size: 1.2 x 1.2m</li>
              <li>Mesh Length: 4m</li>
              <li>Material: PVC Mesh</li>
              <li>Colour: Black</li>
              <li></li>
            </ul>

            <div className="flex items-center justify-between mt-12 space-x-8 lg:justify-start">
              <div className="flex justify-center">
                <label className="font-semibold pr-6" htmlFor="height">
                  Height:
                </label>
                <select name="height" id="height" onChange={(e) => setHeight(e.target.value)} >
                  <option value="1200">1.2m</option>
                  <option value="1500">1.5m</option>
                </select>
              </div>

              <label className="font-semibold" for="quantity">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                className="w-10 pl-1"
                min="1"
                max="20"
                onChange={(e) => setQuantity(e.target.value)}               
              ></input>

           
                            <p className="font-semibold">Price: ${total !== null ? total / 100 : ''}</p>
                            
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

      <div className="py-32 sm:mx-auto sm:max-w-screen-2xl text-secondary">
        <h3 className="mb-4 text-2xl tracking-tight font-extrabold md:text-left sm:text-center">
          Special requirements?
              </h3>
              <div>
        <p className="mb-4 tracking-tight sm:text-center md:text-left">
          We can manufacture a fully customised solution to meet your needs.
        </p>
        <div className="sm:text-center">
          <a
            href="/quote"
            className="sm:inline-flex sm:items-center px-3 py-2 text-sm font-medium sm:text-center text-white bg-primary rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
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
      </div>
    </section>
  )
}

export default Store
