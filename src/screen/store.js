import React from 'react';
import { Link } from 'react-router-dom';
import './store.css';
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
 const Store=()=>{
    return(
        <div>

            <br/>
            <div className='container'>
            <div className='text'>Stationary Essentials</div>

            <div  className='parent1'>
            <div className='cards'>
                <p>Product1</p>
            </div>
            <div className='cards'>
                <p>Product2</p>
            </div>
            <div className='cards'>
                <p>Product3</p>
            </div>
            
            </div>
            <div  className='parent1'>
            <div className='cards'>
                <p>Product4</p>
            </div>
            <div className='cards'>
                <p>Product5</p>
            </div>
            <div className='cards'>
                <p>Product6</p>
            </div>
            </div>
            </div>
            
            <div className='container'>
            <div className='text'>Art Supplies</div>
            <div  className='parent1'>
            <div className='cards'>
                <p>Product</p>
            </div>
            <div className='cards'>

                <p className='inside-card'>Product</p>
            </div>
            <div className='cards'>
                <p>Product</p>
            </div>
            </div>
             <div  className='parent1'>
            <div className='cards'>
                <p>Product</p>
            </div>
            <div className='cards'>
                <p>Product</p>
            </div>
            <div className='cards'>
                <p>Product</p>
            </div>
            </div>
            </div>

            <div className='container'>
            <div className='text'>Chocolates And Snacks</div>
            <div  className='parent1'>
            <div className='cards'>
                <p>Product</p>
            </div>
            <div className='cards'>
                <p>Product</p>
            </div>
            <div className='cards'>
                <p>Product</p>
            </div>
            </div>
            <div  className='parent1'>
            <div className='cards'>
                <p>Product</p>
            </div>
            <div className='cards'>
                <p>Product</p>
            </div>
            <div className='cards'>
                <p>Product</p>
            </div>
            
            </div>
            </div>
            <center>
            <button style={{ borderRadius: '10%' }}>
            <Link to="/stationary">Stationary</Link>
            </button>
            </center>
            <footer>
                <div className='footer'>
                <div className="social-links">
        <a href="https://www.instagram.com"><i className="social"><FaInstagram /></i></a>
        <a href="https://www.linkedin.com"><i className="social"><FaSquareXTwitter /></i></a>
        <a href="https://www.facebook.com"><i className="social"><FaFacebookSquare /></i></a>
      </div>
      <p> 2024 @Fusion Hub. All rights reserved.</p>
      </div>
            </footer>

        </div>
    )
 }
 export default Store;