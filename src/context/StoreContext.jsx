import { useState, createContext } from 'react'
import { cloneElement } from 'react'
import { products } from '../data/Products'


export const StoreContext = createContext(null)

const defaultCart = {
  '001': 0,
  '002': 0
}

export const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(defaultCart)

  const addToCart = (itemId, quantity) => {
    setCartItems((prev) => ({...prev, [itemId]: (prev[itemId] + quantity)}))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
  }

  const contextValue = {cartItems, addToCart, removeFromCart}

  console.log(cartItems)

  return (
    <StoreContext.Provider value={contextValue} >
      {props.children}
    </StoreContext.Provider>
  )
}
