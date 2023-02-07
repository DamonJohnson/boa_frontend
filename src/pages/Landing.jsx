import React from 'react'
import DesktopHero from "../components/DesktopHero"
import MobileHero from "../components/MobileHero"
import Benefits from "../components/Benefits"

const Landing = () => {
    return (
    <div classname="overflow-hidden">
        < DesktopHero />
        < MobileHero />
        < Benefits />
     </div>
  )
}

export default Landing