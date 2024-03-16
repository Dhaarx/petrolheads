import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../foot/footer';


 const Stationary=()=>{
    return(
        <div>
            <h1>It is a Stationary page</h1>
            <br/>
            <center>
            <button style={{ borderRadius: '10%' }}>
            <Link to="/saloon">Saloon</Link>
            </button>
            </center>
            <Footer/>
        </div>
    )
 }
 export default Stationary;