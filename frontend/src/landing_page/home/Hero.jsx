import React from "react";
import "./Home.css";
function Hero() {
    return (
        <div className="container p-5">
            <div className="row text-center">
                <img src="assets/homeHero.png" alt="hero" className="img-fluid mb-5" />
                <h1 className="mt-5">Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <button className="p-3 HeroButton mb-5">Signup Now</button> 
            </div>
            
        
        </div>
    );
}
export default Hero;