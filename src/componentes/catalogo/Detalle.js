import React from 'react';
import Navbar from '../nav/Navbar';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
//import Card from 'react-bootstrap/Card';
//import { Button } from 'react-bootstrap';

export default function Detalle () {
  return (
    <div className="detalle">
      <Navbar/>
      {/* <Breadcrumb>Home. Montaña. Bicicleta.</Breadcrumb> */}

      <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Montaña</Breadcrumb.Item>
          <Breadcrumb.Item active>Bicicleta</Breadcrumb.Item>
      </Breadcrumb>

      
      <h1>Paseo en bicicleta por el Montseny</h1>
      <img src="" alt=""/>
      <p>Descripción de la actividad</p>
      <p>Disfruta de un hermoso paseo en bicicleta por el increíble Parque Natural del Montseny.</p>
      {/* <Footer/> */}
    </div>
    )
  }