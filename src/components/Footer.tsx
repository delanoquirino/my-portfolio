import Image from "next/image"


export const Footer = () => {
  return (
    <footer className="border z-10 border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white">
    <div className="container p-12 flex justify-between">
      <span><Image src="/logo.png"  width={50}
              height={50}
              alt="logo notbook"/></span>
      <p className="text-slate-600"> Copyright &copy; 2023. Todos os direitos reservados.</p>
    </div>
  </footer>
  )
}
