import React from "react";

const Tarjeta = ({setFlagTarjeta}) => {
  return (
    <div className="bg-white h-[32rem] w-96 rounded-lg shadow-2xl flex items-center justify-center flex-col">
      <div className="w-48 h-48 bg-black"></div>
      <div className="w-4/5 h-12 bg-teal-100 flex justify-between items-center">
        <p>Memoria RAM, 55</p>
        <button onClick={setFlagTarjeta}>ver mas</button>
      </div>
      <div className="w-full h-36 bg-slate-600 flex justify-around items-center">
        <button className="bg-color1 h-12 w-12"></button>
        <button className="bg-color1 h-12 w-12"></button>
      </div>
    </div>
  );
};

export default Tarjeta;
