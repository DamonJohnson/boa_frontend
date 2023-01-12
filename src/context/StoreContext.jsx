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

  const removeFromCart = (itemId) => {
    setCartQuantity((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
  }

  const contextValue = {cartQuantity, addToCart, removeFromCart}

  console.log(cartQuantity)

  return (
    <StoreContext.Provider value={contextValue} >
      {props.children}
    </StoreContext.Provider>
  )
}
