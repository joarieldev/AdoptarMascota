export interface Pet {
  nombre: string
  especie: string
  volumen: string
  fecha_nac: string
  color: string
  foto: string
  adoptado: boolean
}
export interface PetWithId extends Pet {
  id: number
}

const api = import.meta.env.VITE_API_URL
export const cloudStorage = import.meta.env.VITE_CLOUD_STORAGE

export const getPets = async () => {
  const response = await fetch(`${api}/pets`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
  if (!response.ok) {
    throw new Error("Failed to fetch pets.")
  }
  const json = await response.json()
  return json

}

export const Especie = ["Gato","Perro","Ave","Conejo","Pez","Hamster","Reptil"]
export const Color = ["Marron","Blanco","Negro","Gris","Azul","Verde","Naranja","Rosa","Rojo"]
export const Volumen = ["Pequeño","Medio","Grande"]
export const User = {user:"jose", password:"jose123"}
