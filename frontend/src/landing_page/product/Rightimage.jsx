import React from "react";
function Rightimage({imageURL, productName, productDescription, learnMore}) {
    return (
        < div className="container ">
            <div className="row mb-5">
                <div className="col-lg-6 col-sm-12 col-md-6 RightImage " >
                    <h2 className="mt-5">{productName}</h2>
                    <p className="mt-3">{productDescription}</p>
                    <div className="ProductButtons">
                        <a href={learnMore}>learn More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 col-md-6  " >
                    <img src={imageURL} alt="universe" className="img-fluid  mb-5 mt-3" />
                </div>
            </div>
            
           
        </div>
    );
}
export default Rightimage;