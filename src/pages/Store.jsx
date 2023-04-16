import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import ImageCarousel from "../components/ImageCarousel"
import { formatCurrency } from "../utilities/formatCurrency"
import { products } from "../data/Products"
import { images } from "../assets/Images"
import { StoreContext } from "../context/StoreContext"

const Store = () => {
    const [quantity, setQuantity] = useState(1)
    const [activeProduct, setActiveProduct] = useState(
        products.find((product) => product.id === "001")
    )
    const total = quantity * activeProduct.price
    const { addToCart, cartQuantity } = useContext(StoreContext)

    const cartItemQuantity = cartQuantity[activeProduct.id]

    return (
        <>
            <section className="text-secondary body-font overflow-hidden">
                <div className="xs:px-8 sm:container sm:px-5 py-24 sm:mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full rounded-md border border-pale-grey">
                            <ImageCarousel
                                data={images}
                                alt="Product photos for the Boa Reusable Pallet Wraps"
                            />
                        </div>

                        <div className="xs:w-full lg:w-1/2 lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font tracking-widest">BOA WRAPS</h2>
                            <h1 className="xs:text-2xl text-3xl title-font font-medium mb-1">
                                Reusable Pallet Wrap
                            </h1>

                            <div className="relative xs:rounded-lg rounded-md mt-6 md:border border-pale-grey">
                                <table className="w-full text-sm text-left">
                                    <thead className="text-xs uppercase bg-pale-grey">
                                        <tr className="rounded-sm">
                                            <th scope="col" className="px-6 py-3 ">
                                                Product Details
                                            </th>
                                            <th scope="col" className="px-6 py-3"></th>
                                            <th scope="col" className="px-6 py-3"></th>
                                            <th scope="col" className="px-6 py-3"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white ">
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium whitespace-nowrap"
                                            >
                                                Pallet Size
                                            </th>
                                            <td className="px-6 py-4"></td>
                                            <td className="px-6 py-4"></td>
                                            <td className="px-6 py-4">1.2 x 1.2m</td>
                                        </tr>
                                        <tr className="bg-white">
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium  whitespace-nowrap"
                                            >
                                                Mesh length
                                            </th>
                                            <td className="px-6 py-4"></td>
                                            <td className="px-6 py-4"></td>
                                            <td className="px-6 py-4">4m</td>
                                        </tr>
                                        <tr className="bg-white">
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium   whitespace-nowrap"
                                            >
                                                Material
                                            </th>
                                            <td className="px-6 py-4"></td>
                                            <td className="px-6 py-4"></td>
                                            <td className="px-6 py-4">PVC Mesh</td>
                                        </tr>
                                        <tr className="bg-white">
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium   whitespace-nowrap"
                                            >
                                                Colour
                                            </th>
                                            <td className="px-6 py-4"></td>
                                            <td className="px-6 py-4"></td>
                                            <td className="px-6 py-4">Black</td>
                                        </tr>
                                        <tr className="bg-white">
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium   whitespace-nowrap"
                                            >
                                                Unit Price
                                            </th>
                                            <td className="px-6 py-4"></td>
                                            <td className="px-6 py-4"></td>
                                            <td className="px-6 py-4">
                                                {formatCurrency(activeProduct.price / 100)}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="flex mt-6 items-center pb-5 border-b-2 border-pale-grey mb-5">
                                <div className="flex items-center">
                                    <span className="mr-3">Height</span>
                                    <div className="relative">
                                        <select
                                            className="rounded border appearance-none border-pale-grey py-1 hover:ring-2  text-base pl-2 pr-8"
                                            name="height"
                                            id="height"
                                            onChange={(e) =>
                                                setActiveProduct(
                                                    products.find(
                                                        (product) => product.id === e.target.value
                                                    )
                                                )
                                            }
                                        >
                                            <option value="001">1.2m</option>
                                            <option value="002">1.5m</option>
                                        </select>
                                        <span className="absolute right-0 top-0 h-full w-10 text-center pointer-events-none flex items-center justify-center">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="w-4 h-4"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="flex pl-12">
                                        <span className="mr-3 mt-1">Quantity</span>
                                        <input
                                            className="text-center border rounded-md border-pale-grey py-1 px-3"
                                            type="number"
                                            id="quantity"
                                            name="quantity"
                                            placeholder="1"
                                            min="1"
                                            max="99"
                                            onChange={(e) => setQuantity(e.target.value)}
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl  ">
                                    {total !== null ? formatCurrency(total / 100) : ""}
                                </span>
                                <button
                                    className="flex ml-auto text-white bg-primary border-0 py-2 px-6 hover:ring-2 focus:ring-3 rounded"
                                    onClick={() =>
                                        addToCart(activeProduct.id, parseInt(quantity))
                                    }
                                >
                                    Add to cart{" "}
                                    {cartItemQuantity > 0 && <>({cartItemQuantity})</>}
                                </button>
                            </div><div className="pt-6 text-sm text-right">
                                <Link to="/Quote" className="underline hover:font-semibold">Custom Order?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Store
