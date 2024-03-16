import React from 'react';
import { Link } from 'react-router-dom';
import './store.css';

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
        </div>
    )
 }
 export default Store;