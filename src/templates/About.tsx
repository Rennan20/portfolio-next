"use client";

import { CertificateLink } from "@/components/CertificateLink";
import { AboutText } from "@/utils/mockedData/About";
import Image from "next/image";
import Link from "next/link";

export const About = () => {
  return (
    <section
      className="min-h-screen flex flex-col relative text-center md:text-left md:flex-row
        max-w-7xl justify-evenly mx-auto items-center overflow-hidden animate-fadeIn py-20"
    >
      <h3 className="hidden md:block absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Sobre mim
      </h3>

      <Image
        src="https://i.imgur.com/2xyYnFx.jpg"
        width={200}
        height={250}
        className="hidden lg:block -mb-20 lg:mb-0 flex-shrink-0 rounded-full object-cover
          lg:rounded-lg lg:size-32 xl:w-[200px] xl:h-[250px] animate-slideInLeft"
        alt="Foto de perfil de Rennan"
      />

      <div className="space-y-3 p-10">
        {AboutText.map((paragraph, index) => (
          <p key={index} className="text-sm md:text-base">
            {paragraph}
          </p>
        ))}
        <p>
          Possuo formação complementar por meio de plataformas como{" "}
          <Link
            className="text-green-500 font-semibold underline hover:text-green-800"
            href="https://www.w3profile.com/RennanSilva"
            rel="noreferrer"
            target="_blank"
          >
            W3SCHOOLS
          </Link>
          ,{" "}
          <Link
            href="https://b7web.com.br/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-800 font-semibold underline hover:text-blue-900"
          >
            B7WEB.
          </Link>
        </p>

        <p>Alguns dos meus certificados:</p>
        <ul className="list-disc list-inside">
          <CertificateLink href="https://drive.google.com/file/d/1U1LUQ8syeYl3sWuaV28AdzDrhE7L9uPO/view">
            Certificado CSS da Scaler
          </CertificateLink>
          <CertificateLink href="https://drive.google.com/file/d/1U1LUQ8syeYl3sWuaV28AdzDrhE7L9uPO/view">
            Certificado HTML da Scaler
          </CertificateLink>
          <CertificateLink href="https://drive.google.com/file/d/1NwVI5I7OTLkC5oVQELQgSXTmD1XT7HN1/view">
            Certificado JavaScript da Scaler
          </CertificateLink>
        </ul>
      </div>
    </section>
  );
};
