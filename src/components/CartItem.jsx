import React from "react"
import { StoreContext } from "../context/StoreContext"
import { useContext } from "react"
import { formatCurrency } from "../utilities/formatCurrency"

export default function CartItem(props) {
  const { id, name, price, imageSrc, height, imageAlt } = props.data
  const { cartQuantity, addOneToCart, removeOneFromCart, removeAllFromCart } =
    useContext(StoreContext)

  return (
    <>
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-grey">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-2 flex flex-1 flex-col text-secondary">
        <div>
          <div className="flex justify-between font-medium">
            <h3>{name}</h3>
            <p className="ml-2">
              {formatCurrency((price * cartQuantity[id]) / 100)}
            </p>
          </div>
          <p className="mt-1 text-sm">Height: {height / 1000}m</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <span>
            <button
              onClick={() => removeOneFromCart(id)}
              type="button"
              className="px-1"
            >
              -
            </button>
            Quantity:
            {cartQuantity[id]}{" "}
            <button
              onClick={() => addOneToCart(id)}
              type="button"
              className="px-1"
            >
              +
            </button>
          </span>

          <div className="flex">
            <button
              onClick={() => removeAllFromCart(id)}
              type="button"
              className="font-medium text-secondary hover:text-blue-700"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
