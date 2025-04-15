import React from "react";
function Pricing() {
    return (
        <div className="container Pricing-section">
            <div className="row">
                <div className="col-lg-3 col-sm-6 col-md-6 mr-5">
                    <h2 className="mb-2">Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="">See pricing <i class="fa-solid fa-arrow-right"></i></a>
                    
                </div>
                <div className="col-lg-3 col-sm-12 col-md-6 Pricing-Option">
                <img src="/assets/pricingMF.svg"/>
                    <p>Free account opening</p>

                </div>
                <div className="col-lg-3 col-sm-12 col-md-6 Pricing-Option">
                    <img src="/assets/pricingMF.svg"/>
                    <p>Free equity delivery
                    and direct mutual funds</p>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-6 Pricing-Option">
                    <img src="/assets/intradayTrades.svg"/>
                    <p>Intraday and
                    F&O</p>
                </div>
            </div>
            
        </div>
    );
}
export default Pricing;