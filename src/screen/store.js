import React from 'react';
import { Link } from 'react-router-dom';
 const Store=()=>{
    return(
        <div>
            <h1>It is a Store page</h1>
            <br/>
            <center>
            <button style={{ borderRadius: '10%' }}>
            <Link to="/stationary">Stationary</Link>
            </button>
            </center>
        </div>
    )
 }
 export default Store;