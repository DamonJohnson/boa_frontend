import { useState, createContext } from 'react'


export const StoreContext = createContext(null)

const defaultQuantity = {
  '001': 0,
  '002': 0
}

export const StoreContextProvider = (props) => {

  const [cartQuantity, setCartQuantity] = useState(defaultQuantity)

  const addToCart = (itemId, quantity) => {
    setCartQuantity((prev) => ({...prev, [itemId]: (prev[itemId] + quantity)}))
  }

    const addOneToCart = (itemId) => {
    setCartQuantity((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
  }

  const removeOneFromCart = (itemId) => {
    setCartQuantity((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
  }

  const removeAllFromCart = (itemId) => {
    setCartQuantity((prev) => ({...prev, [itemId]: prev[itemId] - cartQuantity[itemId]}))
  }

  const contextValue = {cartQuantity, addToCart, addOneToCart, removeOneFromCart, removeAllFromCart}

  return (
    <StoreContext.Provider value={contextValue} >
      {props.children}
    </StoreContext.Provider>
  )
}
