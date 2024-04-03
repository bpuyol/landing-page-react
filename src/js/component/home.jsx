// Home.js
import React from 'react';
import Navbar from './navbar';
import Jumbotron from './jumbotron';
import Card from './card';
import Footer from './footer';
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <Jumbotron />
        <div className="row">
          <div className="col-md-4">
            <Card 
              title="Servicio 1" 
              description="Descripción del servicio 1" 
              image="https://via.placeholder.com/300"
            />
          </div>
          <div className="col-md-4">
            <Card 
              title="Servicio 2" 
              description="Descripción del servicio 2" 
              image="https://via.placeholder.com/300"
            />
          </div>
          <div className="col-md-4">
            <Card 
              title="Servicio 3" 
              description="Descripción del servicio 3" 
              image="https://via.placeholder.com/300"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
