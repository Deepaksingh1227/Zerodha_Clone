import React from "react";
import { Link } from "react-router-dom";
import HomePage from "../home/HomePage";
function Team() {
    return (
        <div className="container About-section">
            <h1 className="mt-5 mb-5">People</h1>
            <div className="row mt-5">
                <div className="col-lg-6 col-sm-12 col-md-6">
                    <img src="assets/nithinKamath.jpg" alt="team" className="img-fluid " />
                    <h3 className=" ">Nithin Kamath</h3>
                    <h6 className="text-muted ml-5">Founder,CEO</h6>
                </div>
                <div className="col-lg-6 col-sm-12 col-md-6">
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. 
                        Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).

                    </p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href="">HomePage</a> / <a href="">TradingQ&A</a> / <a href="">Twitter</a>
                    </p>
                    
                    
                </div>
               
            </div>
   

            
        </div>
    );
}
export default Team;