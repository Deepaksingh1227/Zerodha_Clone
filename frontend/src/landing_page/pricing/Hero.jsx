import React from 'react';


function Hero() {
    return (
        <div className='container Pricing-Hero'>
            <h1>Charges</h1>
            <p>List of all charges and taxes</p>

            <div className='row'>
                <div className='col-lg-4 col-sm-12 col-md-6'>
                    <img src="/assets/pricingEquity.svg"/>
                    <h3>Free equity delivery</h3>
                    <p>Free equity deliveryAll equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                    
                </div>
                <div className='col-lg-4 col-sm-12 col-md-6'>
                    <img src="/assets/intradayTrades.svg"/>
                    <h3>Intraday and F&O trades</h3>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order
                         on intraday trades across equity, currency, and commodity trades.
                          Flat ₹20 on all option trades.
                    </p>
                </div>
                <div className='col-lg-4 col-sm-12 col-md-6'>
                    <img src="/assets/pricingMF.svg"/>
                    <h3>Free direct MF</h3>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    
                </div>
            </div>

            

            
        </div>
    );
}
export default Hero;