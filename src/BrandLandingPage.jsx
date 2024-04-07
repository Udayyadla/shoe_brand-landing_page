import React from "react";
import "./App.css";
import { Header } from "./Header";
export const BrandLandingPage = () => {
  return (
    <div>
      <Header />
      <div className="middle-container">
        <div className="section-1">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="btn-group">
            <button className="btn-primary">Shop Now</button>
            <button className="btn-secondary">Category</button>
          </div>
          <div>
            <h5 className="h5">Also Available On</h5>
            <div id="shopping-logos">
            <img src="/flipkart.png" alt="flipkart logo"/>
                <img src="/amazon.png" alt="amazon-logo"/>
               
            </div>
          </div>
        </div>
        <div className="section-2">
          <div>
            <img src='shoe_image.png' alt="show img" id="shoe_img"/>
          </div>
        </div>
      </div>
    </div>
  );
};
