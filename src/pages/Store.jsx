import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import ImageCarousel from "../components/ImageCarousel"
import { formatCurrency } from "../utilities/formatCurrency"
import { products } from "../data/Products"
import { images } from "../assets/Images"
import { StoreContext } from "../context/StoreContext"

const Store = () => {
  const [quantity, setQuantity] = useState(1)
  const [activeProduct, setActiveProduct] = useState(
    products.find((product) => product.id === "001")
  )
  const total = quantity * activeProduct.price
  const { addToCart, cartQuantity } = useContext(StoreContext)

    const cartItemQuantity = cartQuantity[activeProduct.id]

  return (
    <section>
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:-mx-6 lg:flex lg:items-center">
          <ImageCarousel data={images} />
          <div className="xl:mx-32 lg:mx-8 sm:px-8 sm:py-8 sm:mt-40 lg:mt-0 bg-white rounded-lg text-secondary">
            <h1 className="text-xl font-semibold text-secondary lg:text-xl lg:w-100">
              {products[0].name}
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
                <select
                  className="text-center border rounded-md border-pale-grey"
                  name="height"
                  id="height"
                  onChange={(e) =>
                    setActiveProduct(
                      products.find((product) => product.id === e.target.value)
                    )
                  }
                >
                  <option value="001">1.2m</option>
                  <option value="002">1.5m</option>
                </select>
              </div>

              <label className="font-semibold" for="quantity">
                Quantity:
              </label>
              <input
                className="text-center border rounded-md border-pale-grey"
                type="number"
                id="quantity"
                name="quantity"
                placeholder="1"
                min="1"
                max="20"
                onChange={(e) => setQuantity(e.target.value)}
              ></input>
            </div>

            <div className="flex items-center mt-12 space-x-8 lg:justify-start">
              <p className="font-semibold">
                Price: {total !== null ? formatCurrency(total / 100) : ""}
              </p>
              <button
                href="/product4"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:ring-2"
                onClick={() => addToCart(activeProduct.id, parseInt(quantity))}
              >
                Add to cart {cartItemQuantity > 0 && <>({cartItemQuantity})</>}
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
            <Link
              to="/quote"
              className="sm:inline-flex sm:items-center px-3 py-2 text-sm font-medium sm:text-center text-white bg-primary hover:ring-2 rounded-lg focus:ring-3 focus:outline-none focus:ring-blue-300"
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Store
