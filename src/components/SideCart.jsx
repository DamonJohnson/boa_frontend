import { Fragment, useState, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { products } from '../data/Products'
import { StoreContext } from '../context/StoreContext'
import CartItem from './OldCartItem'
import { formatCurrency } from '../utilities/formatCurrency'


export default function Cart() {
  
  const [open, setOpen] = useState(true)

  const { cartQuantity } = useContext(StoreContext)

  const productTotals = products.map(product => product.price * cartQuantity[product.id])
  const totalCartPrice = formatCurrency(productTotals.reduce((a, b) => a + b, 0 )/100)




  return (

    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-secondary">Shopping cart</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-secondary hover:text-primary"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-grey">
                            {products.map((product) => {

                              if (cartQuantity[product.id] !== 0){
                                return (
                                  <li key={product.id} className="flex py-6">
                                    <CartItem data={product} />
                                  </li>
                            
                                )
                              }

                            })}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-grey py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-secondary">
                        <p>Subtotal</p>
                        <p>{totalCartPrice}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-secondary">Shipping calculated at checkout.</p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-grey bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-secondary">
                        <p>
                          <button
                            type="button"
                            className="font-medium text-secondary hover:text-primary"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
      </Transition.Root>
  )
}