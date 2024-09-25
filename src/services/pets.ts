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
  id: string
}
export interface User {
  user: string
  password: string
}
export type Filter = null | ((pet: PetWithId)=>boolean)

const api = import.meta.env.VITE_API_URL

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

export const putPets = async (pet: PetWithId, list: Array<string>) => {
  const promise = () =>
    new Promise((resolve) => {
      const storage = localStorage.getItem('pets-adoptados')
      if(storage) {
        const data = JSON.parse(storage)
        data.push(pet)
        localStorage.setItem('pets-adoptados', JSON.stringify(data))
      }else{
        localStorage.setItem('pets-adoptados', JSON.stringify([pet]))
      }
      localStorage.setItem('adoptadoList', JSON.stringify(list))
      
      resolve(true)
    })
    return promise
}

export const deletePets = async (pet: PetWithId) => {
  const promise = () =>
    new Promise((resolve) => {
      const storage = localStorage.getItem('pets-adoptados')
      if(storage) {
        let data: PetWithId[] = JSON.parse(storage)
        data = data.filter(p => p.id !== pet.id)
        localStorage.setItem('pets-adoptados', JSON.stringify(data))
      }
      const storage2 = localStorage.getItem('adoptadoList')
      if (storage2) {
        let data: string[] = JSON.parse(storage2)
        data= data.filter(item => item !== pet.id)
        localStorage.setItem('adoptadoList', JSON.stringify(data))
      }
      
      resolve(true)
    })
    return promise
}

export const getAdoptadoList = () => {
  const storage = localStorage.getItem('adoptadoList')
  let array
  if (storage) {
    array = JSON.parse(storage)
  }
  return array
}

export const Especie = ["Gato","Perro","Ave","Conejo","Pez","Hamster","Reptil"]
export const Color = ["Marron","Blanco","Negro","Gris","Azul","Verde","Naranja","Rosa","Rojo"]
export const Volumen = ["Pequeño","Medio","Grande"]
export const UserDefault: User = {user:"jose", password:"jose123"}
export const Recordatorio = [
  {
    especie: "Gato",
    resumen: "Recuerda que tener un gato como mascota implica responsabilidad. Debes asegurarte de proporcionarle una alimentación adecuada, atención veterinaria regular y un entorno seguro y estimulante.",
  },
  {
    especie: "Perro",
    resumen: "Recuerda que tener un perro como mascota implica compromiso y dedicación. Debes asegurarte de tener el tiempo, los recursos y el espacio adecuados para cuidar de un perro de manera responsable.",
  },
  {
    especie: "Ave",
    resumen: "Recuerda que tener un ave como mascota implica responsabilidad y dedicación. Debes asegurarte de proporcionarles una alimentación adecuada, una jaula espaciosa y segura, y cuidados veterinarios regulares.",
  },
  {
    especie: "Conejo",
    resumen: "Recuerda que tener un conejo como mascota requiere compromiso y responsabilidad. Debes asegurarte de proporcionarles una dieta adecuada, atención veterinaria regular y un entorno seguro y estimulante. Además, es importante dedicar tiempo a interactuar y socializar con tu conejo para mantener su bienestar emocional.",
  },
  {
    especie: "Pez",
    resumen: "Recuerda que tener peces como mascotas implica responsabilidad. Debes asegurarte de proporcionarles un acuario adecuado, agua limpia y una alimentación equilibrada.",
  },
  {
    especie: "Hamster",
    resumen: "Recuerda que tener un hámster como mascota implica responsabilidad. Debes asegurarte de proporcionarles una alimentación adecuada, agua fresca, una jaula limpia y segura, y cuidados veterinarios regulares. También es importante dedicar tiempo a interactuar y socializar con tu hámster para mantener su bienestar emocional.",
  },
  {
    especie: "Reptil",
    resumen: "Recuerda que tener un reptil como mascota implica responsabilidad. Debes asegurarte de proporcionarles un hábitat adecuado, alimentación equilibrada y cuidados veterinarios regulares.",
  },
]
