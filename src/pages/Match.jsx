import React, { useState } from "react";
import Tarjeta from "../componets/Tarjeta/Tarjeta.jsx";
import VerMas from "./VerMas.jsx";
import Header from "../componets/Header/Header.jsx";

const Match = () => {
  const [flagTarjeta, setFlagTarjeta] = useState(false);
  const handleTarjeta = () => {
    setFlagTarjeta(!flagTarjeta)
  };
  return (
    <>
      <Header logOut={onclick}/>
      <main className="h-screen w-screen bg-[url('/public/fondo2tin.png')] bg-auto bg-center bg-no-repeat custom-bg-size">
        <section className="h-full w-full flex justify-center items-center">
          {flagTarjeta ? <VerMas setFlagTarjeta={handleTarjeta} /> : <Tarjeta setFlagTarjeta={handleTarjeta} />}
        </section>
      </main>
    </>
  );
};

export default Match;
