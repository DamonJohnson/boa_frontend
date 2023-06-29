import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { products } from "../data/Products"
import { StoreContext } from "../context/StoreContext"
import CartItem from "./CartItem"
import { formatCurrency } from "../utilities/formatCurrency"



const ShoppingCart = () => {
  const { cartQuantity, totalCartQuantity, removeAllFromCart } = useContext(StoreContext)
  
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

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [company, setCompany] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [postcode, setPostcode] = useState("")
  const contactDetails = {
    firstName: firstName,
    lastName: lastName,
    company: company,
    email: email,
    phone: phone,
    address: address,
    postcode: postcode,
  }

  const navigate = useNavigate()


  const checkout = async () => {
    console.log("https://boa-backend.onrender.com:10000")
    await fetch("https://boa-backend.onrender.com:10000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
        body: JSON.stringify({ cartItems, contactDetails }),
  })
      .then(() => {
        removeAllFromCart('001')
        removeAllFromCart('002')
        navigate("/success");
    })
     .catch((e) => {
    navigate("/fail");
    })
    }

  return (
    <div>
      <body className=" text-secondary rounded-lg">
        <div className="container mx-auto mt-10">
  <div className="flex flex-col md:flex-row shadow-md my-10">
    <div className="w-full xs:px-4 md:w-3/4 bg-white md:px-10 py-10">
              <div className="flex justify-between border-b border-grey pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                              <h2 className="font-semibold text-2xl">{totalCartQuantity} Items</h2>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-secondary text-xs uppercase w-2/5">
                  Product Details
                </h3>
                <h3 className="font-semibold text-secondary text-xs uppercase w-1/5 text-center xs:mr-4">
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
                className="flex font-semibold text-indigo-600 text-sm mt-10 hover:text-primary"
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

    <div id="summary" className="w-full md:w-1/4 px-8 bg-ofxf-white pb-10 mt-10 sm:mt-0 sm:pt-0">
              <h1 className="font-semibold text-2xl border-b border-grey pb-8 sm:pt-10">
                Order Summary
              </h1>
               <div className="flex mt-10 mb-5 w-full">
                 <form action="#" className="space-y-5 w-full">
            <div>
              <label
                for="firstname"
                className="block mb-2 text-sm font-medium text-secondary w-full"
              >
                First name
              </label>
              <input
                type="firstname"
                id="firstname"
                className="shadow-sm mb-6 bg-pale-grey border  border-grey text-secondary text-sm rounded-md focus:ring-secondary focus:border-primary-500 block w-full p-2.5 "
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label
                for="lastname"
                className="block mb-2 text-sm font-medium text-secondary w-full"
              >
                Last name
              </label>
              <input
                type="lastname"
                id="lastname"
                className="shadow-sm bg-pale-grey border  border-grey text-secondary text-sm rounded-md focus:ring-secondary focus:border-primary-500 block w-full p-2.5 "
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <label
                for="company"
                className="block mb-2 text-sm font-medium text-secondary"
              >
                Company name
              </label>
              <input
                id="company"
                className="shadow-sm bg-pale-grey border  border-grey text-secondary text-sm rounded-md focus:ring-secondary focus:border-primary-500 block w-full p-2.5 "
                required
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-secondary"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-pale-grey border  border-grey text-secondary text-sm rounded-md focus:ring-secondary focus:border-primary-500 block w-full p-2.5 "
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                for="phone"
                className="block mb-2 text-sm font-medium text-secondary"
              >
                Phone number
              </label>
              <input
                type="phone"
                id="phone"
                className="shadow-sm bg-pale-grey border  border-grey text-secondary text-sm rounded-md focus:ring-secondary focus:border-primary-500 block w-full p-2.5"
                required
                onChange={(e) => setPhone(e.target.value)}
              />
                  </div>
                  <div>
              <label
                for="phone"
                className="block mb-2 text-sm font-medium text-secondary"
              >
                Address
              </label>
              <input
                type="address"
                id="address"
                className="shadow-sm bg-pale-grey border  border-grey text-secondary text-sm rounded-md focus:ring-secondary focus:border-primary-500 block w-full p-2.5"
                required
                onChange={(e) => setAddress(e.target.value)}
              />
                  </div>
                  <div>
              <label
                for="phone"
                className="block mb-2 text-sm font-medium text-secondary"
              >
                Postcode
              </label>
              <input
                type="postcode"
                id="postcode"
                maxLength='4'
                className="shadow-sm bg-pale-grey border  border-grey text-secondary text-sm rounded-md focus:ring-secondary focus:border-primary-500 block w-full p-2.5"
                required
                onChange={(e) => setPostcode(e.target.value)}
              />
            </div>
          </form>
              </div>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">{totalCartQuantity} Items</span>
                              <span className="font-semibold text-sm">{totalCartPrice}</span>
              </div>

              <div className="border-t border-grey mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                                  <span>{totalCartPrice}</span>
                              </div>              
                <button className="bg-primary font-semibold py-3 text-sm text-white uppercase w-full rounded-md hover:ring-2" onClick={() => checkout()}>Submit order</button>   
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  )
}

export default ShoppingCart
