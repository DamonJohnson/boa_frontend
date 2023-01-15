import { Fragment, useState, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { products } from '../data/Products'
import { StoreContext } from '../context/StoreContext'
import CartItem from './CartItem'
import { list } from 'postcss'


export default function Cart() {


  const { removeFromCart, cartQuantity } = useContext(StoreContext)


  return (
    <>
      <h1>Cart</h1>
      <p>
        {Object.keys(cartQuantity).map(function (quantity, id) { return <li key={id}>{products[id].name} {products[id].height/1000}m: {quantity}</li> })}
      </p>

       {/* <type>
                {this.props.items.map(function(item) {
                    return <li key={item.id}>{item.value}</li>
                })}
            </type> */}

      </>
    
  )
}
