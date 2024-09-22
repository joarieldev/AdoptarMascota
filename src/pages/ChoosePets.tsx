import { Section } from "../components/Section"
import { Card } from '../components/Card';
import { Color, Especie, Filter, PetWithId, Volumen, getPets, putPets, getAdoptadoList } from '../services/pets';
import { useEffect, useMemo, useState } from "react";
import { Spinner } from "../assets/icons/Spinner";
import { Toaster, toast } from 'sonner'
import { useQuery } from "@tanstack/react-query";

export const ChoosePets = () => {
  const { isLoading, data: pets = [] } = useQuery<PetWithId[]>({
    queryKey: ['queryPets'],
    queryFn: async () => await getPets()
  })

  const [formu, setFormu] = useState({ especie: '', color: '', volumen: '' })
  const [filters, setFilters] = useState<Record<string, Filter>>({
    especie: null,
    color: null,
    volumen: null,
  })
  const [adoptadoList, setAdoptadoList] = useState<Set<PetWithId['id']>>(new Set())

  const matches = useMemo(()=>{
    const filtersToApply = Object.values(filters).filter(Boolean)
    let matches = pets
    for (const filter of filtersToApply) {
      matches = matches.filter(filter!)
    }
    return matches
  },[pets, filters])

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    const filterEspecie: Filter = formu.especie ? (pet) => pet.especie === formu.especie : null
    setFilters((filters) => ({ ...filters, especie: filterEspecie }))
    const filterColor: Filter = formu.color ? (pet) => pet.color === formu.color : null
    setFilters((filters) => ({ ...filters, color: filterColor }))
    const filterVolumen: Filter = formu.volumen ? (pet) => pet.volumen === formu.volumen : null
    setFilters((filters) => ({ ...filters, volumen: filterVolumen }))
  }

  const handleChange = (event: { target: { name: string; value: string; }; }) => {
    setFormu({ ...formu, [event.target.name]: event.target.value })
  }

  const handleAdoptar = async (pet: PetWithId) => {
    const draft = structuredClone(adoptadoList)
    draft.add(pet.id)
    setAdoptadoList(draft)
    const array = Array.from(draft)

    const res = await putPets(pet, array)

    toast.promise(res, {
      loading: 'Cargando...',
      success: () => {
        return `Exito! Has adoptado una mascota`
      },
      error: 'Error',
    })
  }

  useEffect(()=>{
    const res = getAdoptadoList()
    const set = new Set<PetWithId['id']>(res)
    setAdoptadoList(set)
  },[])

  return (
    <Section>
      <>
        <Toaster position="bottom-right" />
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
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">Buscar</button>
            </div>
          </form>
        </article>
        <article className="flex justify-center mt-10 mb-2 sm:ml-[325px] max-md:mt-2 w-full">
          {isLoading && (
            <Spinner/>
          )}
          <div className="top-0 grid grid-cols-3 gap-4 px-6 max-sm:px-0 max-md:flex max-md:flex-col max-lg:grid-cols-2">
            { matches.length === 0 && !isLoading ?
              <p className="text-lg">Sin Resultados</p>
              :
              matches.map((item) => (
                <Card key={item.id} pet={item} handleAdoptar={handleAdoptar} adoptadoList={adoptadoList}/>
              ))
            }
          </div>
        </article>
      </>
    </Section>
  )
}
