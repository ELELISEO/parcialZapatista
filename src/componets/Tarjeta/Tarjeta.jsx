import React from "react";

const Tarjeta = ({ setFlagTarjeta, perfil, nombre, edad, ocupacion, estaturaMatch, sobreMiMatch, loQueBusco, setIndiceTar }) => {
  return (
    <div className="bg-white h-[36rem] w-96 rounded-lg shadow-2xl flex items-center justify-center flex-col">
      <div className="w-48 h-48 mb-4"><img src={perfil} alt="" className="w-full h-full" /></div>
      <div className="w-4/5 h-12 flex justify-between items-center">
        <p className="text-lg">{`${nombre}, ${edad}`}</p>
        <button className="border-[0.1rem] rounded-full w-20 text-[0.8rem] h-7 text-customRed flex items-center justify-center border-[#FF7070]" onClick={setFlagTarjeta}>Ver más</button>
      </div>
      <div className="w-4/5 h-auto flex justify-center text-sm flex-col items-start">
        <p>{ocupacion}</p>
        <p>{estaturaMatch}</p>
        <p>{sobreMiMatch}</p>
        <p>{loQueBusco}</p>
      </div>
      <div className="w-3/5 h-auto flex justify-around text-sm flex-row items-start mt-5">
        <button onClick={setIndiceTar} className="border-color1 border-[0.1rem] h-20 w-20 rounded-full flex justify-center items-center"> <img src="./tache.png" alt="" /></button>
        <button onClick={setIndiceTar} className="bg-color1 h-20 w-20 rounded-full flex justify-center items-center"><img src="./heart.png" alt="" /></button>
      </div>
    </div>
  );
};

export default Tarjeta;
