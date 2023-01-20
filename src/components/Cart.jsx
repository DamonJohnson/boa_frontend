import { Fragment, useState, useContext } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { products } from "../data/Products"
import { StoreContext } from "../context/StoreContext"
import CartItem from "./CartItem"
import { list } from "postcss"

export default function Cart() {
  const { removeFromCart, cartQuantity } = useContext(StoreContext)

  function getProduct(products, id) {
    return products.find((product) => product.id === id)
  }


  return (
    <>
      <h1>Cart</h1>
      {Object.entries(cartQuantity).map(entry => { return <li key={getProduct(products, entry[0,0]).id}>{(getProduct(products, entry[0,0])).name} {getProduct(products, entry[0,0]).height / 1000}m: {entry[0,1]}</li>})}
   

  

      {/* {Object.entries(cartQuantity).map((entry) => {
        console.log(getProduct(products, entry[0,0]))
      })} */}
    </>
  )
}
