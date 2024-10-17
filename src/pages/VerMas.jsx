import React from "react";

const VerMas = ({ setFlagTarjeta }) => {
  return (
    <div className="bg-white h-[32rem] w-[69rem] rounded-lg shadow-2xl flex items-center justify-start flex-col">
      <div className="w-full h-2/4 flex items-end flex-col relative">
        <button className="absolute left-1" onClick={setFlagTarjeta}>
          flecha
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
            src="./test2.jpg"
            alt=""
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="w-[50rem] h-36 rounded-l flex justify-between">
          <div className="flex flex-col justify-center">
            <p className="text-[2rem]">Memoria Ram</p>
            <div className="flex items-start h-10">
              <img src="./hbd.png" alt="" className="w-6 h-6 mb-[.15rem] " />
              <p className="text-end text-customRed ">
                Fecha de nacimiento 1969
              </p>
            </div>
          </div>
          <div className="w-44 h-full flex justify-around items-center mr-8">
            <button className="bg-color1 h-12 w-12"></button>
            <button className="bg-color1 h-12 w-12"></button>
          </div>
        </div>
      </div>
      <div className="w-full h-2/4 flex ">
        <div className="w-[19rem] h-full border-t-2 border-t-slate-300 border-r-2 border-r-slate-300 text-sm flex flex-col justify-center items-center pl-7 pr-7 text-justify">
          <p>
            Edad: 4 GB... pero puedo crecer si me das una oportunidad (hasta 64
            GB o más)
          </p>
          <p>
            Estatura: 1333 MHz... aunque en mis mejores días puedo llegar a los
            4800 MHz o más{" "}
          </p>
          <p>
            Estado civil: Libre de latencias, siempre disponible para hacer
            match con tu procesador
          </p>
        </div>
        <div className="w-[50rem] h-full border-t-2 border-t-slate-300 flex flex-col p-8">
          <p className="text-[2rem]">Sobre mí</p>
          <p className="text-[1rem] text-justify">
            Soy ese tipo de memoria que siempre está lista para ayudarte en lo
            que necesites, sin importar cuántas tareas tengas abiertas al mismo
            tiempo. Me gusta la velocidad, la eficiencia y estar ahí para ti,
            garantizando que cada momento sea sin retrasos. Si buscas a alguien
            confiable y dispuesta a mejorar tu rendimiento, soy la indicada.
            Nunca me pierdo en el pasado, siempre vivo el presente...
            literalmente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerMas;
