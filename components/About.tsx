import React from "react";
import { motion } from "framer-motion";

// https://scontent.fjdo1-1.fna.fbcdn.net/v/t1.6435-9/204137399_4085602471509432_9170933146261212015_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=9nPP2cjLNk0AX870Lr-&_nc_ht=scontent.fjdo1-1.fna&oh=00_AfCYyCEwRlVGIQUyeT_KcXGmy1vQfgxlEnoJX65QXfbbHA&oe=6414699B
type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row
  max-w-7xl px-10 justify-evenly mx-auto items-center overflow-hidden"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        src="https://scontent.fjdo1-1.fna.fbcdn.net/v/t1.6435-9/204137399_4085602471509432_9170933146261212015_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=9nPP2cjLNk0AX870Lr-&_nc_ht=scontent.fjdo1-1.fna&oh=00_AfCYyCEwRlVGIQUyeT_KcXGmy1vQfgxlEnoJX65QXfbbHA&oe=6414699B"
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-56 md:h-64 xl:w-[250px] xl:h-[300px]"
        alt="profile pic"
      />

      <div className="space-y-10 px-8 md:px-10">
        <h4 className="text-4xl font-semibold">
          Uma breve{" "}
          <span className="underline decoration-[#1f4b99]/50">introdução</span>
        </h4>
        <p className="text-lg">
          {" "}
          Olá, sou Rennan, desenvolvedor web especializado em tecnologias
          front-end, como React e Next. Autodidata apaixonado por tecnologia, me
          interessei pela área de programação desde cedo com meu primeiro acesso
          a internet, onde vi o básico de C++ e lógica de programção. Busquei me
          aprofundar em HTML e CSS durante o tempo livre, logo descobri o
          JavaScript, e sempre que possivel pescava algum conhecimento online,
          tanto no youtube quanto em plataformas como a{" "}
          <a
            className="text-green-500 font-semibold underline hover:text-green-800"
            href="https://www.w3profile.com/RennanSilva"
            target="_blank"
          >
            W3SCHOOLS
          </a>
          . Possuo diversos projetos na área, fruto de cursos nas plataformas{" "}
          {""}
          <a
            href="https://b7web.com.br/"
            target="_blank"
            className="text-blue-800 font-semibold underline hover:text-blue-900"
          >
            B7WEB
          </a>{" "}
          e {""}
          <a
            href="https://www.scaler.com/academy/"
            target="_blank"
            className="text-pink-600 font-semibold underline hover:text-pink-800"
          >
            SCALER
          </a>
          .
          <br />
          <a
            href="https://drive.google.com/file/d/1U1LUQ8syeYl3sWuaV28AdzDrhE7L9uPO/view"
            target="_blank"
            rel="noreferrer"
            className="mx-4 text-pink-600 font-semibold underline hover:text-pink-800"
          >
            Certificado CSS da Scaler
          </a>
          <a
            href="https://drive.google.com/file/d/1U1LUQ8syeYl3sWuaV28AdzDrhE7L9uPO/view"
            target="_blank"
            rel="noreferrer"
            className="mx-4 text-pink-600 font-semibold underline hover:text-pink-800"
          >
            Certificado HTML da Scaler
          </a>
          <a
            href="https://drive.google.com/file/d/1NwVI5I7OTLkC5oVQELQgSXTmD1XT7HN1/view"
            target="_blank"
            rel="noreferrer"
            className="mx-4 text-pink-600 font-semibold underline hover:text-pink-800"
          >
            Certificado JavaScript da Scaler
          </a>
        </p>
      </div>
    </motion.div>
  );
}

export default About;
