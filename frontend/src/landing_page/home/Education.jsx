import React from "react";
function Education() {
    return (
        <div className="container Education-section">
            <div className="row between v-align">
                <div className="col-lg-6 col-sm-12 col-md-6 mt-10 " >
                    <img src="assets/education.svg" alt="education" className="img-fluid mt-5" />
                </div>
                <div className="col-lg-6 col-sm-12 col-md-6 mt-10 " >
                    <h2 className="mb-5 mt-5">Free and open market education</h2>
                    <p>Varsity, the largest online stock market education book in the world <br/>
                    covering everything from the basics to advanced trading.</p>
                    <a href="">Varsity<i class="fa-solid fa-arrow-right"></i></a>
                    <p className="mt-5">TradingQ&A, the most active trading and investment community in India<br/> for all your market related queries.</p>
                    <a href="">TradingQ&A<i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
}
export default Education;   