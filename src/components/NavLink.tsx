import Link from 'next/link'


interface NavLinkProps {
    href: string,
    title: string
}

export const NavLink = ({href,title}:NavLinkProps) => {
  return (
    <Link href={href} className="block py-2 pl-3 pr-4 text-gray-300 sm:text-xl rounded md:p-0 hover:text-cyan-500">{title}</Link>
          
  )
}
