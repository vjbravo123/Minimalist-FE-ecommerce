import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="container">

                <div className="address">
                    <h2>Our Address</h2>
                    <p>Barkargaten 66,
                       814 17 Skutskar</p>
                </div>

                <div className="contact"><h2>Contact Us</h2>
                    <p>info@wells.com
                       (917) 365-8863</p>
                </div>

                <div className="wh"><h2>WORKING HOURS</h2>
                    <p>Mon - Fri: 9:00 - 18:00</p>
                     <p>   Sat: 10:00 - 16:00</p>
                      <p>  Sun: Closed</p> 
                </div>
            </div>
        </footer>
    )
}

export default Footer