import React from 'react'
import DesktopHero from "../components/DesktopHero"
import Benefits from "../components/Benefits"
import Store from "../pages/Store"

const Landing = () => {
    return (
    <div classname="overflow-hidden">
        < DesktopHero />
        < Benefits />
        < Store />
     </div>
  )
}

export default Landing