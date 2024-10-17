import React, { useState } from "react";
import Tarjeta from "../componets/Tarjeta/Tarjeta.jsx";
import VerMas from "./VerMas.jsx";
import Header from "../componets/Header/Header.jsx";
import { info } from "../data/info.js";


const Match = () => {
  const data = info;
  const [flagTarjeta, setFlagTarjeta] = useState(false);
  const handleTarjeta = () => {
    setFlagTarjeta(!flagTarjeta)
  };
  const [indiceTar, setIndiceTar] = useState(0)
  const handleIndiceTar = () => {
    if (indiceTar < data.length - 1) {
      setIndiceTar(indiceTar + 1)
    } else setIndiceTar(0)
  }
  return (
    <>
      <Header logOut={onclick}/>

      <main className="h-screen w-screen bg-[url('/public/fondo2tin.png')] bg-auto bg-center bg-no-repeat custom-bg-size">
        <section className="h-full w-full flex justify-center items-center">
          {flagTarjeta ? <VerMas setFlagTarjeta={handleTarjeta} setIndiceTar={handleIndiceTar} perfil={data[indiceTar].imagen} nombre={data[indiceTar].nombre} FechaNac={data[indiceTar].FechaNac} 
          edadDetalle={data[indiceTar].edadDetalle} estatura={data[indiceTar].estatura} estadoCivil={data[indiceTar].estadoCivil} sobreMi={data[indiceTar].sobreMi}/> 
          : <Tarjeta setFlagTarjeta={handleTarjeta} perfil={data[indiceTar].imagen} nombre={data[indiceTar].nombre} edad={data[indiceTar].edad}
            ocupacion={data[indiceTar].ocupacion} estaturaMatch={data[indiceTar].estaturaMatch} sobreMiMatch={data[indiceTar].sobreMiMatch} loQueBusco={data[indiceTar].loQueBusco}
            setIndiceTar={handleIndiceTar} />}
        </section>
      </main>
    </>
  );
};

export default Match;
