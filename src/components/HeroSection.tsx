import Image from "next/image";

export const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a2cf5] to-[#eb2a6a]">Olá! Eu sou {""}</div> Delano
          </h1>
          <p className="text-[#adb7be] text-base sm:text-lg mb-6 lg:text-xl">
            Sou desenvolvedor front-end e este é o meu site. Aqui você conhecerá
            minha jornada e projetos como Software Developer.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit  rounded-full mr-4 bg-gradient-to-br from-[#2196F3] via-[#9C27B0] to-[#E91E63] text-white ">
              Contrate-me
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <Image
            src="/hero/hero-image.png"
            width={500}
            height={500}
            alt="hero image"
          />
        </div>
      </div>
    </section>
  );
};
