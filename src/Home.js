import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <div className="title-container">
              <h1 className="display-1" style={{ textShadow: "1px 1px 0px black", color: "orange" }}>FOOD</h1>
              <p className="subtext">Satisfy Your Cravings: A Fusion of Flavors Awaits at Every Turn</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col">
          <Carousel style={{ height: '100%' }}>
              <Carousel.Item>
                <div className="card" style={{ height: '100%' }} >
                  <div className="card-body" style={{ height: '100%' }}>
                    <h1 className="card-title ">Rayyan.H</h1>
                    <h3 className="card-text bg-warning lead"> - Unforgettable Dining Experience! I recently had the pleasure of dining at this restaurant and it was truly memorable. The food was exquisite, the atmosphere was cozy, and the service was impeccable. I can't stop raving about it. Definitely a must-visit!  </h3>  
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card " style={{ height: '100%' }}>
                  <div className="card-body " style={{ height: '100%' }}>
                    <h1 className="card-title ">Ayman.A</h1>
                    <p className="card-text bg-warning lead">- Absolutely Amazing! The food at this restaurant exceeded my expectations. Every bite was bursting with flavor, and the presentation was stunning. It was truly a delightful culinary experience. Highly recommended!</p>  
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card" style={{ height: '100%' }}>
                  <div className="card-body" style={{ height: '100%' }}>
                    <h1 className="card-title ">Ashish.R</h1>
                    <p className="card-text bg-warning lead">- A Hidden Gem! I stumbled upon this restaurant and it turned out to be a pleasant surprise. The food was exceptional, with a perfect blend of flavors and fresh ingredients. The staff was friendly and attentive. I can't wait to go back</p>  
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card" style={{ height: '100%' }}>
                  <div className="card-body" style={{ height: '100%' }}>
                    <h1 className="card-title ">Vishesh.H</h1>
                    <p className="card-text bg-warning lead">- Deliciously Addictive! The food from this establishment is simply addictive. From the first bite to the last, every dish is a culinary masterpiece. The quality and taste are consistently outstanding. This place has become my go-to spot!.</p>  
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="text-center mb-0">© 2023 Food Website. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Home;
