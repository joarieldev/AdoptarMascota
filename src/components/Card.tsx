import { useContext, useEffect } from "react"
import { Photo } from "../assets/icons/Photo"
import { PetWithId } from "../services/pets"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { UserContext } from "../contexts/UserContext"
import { LoginContext } from "../contexts/LoginContext"

export const Card = ({pet, handleAdoptar}: {pet: PetWithId, handleAdoptar: (id: string)=>void}) => {
    const { currentUser, setCurrentUser } = useContext(UserContext)
    const { currentLogin, setCurrentLogin } = useContext(LoginContext)
    useEffect(() => {
        const userStored = localStorage.getItem('currentUser')
        if (userStored) {
            setCurrentUser(JSON.parse(userStored))
        }
    }, [])
  return (
    <div className="w-full max-w-sm bg-white/75 border border-gray-200 rounded-lg dark:bg-gray-800/50 dark:border-gray-700 h-[470px]">
      <div className="flex items-center justify-center">
        <div className="h-[289px] w-[289px]">
          <LazyLoadImage
            placeholder={
              <Photo className="w-full h-full p-24 text-gray-900 transition-all dark:text-gray-50" />
            }
            className="object-cover w-full h-full p-6 transition-all "
            src={`/src/mock/storagePets/${pet.foto}`}
            alt="foto mascota"
          />
        </div>
      </div>
      <div className="px-2 pb-4">
        <h5 className="text-xl font-semibold tracking-tight text-center text-gray-900 dark:text-white">
          {pet.nombre ? pet.nombre : '-'}
        </h5>
        <div className="flex justify-between mt-3.5 mb-6 px-4">
          <div className="text-center">
            <label className="block text-sm font-light ">Fecha de Nac:</label>
            <label className="block font-medium">{pet.fecha_nac}</label>
          </div>
          <div className="text-center">
            <label className="block text-sm font-light ">Color:</label>
            <label className="block font-medium">{pet.color}</label>
          </div>
        </div>
        <div className="flex items-center justify-center">
          {pet.adoptado ? (
            <p className="text-lg p-2.5 text-gray-900 dark:text-white">Adoptado</p>
          ) : currentUser.user ? (
            <button
              onClick={() => handleAdoptar(pet.id)}
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none shadow-md shadow-blue-500/50 dark:shadow-md dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Adoptar
            </button>
          ) : (
            <button
              onClick={() => {
                setCurrentLogin(!currentLogin)
              }}
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none shadow-md shadow-blue-500/50 dark:shadow-md dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Adoptar
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
