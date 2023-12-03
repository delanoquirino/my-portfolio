import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const FormSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Vamos conversa!</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Meu e-mail e redes sociais  estão sempre pronta para receber suas
          perguntas, propostas ou apenas um simples oi. Se há algo que possa interessar a
          você ou se precisar de algum serviço específico, ficarei feliz em
          discutir como posso atender às suas necessidades.
        </p>

        <div className="socials flex flex-row gap-6">
            
          <Link className="text-sky-500 text-lg transition duration-300 ease-in-out scale-125 hover:scale-150 hover:brightness-125" href="https://github.com/delanoquirino" target="_blank">
            <FaGithub size={30} />
          </Link>
          <Link className="text-sky-500 text-lg transition duration-300 ease-in-out scale-125 hover:scale-150 hover:brightness-125" href="https://www.linkedin.com/in/delanoquirino/" target="_blank">
            <FaLinkedin size={30}/>
          </Link>
        </div>
      </div>
      <div>
        <form
          action="https://getform.io/f/346fd422-917a-4f04-ad2d-91aa9d4498c0"
          method="POST"
          className="flex flex-col"
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Seu email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="name@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="text-white block text-sm mb-2 font-medium"
            >
              Nome
            </label>
            <input
              name="name"
              type="text"
              id="name"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Escreva seu nome"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Mensagem
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Escreva sua mensagem"
            />
          </div>
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
};
