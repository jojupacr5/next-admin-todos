import Image from "next/image"
import Link from "next/link"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

import { CiLogout } from "react-icons/ci"
import { IoBasketOutline, IoCalendarOutline, IoCheckboxOutline, IoCopySharp, IoListOutline, IoPersonOutline } from "react-icons/io5"
import { SidebarItem } from "./SidebarItem"
import { LogoutButton } from "./LogoutButton"


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
  {
    path: '/dashboard/profile',
    icon: <IoPersonOutline size={30} />,
    title: 'Perfil'
  },
]

export const Sidebar = async  () => {
  const session = await getServerSession(authOptions);
  const avatarUrl = (session?.user?.image) 
    ? session.user.image
    : 'https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp';
  const userName = session?.user?.name ?? 'No name'

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
            src={ avatarUrl }
            alt="Avatar" 
            className="m-auto rounded-full object-cover"
            width={80}
            height={80}
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{ userName }</h5>
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
        <LogoutButton />
      </div>
    </aside>
  )
}