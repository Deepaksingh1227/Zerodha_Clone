import React from "react";
import "./Support.css";
function Tickets() {
    return (
        <div className="container Ticket-section">
            <h3>To create a ticket, select a relevant topic</h3>
            <div className="row mt-5">
                <div className="col-lg-4 col-sm-12 col-md-12">
                    <h4><i class="fa-solid fa-circle-plus"></i> Account Opening</h4>
                    <p><a href="">Resident individual</a></p>
                    <p><a href="">Minor</a></p>
                    <p><a href="">INon Resident Indian (NRI)</a></p>
                    <p><a href="">Company, Partnership, HUF and LLP</a></p>
                    <p><a href="">Glossary</a></p>
                </div>
                    <div className="col-lg-4 col-sm-12 col-md-12">
                    <h4><i class="fa-regular fa-user"></i> Your Zerodha Account</h4>
                    <p><a href="">Your Profile</a></p>
                    <p><a href="">Account modification</a></p>
                    <p><a href="">Client Master Report (CMR) and Depository Participant (DP)</a></p>
                    <p><a href="">Nomination</a></p>
                    <p><a href="">Transfer and conversion of securities</a></p>
                

                </div>
                
                <div className="col-lg-4 col-sm-12 col-md-12">
                    <p></p><h4><i class="fa-solid fa-square-poll-vertical"></i>Kite</h4>
                    <p><a href="">IPO</a></p>
                    <p><a href="">Trading FAQs</a></p>
                    <p><a href="">Margin Trading Facility (MTF) and Margins</a></p>
                    <p><a href="">Alerts and Nudges</a></p>
                    <p><a href="">General</a></p>
                
                </div>

            </div>
                <div className="row">
                <div className="col-lg-4 col-sm-12 col-md-12">
                    <h4><i class="fa-solid fa-credit-card"></i> Funds</h4>
                    <p></p><p><a href="">Add money</a></p>
                    <p><a href="">Withdraw money</a></p>
                    <p><a href="">Add bank accounts</a></p>
                    <p><a href="">Add bank accounts</a></p>
                    <p><a href="">eMandates</a></p>
                    
                </div>
                    <div className="col-lg-4 col-sm-12 col-md-12">
                    <p></p><h4><i class="fa-solid fa-q"></i> Console</h4>
                    <p><a href="">Portfolio</a></p>
                    <p><a href="">Corporate actions</a></p>
                    <p><a href="">Funds statement</a></p>
                    <p><a href="">Reports</a></p>
                    <p><a href="">Profile</a></p>
                

                </div>
                
                <div className="col-lg-4 col-sm-12 col-md-12">
                    <h4><i class="fa-solid fa-coins"></i> Coin</h4>
                    <p><a href="">Understanding mutual funds and Coin</a></p>
                    <p><a href="">Coin app</a></p>
                    <p><a href="">Coin web</a></p>
                    <p><a href="">Transactions and reports</a></p>
                    <p><a href="">National Pension Scheme (NPS)</a></p>
                </div>

            </div>
            
        </div>
    );
}
export default Tickets; 