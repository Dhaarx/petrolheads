import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import Store from './screen/store';
import Stationary from './screen/stationary';
import Saloon from './screen/saloon';
import Cart from './screen/cart';
import Home from './screen/home';


const approuter=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/stationary',
    element:<Stationary/>
  },
  {
    path:'/store',
    element:<Store/>
  },
  {
    path:'/saloon',
    element:<Saloon/>
  },
  {
    path:'/cart',
    element:<Cart/>
  },
  {
    path:'/home',
    element:<Home/>
  }
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={approuter}>
    
    </RouterProvider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
