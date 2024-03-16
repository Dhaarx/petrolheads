import React from 'react';
import { Link } from 'react-router-dom';
 const Saloon=()=>{
    return(
        <div>
            <h1>It is a Saloon page</h1>
            <br/>
            <center>
            <button style={{ borderRadius: '10%' }}>
            <Link to="/cart">Cart</Link>
            </button>
            </center>
        </div>
    )
 }
 export default Saloon;