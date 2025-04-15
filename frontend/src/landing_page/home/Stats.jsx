import React from "react";
import "./Home.css";

function Stats() {
    return (
        <div className="container Stats-section ">
            <div className="row">
                <div className="col-lg-6 col-sm-12 col-md-6 mr-10 mt-10 Stats-Data">
                    <h2 className="mt-5 pd-10">Trust with confidence</h2>
                    <h4 className="mt-5 pd-10">Customer-first always</h4>
                    <p className="mt-10 pd-10 text-muted">That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India..</p>

                    
                    <h4 className="mt-5 pd-10">No spam or gimmicks</h4>
                    <p className="mt-10 pd-10 text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    
                    <h4 className="mt-5 pd-10">The Zerodha universe</h4>
                    <p className="mt-10 pd-10 text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    
                    <h4 className="mt-5 pd-10">Do better with money</h4>
                    <p className="mt-10 pd-10 text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>


                </div>
                <div className="col-lg-6 col-sm-12 col-md-6 ml-5">
                    <img src="assets/ecosystem.png" alt="stats" className="img-fluid Ecosystem" />
                    <div className="text-center">
                        <a href="" className="mx-5">Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                        
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;