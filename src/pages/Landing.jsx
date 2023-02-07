import React from 'react'
import DesktopHero from "../components/DesktopHero"
import MobileHero from "../components/MobileHero"
import Benefits from "../components/Benefits"
import Store from "../pages/Store"

const Landing = () => {
    return (
    <div classname="overflow-hidden">
        < DesktopHero />
        < MobileHero />
        < Benefits />
        < Store />
     </div>
  )
}

export default Landing