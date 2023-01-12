import { Fragment, useState, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { products } from '../data/Products'
import { StoreContext } from '../context/StoreContext'
import CartItem from './CartItem'


export default function Cart() {


  const { removeFromCart, cartQuantity } = useContext(StoreContext)

  console.log(cartQuantity)

  return (
    <>
      <h1>Cart</h1>
    </>
    
  )
}
