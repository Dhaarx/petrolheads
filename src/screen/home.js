import React from 'react';
import Navbar from '../navbar/navbar';
import "./home.css";
import ima from '../images/farm.jpg' ;
const Home=()=>{
    return(
        <div className="back" >
            <Navbar />
            
                <div className="firstline">
                  <p >Are you in NEED?</p>
                </div>
                <br/>
                  <br/>
                <div className="p1">
                    <p >Don’t Wait!</p>
                </div>
                <br/>
                <br/>
                <br/>
                  <br/>
                <div className="p2">
                    <p >Revamp. Restock. Recharge.</p>
                </div>
                <div>
                    <button className='btn1'>Check Here!</button>
                </div>
               <div className='ima'>
                <img src={ima} alt='imag'></img>
               </div>
        </div>
    )
 }
 export default Home;