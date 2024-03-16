import React from 'react';
import { Link } from 'react-router-dom';
 const Cart=()=>{
    return(
        <div>
            <h1>It is a Cart page</h1>
            <br/>
            <center>
            <button style={{ borderRadius: '10%' }}>
            <Link to="/home">Home</Link>
            </button>
            </center>
        </div>
    )
 }
 export default Cart;