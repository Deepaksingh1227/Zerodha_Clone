import React from "react";
function Leftimage({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return (
        <div className="container universe-section">
            <div className="row">
                <div className="col-lg-6 col-sm-12 col-md-6 mt-10 " >
                    <img src={imageURL} alt="universe" className="img-fluid mt-5 mb-3" />
                </div>
                <div className="col-lg-6 col-sm-12 col-md-6 mt-5 " >
                    <h2 className="mt-5">{productName}</h2>
                    <p className="mt-3">{productDescription}</p>
                    <div className="ProductButtons">
                        <a href={tryDemo}>Try Demo <i class="fa-solid fa-arrow-right "></i></a>
                        <a href={learnMore}>learn More <i class="fa-solid fa-arrow-right "></i></a>
                    </div>
                    <div className="ProductBadges mt-3 " >
                        <a href={googlePlay}><img src="/assets/googlePlayBadge.svg" className="mt-4"/></a>
                        <a href={appStore}><img src="assets/appstoreBadge.svg" className="mt-4"/></a> 
                    </div>
                   
                    
                </div>
            </div>
           
            <div className="row text-center mb-5 mt-5">
            <p className="mt-5 ">Want to know more about our technology stack? Check out the <a href="">Zerodha.tech blog.</a></p>
            <h3 className="mt-5">The Zerodha Universe</h3>
            <p>Extend your trading and investment experience even further with our partner platforms</p>

            </div>
            
        </div>
    );
}
export default Leftimage;