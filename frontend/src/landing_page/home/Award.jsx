import React from "react";
import "./Home.css";
function Award() {
    return (
        <div className="container  Award-section">
            <div className="row ">
                <div className="col-lg-6 col-sm-12 col-md-6 ">
                    <img src="assets/largestBroker.svg" alt="award" className="img-fluid mt-5" />
                </div>
                <div className="col-lg-6 col-sm-12 col-md-6  mb-5">
                    <h2 className="mb-5 mt-5">Largest stock broker in India</h2>
                    <p >2+ million zerodha clients contibute to over 15% of all retail 
                        order volume in India daily by trading and investing in: </p>
                    <div className="row p">
                        <div className="col-lg-6 col-sm-12 col-md-6 mt-10 ">
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Current derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6 col-sm-12 col-md-6 mt-10 ">
                            <ul>
                                <li>
                                    <p>Stocks & Ipos</p>
                                </li>
                                <li>
                                    <p>Direct mutul funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt. securities</p>
                                </li>
                            </ul>
                        </div>
                        

                    </div>

                    <img src="assets/pressLogos.png" alt="award" className="img-fluid mt-10 mb-5 " />
                    
                </div>

            </div>

            
        </div>
    );
}
export default Award;