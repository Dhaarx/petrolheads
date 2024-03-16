import React from 'react';
import { Link } from 'react-router-dom';
 const Home=()=>{
    return(
        <div>
            <h1>It is a home page</h1>
            <br/>
            <center>
            <button style={{ borderRadius: '10%' }}>
            <Link to="/store">Store</Link>
            </button>
            </center>
        </div>
    )
 }
 export default Home;