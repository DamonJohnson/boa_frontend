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
    

  
  const cartItems = [
    { id: 1, quantity: cartQuantity['001']},
    { id: 2, quantity: cartQuantity['002']}
  ]
  
    
  function checkout() {
    console.log(cartQuantity[0])
    fetch("http://localhost:3001/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
      body: JSON.stringify({ cartItems }),
  })
    .then(res => {
      if (res.ok) return res.json()
      return res.json().then(json => Promise.reject(json))
    })
    .then(({ url }) => {
      window.location = url
    })
    .catch(e => {
      console.error(e.error)
    })
    }

  return (
    <div>
      <body className=" text-secondary rounded-lg">
        <div className="container mx-auto mt-10">
  <div className="flex flex-col md:flex-row shadow-md my-10">
    <div className="w-full md:w-3/4 bg-white px-10 py-10">
              <div className="flex justify-between border-b border-grey pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                              <h2 className="font-semibold text-2xl">{totalCartQuantity} Items</h2>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-secondary text-xs uppercase w-2/5">
                  Product Details
                </h3>
                <h3 className="font-semibold text-secondary text-xs uppercase w-1/5 text-center">
                  Quantity
                </h3>
                <h3 className="font-semibold text-secondary text-xs uppercase w-1/5 text-center">
                  Price
                </h3>
                <h3 className="font-semibold text-secondary text-xs uppercase w-1/5 text-center">
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
                className="flex font-semibold text-indigo-600 text-sm mt-10"
              >
                <svg
                  className="fill-secondary mr-2 w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </Link>
            </div>

    <div id="summary" className="w-full md:w-1/4 px-8 bg-off-white py-10 mt-10 sm:mt-0 lg:pt-10 sm:pt-0 md:pt-0">
              <h1 className="font-semibold text-2xl border-b border-grey pb-8">
                Order Summary
              </h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">Items {totalCartQuantity}</span>
                              <span className="font-semibold text-sm">{totalCartPrice}</span>
              </div>

              <div className="py-10">
                <label
                  for="promo"
                  className="font-semibold inline-block mb-3 text-sm uppercase"
                >
                  Promo Code
                </label>
                <input
                  type="text"
                  id="promo"
                  placeholder="Enter your code"
                  className="p-2 text-sm w-full"
                ></input>
              </div>
              <button className="bg-secondary hover:ring-2 px-5 py-2 text-sm text-white uppercase rounded-md">
                Apply
              </button>
              <div className="border-t border-grey mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                                  <span>{totalCartPrice}</span>
                              </div>              
                <button className="bg-primary font-semibold py-3 text-sm text-white uppercase w-full rounded-md hover:ring-2" onClick={() => checkout()}>Checkout</button>   
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  )
}

export default ShoppingCart
