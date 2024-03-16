import React from 'react';
import { Link } from 'react-router-dom';
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
        </div>
    )
 }
 export default Stationary;