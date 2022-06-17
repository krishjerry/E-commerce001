import React from "react";
import '../App.css';
import Products from './Products';

const Home = () => {
  return (
    <div className="hero">
      <div class="card bg-dark text-white border-0">
        <img src="trend1.jpg" class="card-img" alt="Background" height='650px'/>
        <div class="card-img-overlay d-flex flex-column justify-content-around">
        <div className='container'>
         <h5 class="card-title display-3 fw-bolder me-3">NEW SEASON ARRIVALS</h5>
            <p class="card-text lead fs-2">
                CHECK OUT ALL THE TRENDS
            </p>
        </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
