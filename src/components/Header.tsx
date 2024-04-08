import { ThemeToggle } from "./ThemeToggle"
import { Menu } from '../assets/icons/Menu';
import { Dog } from "../assets/icons/Dog";
import { SideBar } from "./SideBar";

export const Header = () => {
  const navItems = [
    {
      title: "Mis mascotas",
      label: "mismascotas",
      url: "/#mismascotas",
    },
    {
      title: "Elegir mascota",
      label: "elegirmascota",
      url: "/#elegirmascota",
    },
    {
      title: "Random",
      label: "random",
      url: "/#random",
    },
    {
      title: "Acerca De Pets",
      label: "acercadepets",
      url: "/#acercadepets",
    },
  ]
  const onClickSidebar = () => {
    const sidebar = document.getElementById("drawer-navigation")
    sidebar?.classList.remove("-translate-x-full")
  }

  return (
    <>
      <header className="fixed top-0 z-10 flex items-center justify-between w-full px-4 mx-auto mt-3">
        <a href="#">
          <Dog className={"size-10 dark:text-gray-50 max-sm:size-8"} />
        </a>
        <nav
          className="flex items-center justify-center px-3 text-sm font-medium text-gray-600 dark:text-gray-200 max-sm:hidden"
        >
          {
            navItems.map((link, index) => (
              <div key={link.title} className="flex items-center justify-center">
                <a
                  className="relative px-4 py-2 uppercase rounded-md bg-gray-50 dark:bg-gray-950 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900"
                  aria-label={link.label}
                  href={link.url}
                >
                  {link.title}
                </a>
                {
                  index == navItems.length - 1 ?
                    ""
                    :
                    <span className="bg-gray-50 dark:bg-gray-950 size-2"></span>
                }
              </div>
            ))
          }
        </nav>
        <div className="flex items-center gap-2 text-sm font-medium">
          <ThemeToggle />
          <a 
            href="#" 
            className="sm:hidden relative px-3 py-2 rounded-md bg-gray-50 dark:bg-gray-950 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900  text-gray-600 dark:text-gray-200"
            onClick={onClickSidebar}
          >
            <Menu />
          </a>
          <a href="#" className="max-sm:hidden relative px-4 py-2 uppercase rounded-md bg-gray-50 dark:bg-gray-950 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-950 dark:text-gray-50">
            Acceder
          </a>
        </div>

      </header>

      <SideBar navList={navItems}/>

    </>
  )
}
