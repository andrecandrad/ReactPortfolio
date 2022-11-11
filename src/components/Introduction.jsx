import React from "react";
import { HexagonLinear, DrawYellow } from "./Svgs";

const Introduction = () => {
  return (
    <div className="relative">
      <h1 className="font-OpenSans text-6xl uppercase text-gray-700">
        André Andrade
      </h1>
      <h3 className="mt-1 font-PtSans text-lg text-gray-600">
        Estagiário em Desenvolvimento
      </h3>

      <p className="relative mt-9 w-4/5 font-PtSans text-lg text-gray-600">
        Tenho 20 anos de idade, moro em Belo Horizonte, Minas Gerais e atuo na
        área de tecnologia desde fevereiro de 2022, atuando como estagiário de
        desenvolvimento. Concluí meu ensino médio num colégio técnico e hoje
        estagio para tirar meu diploma de técnico em informática.
        <div className="absolute left-[420px] bottom-[-4rem]">
          <DrawYellow />
        </div>
      </p>

      <button className="mt-16 rounded-md bg-indigo-600 py-3 px-14 font-medium text-white">
        Saiba Mais
      </button>

      <div className="absolute left-56 bottom-20">
        <HexagonLinear />
      </div>
    </div>
  );
};

export default Introduction;
