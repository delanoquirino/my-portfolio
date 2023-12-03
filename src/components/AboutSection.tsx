"use client";
import React, { useTransition, useState } from "react";

import { TabButton } from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-square pl-2">
        <li>JavaScript</li>
        <li>React</li>
        <li>React Native</li>
        <li>Next</li>
        <li>TypeScript</li>
        <li>Node</li>
        <li>Jest</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-square pl-2">
        <li>Newtab Academy: Imersão Dev Web</li>
        <li>Análise e Desenvolvimento de Sistemas, Unibf</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-square pl-2">
        <li>React ( hooks, router, API, Projetos) - Udemy</li>
        <li>Curso de Node.js - Guia do Programador</li>
      </ul>
    ),
  },
];

export const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-12 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mim</h2>
          <p className="text-base lg:text-lg">
            Sou um Software Developer apaixonado por criar aplicações web
            interativas e responsivas.Eu tenho experiência com JavaScript e
            estou sempre buscando aprender e utilizar novas tecnologias para
            aprimorar minhas habilidades. Trabalho com frameworks populares,
            como React.js e Next, e estou familiarizado com o desenvolvimento
            responsivo e a criação de interfaces amigáveis e intuitivas. Também
            tenho alguma experiência com o ambiente de desenvolvimento Node.js.
            Se você tiver uma oportunidade que se encaixe com minhas habilidades
            e experiência, não hesite em entrar em contato comigo. Estou ansioso
            para conhecer novos desafios e colaborar em projetos empolgantes.
          </p>
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)
              ? TAB_DATA.find((t) => t.id === tab)?.content
              : null}
          </div>
        </div>
      </div>
    </section>
  );
};
