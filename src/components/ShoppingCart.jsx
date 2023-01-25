import { useContext } from "react"
import { Link } from "react-router-dom"
import { products } from "../data/Products"
import { StoreContext } from "../context/StoreContext"
import CartItem from "./CartItem"
import { formatCurrency } from "../utilities/formatCurrency"

const ShoppingCart = () => {
  const { cartQuantity, totalCartQuantity } = useContext(StoreContext)
  const productTotals = products.map(
    (product) => product.price * cartQuantity[product.id]
  )
  const totalCartPrice = formatCurrency(
    productTotals.reduce((a, b) => a + b, 0) / 100
  )

  return (
    <div>
      <body class="bg-gray-100 text-secondary rounded-lg">
        <div class="container mx-auto mt-10">
          <div class="flex shadow-md my-10">
            <div class="w-3/4 bg-white px-10 py-10">
              <div class="flex justify-between border-b border-grey pb-8">
                <h1 class="font-semibold text-2xl">Shopping Cart</h1>
                              <h2 class="font-semibold text-2xl">{totalCartQuantity} Items</h2>
              </div>
              <div class="flex mt-10 mb-5">
                <h3 class="font-semibold text-secondary text-xs uppercase w-2/5">
                  Product Details
                </h3>
                <h3 class="font-semibold text-secondary text-xs uppercase w-1/5 text-center">
                  Quantity
                </h3>
                <h3 class="font-semibold text-secondary text-xs uppercase w-1/5 text-center">
                  Price
                </h3>
                <h3 class="font-semibold text-secondary text-xs uppercase w-1/5 text-center">
                  Total
                </h3>
                </div>
                          
              <div>
                {products.map((product) => {
                  if (cartQuantity[product.id] !== 0) {
                    return (
                      <CartItem data={product}/>
                    )
                  }
                })}
              </div>

              <Link
                to="/store"
                class="flex font-semibold text-indigo-600 text-sm mt-10"
              >
                <svg
                  class="fill-secondary mr-2 w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </Link>
            </div>

            <div id="summary" class="w-1/4 px-8 bg-off-white py-10">
              <h1 class="font-semibold text-2xl border-b border-grey pb-8">
                Order Summary
              </h1>
              <div class="flex justify-between mt-10 mb-5">
                <span class="font-semibold text-sm uppercase">Items 3</span>
                <span class="font-semibold text-sm">590$</span>
              </div>
              <div>
                <label class="font-medium inline-block mb-3 text-sm uppercase">
                  Shipping
                </label>
                <select class="block p-2 text-gray-600 w-full text-sm">
                  <option>Standard shipping - $10.00</option>
                </select>
              </div>
              <div class="py-10">
                <label
                  for="promo"
                  class="font-semibold inline-block mb-3 text-sm uppercase"
                >
                  Promo Code
                </label>
                <input
                  type="text"
                  id="promo"
                  placeholder="Enter your code"
                  class="p-2 text-sm w-full"
                ></input>
              </div>
              <button class="bg-secondary hover:ring-2 px-5 py-2 text-sm text-white uppercase rounded-md">
                Apply
              </button>
              <div class="border-t border-grey mt-8">
                <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>$600</span>
                </div>
                <button class="bg-primary font-semibold py-3 text-sm text-white uppercase w-full rounded-md hover:ring-2">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  )
}

export default ShoppingCart
