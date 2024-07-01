import React from 'react'
import Hero from "../components/hero.jsx";
import Homecard from "../components/homecard.jsx";
import Joblistings from "../components/joblistings.jsx";
import Viewalljobs from "../components/viewalljobs.jsx";


const Homepage = () => {
    return (
        <>
        <Hero/>
            <Homecard/>
            <Joblistings isHome={true} />
            <Viewalljobs/>
        </>
    )
}
export default Homepage
