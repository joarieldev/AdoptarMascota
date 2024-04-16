import { Section } from "../components/Section"
import { Card } from '../components/Card';
import { Color, Especie, PetWithId, Volumen, getPets } from '../services/pets';
import { useEffect, useState } from "react";
import { Spinner } from "../assets/icons/Spinner";

export const ChoosePets = () => {
  const [pets, setPets] = useState<PetWithId[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [formu, setFormu] = useState({ especie: '', color: '', volumen: '' })
  const [filter, setFilter] = useState<PetWithId[]>([])

  const listaMascotas = async () => {
    setIsLoading(true)
    await getPets()
      .then((data: PetWithId[]) => {
        setPets(data)
        setFilter(data)
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (formu.especie !== '' || formu.color !== '' || formu.volumen !== '') {
      let filtrado: PetWithId[] = []
      if (formu.especie || formu.color || formu.volumen)
        filtrado = pets.filter(pet => pet.especie == formu.especie || pet.color == formu.color || pet.volumen == formu.volumen)
      if (formu.especie && formu.color)
        filtrado = pets.filter(pet => pet.especie == formu.especie && pet.color == formu.color)
      if (formu.especie && formu.volumen)
        filtrado = pets.filter(pet => pet.especie == formu.especie && pet.volumen == formu.volumen)
      if (formu.especie && formu.color && formu.volumen) 
        filtrado = pets.filter(pet => pet.especie == formu.especie && pet.color == formu.color && pet.volumen == formu.volumen)
      if (formu.color && formu.volumen && !formu.especie) 
        filtrado = pets.filter(pet => pet.color == formu.color && pet.volumen == formu.volumen)
      setFilter(filtrado)
    }else {
      setFilter(pets)
    }    
  }

  const handleChange = (event) => {
    setFormu({ ...formu, [event.target.name]: event.target.value })
  }

  useEffect(() => {
    listaMascotas()
  }, [])
  return (
    <Section>
      <>
        <article className="sm:p-6 p-2 mx-[8px] mt-10 rounded-lg sm:fixed sm:w-auto max-md:mt-2 bg-white/50 dark:bg-black/70">
          <h3 className="mb-4 text-lg text-center">Filtrar Mascota</h3>
          <form onSubmit={handleSubmit} className="max-w-sm mx-auto w-[270px] max-sm:w-auto">
            <label className="grid gap-2 mb-4 text-sm font-medium text-gray-900 dark:text-white">
              <span className="text-sm font-medium text-gray-900 dark:text-gray-300">Eliga una especie</span>

              <select name="especie" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer" onChange={handleChange}>
                <option value={''} >Ninguno</option>
                {
                  Especie.map(item => (
                    <option value={item} key={item}>{item}</option>
                  ))
                }
              </select>
            </label>
            <label className="grid gap-2 mb-4 text-sm font-medium text-gray-900 dark:text-white">
              <span className="text-sm font-medium text-gray-900 dark:text-gray-300">Color</span>

              <select name="color" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer" onChange={handleChange}>
                <option value={''}>Ninguno</option>
                {
                  Color.map(item => (
                    <option value={item} key={item}>{item}</option>
                  ))
                }
              </select>
            </label>
            <label className="grid gap-2 mb-4 text-sm font-medium text-gray-900 dark:text-white">
              <span className="text-sm font-medium text-gray-900 dark:text-gray-300">Volumen</span>

              <select name="volumen" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer" onChange={handleChange}>
                <option value={''}>Ninguno</option>
                {
                  Volumen.map(item => (
                    <option value={item} key={item}>{item}</option>
                  ))
                }
              </select>
            </label>
            <div className="flex justify-center py-4">
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buscar</button>
            </div>
          </form>
        </article>
        <article className="flex justify-center mt-10 mb-2 sm:ml-[325px] max-md:mt-2 w-full">
          {isLoading && (
            <Spinner/>
          )}
          <div className="top-0 grid grid-cols-3 gap-4 px-6 max-sm:px-0 max-md:flex max-md:flex-col max-lg:grid-cols-2">
            { filter.length === 0 && !isLoading ?
              <p className="text-lg">Sin Resultados</p>
              :
              filter.map((item) => (
                <Card key={item.id} pet={item} />
              ))
            }
          </div>
        </article>
      </>
    </Section>
  )
}
