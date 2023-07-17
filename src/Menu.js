import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './App.css';
function Menu() {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <img src= {require("./images/Dosa.jpg")} className="card-img-top fixed-height" alt="Menu Item" />
            <div className="card-body">
              <h5 className="card-title">Dosa</h5>
              <p className="card-text">Price: Rs.500</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src={require("./images/Noodles.jpg")} className="card-img-top fixed-height" alt="Menu Item" />
            <div className="card-body">
              <h5 className="card-title">Noodles</h5>
              <p className="card-text">Price: Rs.500</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src={require("./images/Pasta.jpg")} className="card-img-top fixed-height" alt="Menu Item" />
            <div className="card-body">
              <h5 className="card-title">Pasta</h5>
              <p className="card-text">Price: Rs.500</p>
            </div>
          </div>
        </div>
      </div>
    </div>


<div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <img src= {require("./images/Pizza.jpg")} className="card-img-top fixed-height" alt="Menu Item" />
            <div className="card-body">
              <h5 className="card-title">Pizza</h5>
              <p className="card-text">Price: Rs.500</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src={require("./images/Soup.jpg")} className="card-img-top fixed-height" alt="Menu Item" />
            <div className="card-body">
              <h5 className="card-title">Soup</h5>
              <p className="card-text">Price: Rs.500</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src= {require("./images/Vada.jpg")} className="card-img-top fixed-height" alt="Menu Item" />
            <div className="card-body">
              <h5 className="card-title">Vada</h5>
              <p className="card-text">Price: Rs.500</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Menu;
