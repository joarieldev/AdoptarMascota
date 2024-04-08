import { X } from "../assets/icons/X"

export interface NavList {
  title: string;
  label: string;
  url: string;
}
export const SideBar = ({ navList }: { navList: NavList[]}) => {
  const onClickCloseSidebar = () => {
    const sidebar = document.getElementById("drawer-navigation")
    sidebar?.classList.add("-translate-x-full")
  }
  return (
    <div id="drawer-navigation" className="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-gray-50 dark:bg-gray-950">
      <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
      <button
        type="button"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-md text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        onClick={onClickCloseSidebar}
      >
        <X />
        <span className="sr-only">Close menu</span>
      </button>
      <div className="py-4 overflow-y-auto">
        <ul className="space-y-2 text-sm font-medium uppercase">
          {
            navList.map((link) => (
              <a
                key={link.title}
                className="flex items-center justify-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                href={link.url}
                aria-label={link.label}
              >
                {link.title}
              </a>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
