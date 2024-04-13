import { Section } from "../components/Section"
import { Card } from '../components/Card';
import { PetWithId, getPets } from '../services/pets';
import { useEffect, useState } from "react";

export const ChoosePets = () => {
  const [pets, setPets] = useState<PetWithId[]>([])
  const listaMascotas = async () => {
    await getPets().then((data: PetWithId[]) => {
      setPets(data)
    }).catch(error => console.log(error))
  }
  useEffect(()=>{
    listaMascotas()
  },[])
  return (
    <Section>
      <>
        <article className="sm:p-6 p-2 mx-[8px] mt-10 rounded-lg sm:fixed sm:w-auto max-md:mt-2 bg-white/50 dark:bg-black/70">
          <h3 className="mb-4 text-lg text-center">Filtrar Mascota</h3>
          <form className="max-w-sm mx-auto">
            <label className="grid gap-2 mb-4 text-sm font-medium text-gray-900 dark:text-white">
              <span className="text-sm font-medium text-gray-900 dark:text-gray-300">Eliga una especie</span>
            
            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer">
              <option value="chos" className="p-4">Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            </label>

            <p className="pb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Color</p>
            <label className="inline-flex items-center mb-2 cursor-pointer me-3">
              <input type="checkbox" value="" className="sr-only peer"/>
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">Toggle me</span>
            </label>
            <label className="inline-flex items-center mb-4 cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">Checked toggle</span>
            </label>
            <p className="pb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Volumen</p>
            <label className="inline-flex items-center cursor-pointer me-3">
            <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <span className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">
                Checked state
              </span>
            </label>
            <label className="inline-flex items-center cursor-pointer">
            <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <span className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">
                Checked state
              </span>
            </label>
            <div className="flex justify-center py-4">
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
            </div>
          </form>


        </article>
        <article className="flex items-center justify-center w-auto mt-10 mb-2 sm:ml-[325px] max-md:mt-2">
          <div className="top-0 grid grid-cols-3 gap-4 px-6 max-md:flex max-md:flex-col max-lg:grid-cols-2">
            {
              pets.map((item) => (
                <Card key={item.id} pet={item}/>
              ))
            }
          </div>
        </article>
      </>
    </Section>
  )
}
