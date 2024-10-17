import React from "react";

const VerMas = ({ setFlagTarjeta, setIndiceTar, perfil, nombre, FechaNac, edadDetalle, estatura, estadoCivil, sobreMi }) => {
  return (
    <div className="bg-white h-[32rem] w-[69rem] rounded-lg shadow-2xl flex items-center justify-start flex-col">
      <div className="w-full h-2/4 flex items-end flex-col relative">
        <button className="absolute left-1 top-3" onClick={setFlagTarjeta}>
          <img src="./ArrowReverse.png" alt="" />
        </button>
        <div className="w-full h-[9.5rem] rounded-l">
          <img
            src="./imageTarjetaFondo.png"
            alt=""
            className="w-full h-full rounded-l"
          />
        </div>
        <div className="absolute bg-red-200 w-40 h-40 bottom-[10%] left-[6.5%] rounded-full">
          <img
            src={perfil}
            alt=""
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="w-[50rem] h-36 rounded-l flex justify-between">
          <div className="flex flex-col justify-center">
            <p className="text-[2rem]">{nombre}</p>
            <div className="flex items-start h-10">
              <img src="./hbd.png" alt="" className="w-6 h-6 mb-[.15rem] " />
              <p className="text-end text-customRed ">
                {FechaNac}
              </p>
            </div>
          </div>
          <div className="w-44 h-full flex justify-between items-center mr-8">
            <button onClick={setIndiceTar} className="border-color1 border-[0.1rem] h-20 w-20 rounded-full flex justify-center items-center"> <img src="./tache.png" alt="" /></button>
            <button onClick={setIndiceTar} className="bg-color1 h-20 w-20 rounded-full flex justify-center items-center"><img src="./heart.png" alt="" /></button>
          </div>
        </div>
      </div>
      <div className="w-full h-2/4 flex ">
        <div className="w-[19rem] h-full border-t-2 border-t-slate-300 border-r-2 border-r-slate-300 text-sm flex flex-col justify-center items-center pl-7 pr-7 text-justify">
          <p>
            {edadDetalle}
          </p>
          <p>
            {estatura}
          </p>
          <p>
            {estadoCivil}
          </p>
        </div>
        <div className="w-[50rem] h-full border-t-2 border-t-slate-300 flex flex-col p-8">
          <p className="text-[2rem]">Sobre mí</p>
          <p className="text-[1rem] text-justify">
            {sobreMi}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerMas;
