import React from "react"
import { StoreContext } from "../context/StoreContext"
import { useContext } from "react"
import { formatCurrency } from "../utilities/formatCurrency"

export default function CartItem(props) {
  const { id, name, price, imageSrc, height, imageAlt } = props.data
  const { cartQuantity, removeOneFromCart, removeAllFromCart } =
    useContext(StoreContext)

  return (
    <>
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>{name}</h3>
            <p className="ml-4">
              {formatCurrency((price * cartQuantity[id]) / 100)}
            </p>
          </div>
          <p className="mt-1 text-sm text-gray-500">Height: {height / 1000}m</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <span className="text-gray-500">
            Quantity: {cartQuantity[id]}{" "}
            <button
              onClick={() => removeOneFromCart(id)}
              type="button"
            >

            </button>
          </span>

          <div className="flex">
            <button
              onClick={() => removeAllFromCart(id)}
              type="button"
              className="font-medium hover:text-blue-700"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
