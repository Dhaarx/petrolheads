import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa6";

import "./footer.css";

const Footer=()=>{
    return(
            <div className='footer'>
                <div className="social-links">
                    <a href="https://www.instagram.com"><i className="social"><FaInstagram /></i></a>
                    <a href="https://www.linkedin.com"><i className="social"><FaSquareXTwitter /></i></a>
                    <p></p>
                </div>
                <div className='social-linkss'>
                    <a href="https://www.facebook.com"><i className="social"><FaFacebookSquare /></i></a>
                    <a href='https://www.snapchat.com'><i className='social'><FaSnapchat /></i></a>
                </div>
            </div>
    )
}
export default Footer;