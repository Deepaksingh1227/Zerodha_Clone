import React from "react";
function Hero(){
    return(
        <div className="container-Section mb-5"> 
            <div  className="support-Section">
                <h3>Support Portal</h3>
                <a href=""> Track Tickets</a> 
            </div>   
            
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-6 col-sm-12 col-md-6">
                        <h4>Search for an answer or browse help topics to create a ticket</h4>
                        <form className="form-inline my-2 my-lg-0 mb-5 support-form">
                                <input
                                    className="form-control mr-sm-2 mt-5 "
                                    type="search"
                                    placeholder="Eg: how do i activate F&O,why is my order getting rejwcted..."
                                    aria-label="Search"
                                />
                            </form>
                            <p className="mt-5"><a href="">Track account opening</a></p>
                            <p><a href="">Track segment activation</a></p>
                            <p><a href="">Intraday margins</a></p>
                            <p><a href="">Kite user manual</a></p>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-6 mt-5">
                        <h3>Featured</h3>
                        <ol className="numbered mt-5 mb-5">
                            <li className="mb-5"><a href="">Change in expiry day of NSE derivative contracts from April 04, 2025 [Withheld]</a></li>
                            <li><a href="">Current Takeovers and Delisting – April 2025</a></li>
                        </ol>
                    </div>
                </div>
            </div>
                
        </div>
    );  
}

export default Hero;