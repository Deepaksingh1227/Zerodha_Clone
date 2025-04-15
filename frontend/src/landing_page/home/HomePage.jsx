import React from "react";
import Hero from "./Hero";
import Award from "./Award";
import Pricing from "./Pricing";
import Stats from "./Stats";
import Education from "./Education";
import OpenAccount from "../OpenAccount";

function HomePage() {
    return (
        <>
        
        <Hero/>
        <Award/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        
        </>
    );
}
export default HomePage;