import React from "react";
import Hero from "./Hero";
import Leftimage from "./Leftimage";
import Rightimage from "./Rightimage";
function Universe() {
    return(
        <div>
            <Hero/>
            <Leftimage imageURL="/assets/kite.png" 
                productName="Kite"
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
                tryDemo="" 
                learnMore="" 
                googlePlay="" 
                appStore=""
            />
            <Rightimage imageURL="/assets/console.png"
                productName="Console"
                productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." 
                learnMore=""
            />
            <Leftimage imageURL="/assets/coin.png" 
                productName="Coin"
                productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." 
                tryDemo="" 
                learnMore="" 
                googlePlay="" 
                appStore=""
            />

            <Rightimage imageURL="/assets/kiteconnect.png"
                productName="Kite Connect API"
                productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." 
                learnMore=""
            />
           
            <Leftimage imageURL="/assets/varsity.png" 
                productName="Varsity"
                productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." 
                tryDemo="" 
                learnMore="" 
                googlePlay="" 
                appStore=""
            />
            <div className="container Universe-Footer">
                <div className="row">
                    <div className="col-lg-3 col-sm-12 col-md-6 mt-10 " >
                        <img src="/assets/zerodhaFundhouse.png" alt="universe" className="img-fluid mt-5 mb-3" />
                        <p>Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals.
                        
                        </p>
                    </div>
                    <div className="col-lg-3 col-sm-12 col-md-6 mt-10 " >
                        <img src="/assets/sensibullLogo.svg" alt="universe" className="img-fluid mt-5 mb-3" />
                        <p>Options trading platform that lets you
                            create strategies, analyze positions, and examine
                            data points like open interest, FII/DII, and more.
                        </p>
                    </div>
                    <div className="col-lg-3 col-sm-12 col-md-6 mt-10 " >
                        <img src="/assets/streakLogo.png" alt="universe" className="img-fluid mt-5 mb-3" />
                        <p>Systematic trading platform
                            that allows you to create and backtest
                            strategies without coding.
                        
                        </p>
                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-3 col-sm-12 col-md-6 mt-10 " >
                        <img src="/assets/smallcaseLogo.png" alt="universe" className="img-fluid mt-5 mb-3" />
                        <p>Thematic investing platform
                            that helps you invest in diversified
                            baskets of stocks on ETFs.
                        </p>
                    </div>
                    <div className="col-lg-3 col-sm-12 col-md-6 mt-10 " >
                        <img src="/assets/dittoLogo.png" alt="universe" className="img-fluid mt-5 mb-3" />
                        <p>Personalized advice on life
                            and health insurance. No spam
                            and no mis-selling.
                        </p>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
}
export default Universe;    