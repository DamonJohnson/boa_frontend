import React from 'react'
import { StoreContext } from "../context/StoreContext"
import { useContext } from "react"
import { formatCurrency } from "../utilities/formatCurrency"


const CartItem = (props) => {
    const { id, name, price, imageSrc, height, imageAlt } = props.data
    const { cartQuantity, addOneToCart, removeOneFromCart, removeAllFromCart } = useContext(StoreContext)
    
  return (
    <div> <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                        <div class="flex w-2/5">
                          <div class="w-20">
                            <img
                              class="h-24"
                              src={imageSrc}
                              alt={imageAlt}
                            ></img>
                          </div>
                          <div class="flex flex-col justify-between ml-4 flex-grow">
                  <span class="font-bold text-sm">{name}</span>
                  <span class="text-red-500 text-xs">Height: {height / 1000}m</span>
                            <button
                              onClick = { () => removeAllFromCart(id) }
                              class="font-semibold hover:text-red-500 text-gray-500 text-xs"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                        <div class="flex justify-center border-secondary w-1/5">
                            <button onClick = {() => removeOneFromCart(id)}>
                          <svg
                            class="fill-secondary w-3 hover:fill-primary"
                            viewBox="0 0 448 512"
                          >
                            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                  </button>

                          <span
                            class="mx-2 text-center border rounded-md border-pale-grey w-8"
                            type="text"   
                          >{cartQuantity[id]}</span>
                        <button onClick = {() => addOneToCart(id)}>
                          <svg
                            class="fill-secondary w-3 hover:fill-primary"
                            viewBox="0 0 448 512"
                          >
                            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                  </button>
                        </div>
                        <span class="text-center w-1/5 font-semibold text-sm">
                          {formatCurrency(price/100)}
                        </span>
                        <span class="text-center w-1/5 font-semibold text-sm">
                          {formatCurrency((price * cartQuantity[id]) / 100)}
                        </span>
                      </div></div>
  )
}

export default CartItem