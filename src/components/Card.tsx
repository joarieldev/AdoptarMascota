import { Photo } from "../assets/icons/Photo"
import { PetWithId, cloudStorage } from "../services/pets"
import { LazyLoadImage } from 'react-lazy-load-image-component'

export const Card = ({pet}: {pet: PetWithId}) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[470px]">
        <div className="flex justify-center items-center">
            <div className="h-[289px] w-[289px]">
                <LazyLoadImage 
                    placeholder={<Photo className="transition-all w-full h-full p-24 dark:text-gray-50 text-gray-900"/>} className=" transition-all p-6 h-full w-full object-cover" 
                    src={`${cloudStorage}/${pet.foto}`} 
                    alt="foto mascota" 
                />
            </div>
        </div>
        <div className="px-2 pb-4">
            <h5 className="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
                {pet.nombre ? pet.nombre : '-'}
            </h5>
            <div className="flex justify-between mt-3.5 mb-6 px-4">
                <div className="text-center">
                    <label className=" block text-sm font-light">Fecha de Nac:</label> 
                    <label className="block font-medium">{pet.fecha_nac}</label>
                </div>
                <div className="text-center">
                    <label className=" block text-sm font-light">Color:</label> 
                    <label className="block font-medium">{pet.color}</label>
                </div>
            </div>
            <div className="flex justify-center">
                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Adoptar</a>
            </div>
        </div>
    </div>
  )
}
