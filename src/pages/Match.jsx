import React, { useState } from "react";
import Tarjeta from "../componets/Tarjeta/Tarjeta.jsx";
import VerMas from "./VerMas.jsx";

const Match = () => {
  const [flagTarjeta, setFlagTarjeta] = useState(false);
  const handleTarjeta = () => {
    setFlagTarjeta(!flagTarjeta)
  };
  return (
    <>
      <header className="absolute w-full flex justify-between">
        <div>BIenvenido,fulano</div>
        <div>cerrar sesion</div>
      </header>
      <main className="h-screen w-screen">
        <section className="h-full w-full flex justify-center items-center bg-color1/10">
          {flagTarjeta ? <VerMas setFlagTarjeta={handleTarjeta}/> : <Tarjeta setFlagTarjeta={handleTarjeta}/>}
        </section>
      </main>
    </>
  );
};

export default Match;
