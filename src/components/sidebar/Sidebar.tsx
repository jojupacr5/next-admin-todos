import Image from "next/image"
import Link from "next/link"
import { CiLogout } from "react-icons/ci"
import { IoBasketOutline, IoCalendarOutline, IoCheckboxOutline, IoCopySharp, IoListOutline } from "react-icons/io5"
import { SidebarItem } from "./SidebarItem"

const sidebarItem = [
  {
    path: '/dashboard',
    icon: <IoCalendarOutline size={30} />,
    title: 'Dashboard'
  },
  {
    path: '/dashboard/rest-todos',
    icon: <IoCheckboxOutline size={30} />,
    title: 'Rest ToDos'
  },
  {
    path: '/dashboard/server-todos',
    icon: <IoListOutline size={30} />,
    title: 'Server Actions'
  },
  {
    path: '/dashboard/cookies',
    icon: <IoCopySharp size={30} />,
    title: 'Cookies'
  },
  {
    path: '/dashboard/products',
    icon: <IoBasketOutline size={30} />,
    title: 'Productos'
  },
]

export const Sidebar = () => {
  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          <Link href="/dashboard" title="home">
            <Image 
              src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg" 
              width={150}
              height={70} 
              alt="tailus logo"
              />
          </Link>
        </div>

        <div className="mt-8 text-center">
          <Image 
            src="https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp" 
            alt="Avatar" 
            className="m-auto rounded-full object-cover"
            width={80}
            height={80}
          />
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">Cynthia J. Watts</h5>
            <span className="hidden text-gray-400 lg:block">Admin</span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          {
            sidebarItem.map( item => (
              <SidebarItem key={item.path} {...item} />
            ))
          }
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
          <CiLogout />
          <span className="group-hover:text-gray-700">Logout</span>
        </button>
      </div>
    </aside>
  )
}