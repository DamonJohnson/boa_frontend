import React from 'react'
import { StoreContext } from "../context/StoreContext"
import { useContext } from "react"
import { formatCurrency } from "../utilities/formatCurrency"


const CartItem = (props) => {
    const { id, name, price, imageSrc, height, imageAlt } = props.data
    const { cartQuantity, addOneToCart, removeOneFromCart, removeAllFromCart } = useContext(StoreContext)
    
  return (
    <div> <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                        <div className="flex w-2/5">
                          <div className="w-20">
                            <img
                              className="h-24"
                              src={imageSrc}
                              alt={imageAlt}
                            ></img>
                          </div>
                          <div className="flex flex-col justify-between ml-4 flex-grow">
                  <span className="font-bold text-sm">{name}</span>
                  <span className="text-sm">Height: {height / 1000}m</span>
                            <button
                              onClick = { () => removeAllFromCart(id) }
                              className="font-semibold hover:text-rust text-sm text-left"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                        <div className="flex justify-center border-secondary w-1/5">
                            <button onClick = {() => removeOneFromCart(id)}>
                          <svg
                            className="fill-secondary w-3 hover:fill-primary"
                            viewBox="0 0 448 512"
                          >
                            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                  </button>

                          <span
                            className="mx-2 text-center border rounded-md border-pale-grey w-8"
                            type="text"   
                          >{cartQuantity[id]}</span>
                        <button onClick = {() => addOneToCart(id)}>
                          <svg
                            className="fill-secondary w-3 hover:fill-primary"
                            viewBox="0 0 448 512"
                          >
                            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                  </button>
                        </div>
                        <span className="text-center w-1/5 font-semibold text-sm">
                          {formatCurrency(price/100)}
                        </span>
                        <span className="text-center w-1/5 font-semibold text-sm">
                          {formatCurrency((price * cartQuantity[id]) / 100)}
                        </span>
                      </div></div>
  )
}

export default CartItem