import React from "react"

const Benefits = () => {
  return (
    <section>
      <div className="xs:pt-32 md:py-20 lg:py-28 px-4 mx-auto max-w-screen-2xl">
        <h2 className="mb-10 text-4xl tracking-tight font-extrabold text-center text-secondary">
          Why choose a Boa Reusable Pallet Wrap?
        </h2>
        <div className="flex lg:flex-row xs:flex-col">
          <img
            src="https://res.cloudinary.com/damonjohnson/image/upload/v1670846499/Boa/Valuecard-2_sbsrvk.png"
            className="lg:w-1/3 md:w-3/4 md:mx-auto lg:pb-2"
            alt="Save Money"
          />
          <img
            src="https://res.cloudinary.com/damonjohnson/image/upload/v1670846499/Boa/Wastecard-2_ffyx7x.png"
            className="lg:w-1/3 md:w-3/4 md:mx-auto"
            alt="Reduce Waste"
          />
          <img
            src="https://res.cloudinary.com/damonjohnson/image/upload/v1670846599/Boa/Designcard-2_ocuhu9.png"
            className="lg:w-1/3 md:w-3/4 md:mx-auto lg:pb-4"
            alt="Quality Design"
          />
        </div>
      </div>
    </section>
  )
}

export default Benefits
