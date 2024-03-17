import React from 'react';
import { Link } from 'react-router-dom';
import './store.css';
import { FaCartPlus } from "react-icons/fa";
 const Store=()=>{
    return(
        <div>
            <br/>
            <div className='container'>
            <div className='text'>Stationary Essentials</div>
            <div  className='parent1'>

            <div className='cards '>
                <h3>Note Books</h3>
                <p>Notebooks with various cover designs (plain, patterned, inspirational quotes)</p>
                <img src= {require('../Pictures/notebook.png')} alt="in"/>
                <div className='but'>
                <FaCartPlus />
                    </div>
            </div>

            <div className='cards '>
                <h3>Pens</h3>
                <p>Ballpoint pens in assorted colors and styles</p>
                <img src= {require('../Pictures/pens.jpg')} alt="in"/>
                <div className='but'>
                <FaCartPlus />
                    </div>
                </div>
            
            <div className='cards '>
                <h3>Highlighters</h3>  
                <p>Illuminate important points and passages with our bright and fluorescent highlighters</p>
                <img src= {require('../Pictures/marker.png')} alt="in"/>
                <div className='but'>
                <FaCartPlus />
                    </div>
            </div>
            </div>


            <div  className='parent1'>

                <div className='cards'>
                    <h4>Gel Pens</h4>
                    <p>Gel pens with smooth ink flow</p>
                    <img src= {require('../Pictures/gelpen.png')} alt="in"/>
                    <div className='but'>
                <FaCartPlus />
                    </div>
                </div>

                <div className='cards'>
                    <h3>Scissors</h3>
                    <p>Cut with precision and ease using our sharp and durable scissors</p>
                    <img src= {require('../Pictures/scissors.png')} alt="in"/>
                    <div className='but'>
                <FaCartPlus />
                    </div>
                </div>

                <div className='cards'>
                    <h3>Sticky Notes</h3>
                    <p>Elevate your note-taking experience with our premium sticky notes</p>
                    <img src= {require('../Pictures/sticky.png')} alt="in"/>
                    <div className='but'>
                <FaCartPlus />
                    </div>
                </div>
            </div>
        </div>
            
            <div className='container'>
            <div className='text'>Art Supplies</div>
        <div  className='parent1'>

            <div className='cards'>
                <h3>Sketch Book</h3>
                <p>Capture your imagination on the go</p>
                <img src= {require('../Pictures/pastels.png')} alt="in"/>
                <div className='but'>
                <FaCartPlus />
                    </div>
            </div>

            <div className='cards'>

                <h3>Acrylic Paint Sets</h3>
                <p>Unleash your creativity with our vibrant acrylic paint sets</p>
                <img src= {require('../Pictures/Sketchbook.png')} alt="in"/>
                <div className='but'>
                <FaCartPlus />
                    </div>
            </div>

            <div className='cards'>
                <h3>Paintbrushes</h3>
                <p>Bring your vision to life with our versatile paintbrushes</p>
                <img src= {require('../Pictures/oil-paint.png')} alt="in"/>
                <div className='but'>
                <FaCartPlus />
                    </div>
            </div>

        </div>

         <div  className='parent1'>

            <div className='cards'>
                <h3>Markers</h3>
                <p>Add vibrant hues and fine details to your projects with our high-quality marker sets</p>
                <img src= {require('../Pictures/markers2.png')} alt="in"/>
                <div className='but'>
                <FaCartPlus />
                    </div>
            </div>

            <div className='cards '>
                <h3>Oil Paints</h3>
                <p>Achieve rich and luminous effects with our professional-grade oil paint sets</p>
                <img src= {require('../Pictures/paintbrush.png')} alt="in"/>
                <div className='but'>
                <FaCartPlus />
                    </div>
            </div>

            <div className='cards '>
                <h3>Pastels</h3>
                <p>Experience the soft, velvety texture and brilliant colors of our premium pastel sets</p>
                <img src= {require('../Pictures/paint.png')} alt="in"/>
                <div className='but'>
                <FaCartPlus />
                    </div>
            </div>

        </div>
            </div>

            <div className='container'>
            <div className='text'>Chocolates And Snacks</div>
            <div  className='parent1'>
            <div className='cards'>
                <h3>Dairy Milk</h3>
                <p>Creamy and smooth milk chocolate.</p>
                <img src= {require('../Pictures/dairy-milk.png')} alt="in"/>
                <div className='but'>
                <FaCartPlus />
                    </div>
            </div>
            <div className='cards'>

                <h3>Dark Chocolate</h3>
                <p>Rich and intense dark chocolate.</p>
                <img src= {require('../Pictures/dark chocolate.png')} alt="in"/>
                <div className='but'>
                <FaCartPlus />
                    </div>
            </div>
            <div className='cards'>
                <h3>White Chocolate</h3>
                <p>Sweet and buttery white chocolate.</p>
                <img src= {require('../Pictures/white-chocolate.png')} alt="in"/>
                <div className='but'>
                <FaCartPlus />
                    </div>
            </div>
            </div>
            <div  className='parent1'>
            <div className='cards'>
            <h3>Hazelnut Chocolate</h3>
            <p>Milk chocolate with crunchy hazelnuts.</p>
            <img src= {require('../Pictures/silk.png')} alt="in"/>
            <div className='but'>
                <FaCartPlus />
                    </div>
                
            </div>
            <div className='cards '>
                <h3>Fruit and Nut Chocolate</h3>
                <p>Milk chocolate with dried fruits and nuts.</p>
                <img src= {require('../Pictures/caramel-choc.png')} alt="in"/>
                <div className='but'>
                <FaCartPlus />
                    </div>
            </div>
            <div className='cards '>
                <h3>Caramel-filled Chocolate</h3>
                <p>Milk chocolate with gooey caramel filling.</p>
                <img src= {require('../Pictures/nut-chocolate.png')} alt="in"/>
                <div className='but'>
                <FaCartPlus />
                    </div>
            </div>
            
            </div>
            </div>

        </div>
    )
 }
 export default Store;