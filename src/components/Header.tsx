import { ThemeToggle } from "./ThemeToggle"
import { Menu } from '../assets/icons/Menu';
import { Dog } from "../assets/icons/Dog";
import { SideBar } from "./SideBar";
import { Link, Outlet } from "react-router-dom";
import { Login } from "./Login";
import { useState } from "react";

export const Header = () => {
  const [isLogin, setIsLogin] = useState(false)
  const navItems = [
    {
      title: "Mis mascotas",
      label: "mismascotas",
      url: "/my-pets",
    },
    {
      title: "Elegir mascota",
      label: "elegirmascota",
      url: "/choose-pets",
    },
    {
      title: "Acerca De",
      label: "acercade",
      url: "/about",
    },
  ]
  const onClickSidebar = () => {
    const sidebar = document.getElementById('drawer-navigation')
    const isFull = sidebar?.classList.contains('-translate-x-full')
    sidebar?.classList[isFull ? 'remove':'add']('-translate-x-full')
    const side = document.getElementById("drawer")
    const isHidden = side?.classList.contains('hidden')
    side?.classList[isHidden ? 'remove':'add']('hidden')
  }
  const onClickLogin = () => {
    setIsLogin(!isLogin)
  }

  return (
    <>
      <header className="bg-[#E9E9E7]/75 dark:bg-[#242424]/75 fixed top-0 z-10 flex items-center justify-between w-full px-4 px-auto py-3 max-sm:py-2">
        <Link to="/" className="w-2/12">
          <Dog className={"size-10 dark:text-gray-50 max-sm:size-8"} />
        </Link>
        <nav
          className="flex items-center justify-center w-10/12 px-3 text-xs font-medium text-gray-600 dark:text-gray-200 max-sm:hidden"
        >
          {
            navItems.map((link, index) => (
              <div key={link.title} className="flex items-center justify-center">
                <Link
                  className="relative px-4 py-2 uppercase border border-gray-900 rounded-md bg-gray-50 dark:bg-gray-950 dark:hover:text-gray-700 hover:text-gray-200 dark:hover:bg-gray-100 hover:bg-gray-900 dark:border-gray-50"
                  aria-label={link.label}
                  to={link.url}
                >
                  {link.title}
                </Link>
                {
                  index == navItems.length - 1 ?
                    ""
                    :
                    <span className="border-gray-900 bg-gray-50 dark:bg-gray-950 size-2 border-y dark:border-gray-50"></span>
                }
              </div>
            ))
          }
        </nav>
        <div className="flex items-center justify-end w-2/12 gap-2 text-sm font-medium">
          <ThemeToggle />
          <a 
            href="#" 
            className="relative px-3 py-2 text-gray-600 rounded-md sm:hidden bg-gray-50 dark:bg-[#030712] hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-gray-200"
            onClick={onClickSidebar}
          >
            <Menu />
          </a>
          <a 
            href="#"
            className="relative px-4 py-2 text-xs uppercase rounded-md max-sm:hidden dark:bg-gray-50 bg-gray-950 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900 dark:text-gray-950 text-gray-50"
            onClick={onClickLogin}
          >
            Acceder
          </a>
        </div>
      </header>

      <Outlet/>
      <SideBar navList={navItems} onClickSidebar={onClickSidebar} onClickLogin={onClickLogin}/>
      {isLogin && <Login onClickLogin={onClickLogin} />}

    </>
  )
}
