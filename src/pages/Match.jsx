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
      <header className='absolute w-full h-[4rem] flex justify-between items-center'>
                <div className='zain-regular ml-10'>
                    BIenvenido,fulano
                </div>
                    <button className='zain-regular mr-6 text-color1 flex w-[10rem] items-center'>
                        Cerrar Sesion
                        <img src="./image3.png" alt="" className='pl-1 h-auto w-auto'/>
                    </button>
            </header>
      <main className="h-screen w-screen bg-[url('/public/fondo2tin.png')] bg-auto bg-center bg-no-repeat custom-bg-size">
        <section className="h-full w-full flex justify-center items-center">
          {flagTarjeta ? <VerMas setFlagTarjeta={handleTarjeta}/> : <Tarjeta setFlagTarjeta={handleTarjeta}/>}
        </section>
      </main>
    </>
  );
};

export default Match;
