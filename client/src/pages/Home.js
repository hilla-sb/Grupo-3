import React from "react";
import Navbar from "../componentes/Navbar";
import HeroImg from "../componentes/HeroImg";
import Destacados from '../componentes/Destacados';
import TravelAny from '../componentes/TravelAny';
//import Descuento from "./componentes/heroimage/Descuento";
import Footer from "../componentes/Footer";
import EncabezadoDestacados from "../componentes/EncabezadoDestacados";


export default function Home() {
  return (
    <div className="home-pg">
      <Navbar />
      <HeroImg />
       <EncabezadoDestacados/>
      <Destacados />
      <TravelAny/>
      {/*heroimg de descuento, no esta hecho*/}
      {/*<Descuento/> */}
      <Footer />

    </div>
  );
}
