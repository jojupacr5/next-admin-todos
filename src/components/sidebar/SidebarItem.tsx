'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  icon: JSX.Element;
  title: string;
}

export const SidebarItem = ({path, title, icon}: Props) => {
  const currentPath = usePathname();
  return (
    <li>
      <Link 
        href={path} 
        className={
          `relative px-4 py-3 flex items-center space-x-4 rounded-xl
          ${ currentPath === path ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400" : ""}`
        }
      >
        { icon }
        <span className="-mr-1 font-medium">{ title }</span>
      </Link>
    </li>
  )
}