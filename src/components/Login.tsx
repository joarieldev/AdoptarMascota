import { useContext, useState } from "react";
import { X } from "../assets/icons/X"
import { UserDefault } from "../services/pets";
import { UserContext } from "../contexts/UserContext";

export const Login = ({onClickLogin}: {onClickLogin: ()=>void}) => {
  const [data, setData] = useState({ user: '', password: ''})
  const { setCurrentUser } = useContext(UserContext)
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    if (data) {
      const login = data.user === UserDefault.user && data.password === UserDefault.password
      if (login) {
        localStorage.setItem('currentUser', JSON.stringify(data))
        setCurrentUser(data)
      }
      alert(login ? '¡Bienvenido!':'Usuario no encontrado')
      onClickLogin()
    }
  }
  const handleChange = (event: { target: { name: string; value: string; }; }) => {
    setData({ ...data, [event.target.name]: event.target.value })
  }
  return (
    <>
    <div id="authentication-modal" className="fixed top-0 right-0 left-0 z-40 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full bg-black/70" onClick={onClickLogin}></div> 
    <article className="absolute left-[30%] right-[30%] max-sm:left-[10%] max-sm:right-[10%] max-sm:top-[10%] max-md:top-[15%] md:top-[15%] z-50 xl:top-[25%] xl:left-[40%] xl:right-[40%]">
      <div className="flex items-center justify-center">
        <div className="relative w-full max-h-full">
            <div className="relative bg-[#E9E9E7] rounded-lg shadow dark:bg-gray-950">
                <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5 dark:border-gray-800">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Iniciar Secion
                  </h3>
                  <button onClick={onClickLogin} type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                    <X />
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-8 md:p-9">
                  <form onSubmit={handleSubmit} className="space-y-5" action="#">
                    <div>
                      <label htmlFor="user" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
                      <input onChange={handleChange} type="text" id="user" name="user" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="juan, william32" required />
                    </div>
                    <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                      <input onChange={handleChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div>
                      <button type="submit" className="w-full uppercase dark:bg-gray-50 bg-gray-950 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 dark:text-gray-950 text-gray-50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-3">Iniciar</button>
                    </div>
                  </form>
                </div>
            </div>
        </div>
      </div>
    </article>
  </>
  )
}
