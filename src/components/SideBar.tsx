import { X } from "../assets/icons/X"
import { User } from "../services/pets";

export interface NavList {
  title: string;
  label: string;
  url: string;
}
export const SideBar = ({ navList, onClickSidebar, onClickLogin, onClickSignOut, currentUser }: { navList: NavList[], onClickSidebar: ()=>void, onClickLogin: ()=>void, onClickSignOut: ()=>void, currentUser: User}) => {

  return (
    <>
      <div id="drawer" className="hidden fixed top-0 right-0 left-0 z-40 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full bg-black/70" onClick={onClickSidebar}>
      </div> 
      <div id="drawer-navigation" className="fixed top-0 left-0 z-50 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-[#E9E9E7] dark:bg-gray-950 ">
        <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-md text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={onClickSidebar}
        >
          <X />
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 text-sm font-medium uppercase">
            {
              navList.map((link) => (
                <li key={link.title}>
                  <a
                    className="flex items-center justify-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    href={link.url}
                    aria-label={link.label}
                  >
                    {link.title}
                  </a>
                </li>
              ))
            }
            {!currentUser.user && (
              <li onClick={onClickSidebar}>
                <a 
                  href="#"
                  className="flex items-center justify-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  onClick={onClickLogin}
                >
                  Acceder
                </a>
              </li>
            )}
            {currentUser.user && (
              <li onClick={onClickSidebar}>
                <a 
                  href="#"
                  className="flex items-center justify-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  onClick={onClickSignOut}
                >
                  Salir
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  )
}
