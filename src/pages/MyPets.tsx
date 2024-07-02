import { useContext, useEffect, useState } from 'react';
import { Section } from '../components/Section';
import { PetWithId, Recordatorio } from '../services/pets';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { LoginContext } from '../contexts/LoginContext';

export const MyPets = () => {
  const [pets, setPets] = useState<PetWithId[]>([]);
  const [index, setIndex] = useState(0);

  const handleIndex = (i: number) => {
    setIndex(i)
  }
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const { currentLogin, setCurrentLogin } = useContext(LoginContext)

  useEffect(() => {
    const storage=localStorage.getItem('pets-adoptados')
    if (storage) {
      setPets(JSON.parse(storage))
    }
    const userStored = localStorage.getItem('currentUser')
    if (userStored) {
        setCurrentUser(JSON.parse(userStored))
    }
  }, []);

  return (
    <Section>
      <article className="flex flex-col items-center justify-center w-full gap-2 p-2 max-sm:gap-0">
        {
          !currentUser.user ? (
            <>
              <p className="mb-4 text-xl font-bold dark:text-gray-50 xl:mb-8 max-md:text-base max-lg:text-lg">Inicia Sesion para ver tus mascotas.</p>
              <button
                className="relative px-4 py-2 text-xs uppercase rounded-md max-sm:hidden dark:bg-gray-50 bg-gray-950 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900 dark:text-gray-950 text-gray-50"
                onClick={() => {
                  setCurrentLogin(!currentLogin)
                }}
              >
                Acceder
              </button>
            </>
          ):(
            <>            
              {
                pets.length === 0  && (
                  <>
                    <h1 className="text-3xl font-bold tracking-wide dark:text-gray-50 max-md:text-xl max-lg:text-2xl">
                      Aqui se mostraran tus mascotas
                    </h1>
                    <p className="mb-4 text-xl font-bold dark:text-gray-50 xl:mb-8 max-md:text-base max-lg:text-lg">Aun no adoptaste a ninguna mascota!.</p>
                    <Link to="/choose-pets" className='hover:underline' >Adoptar</Link>
                  </>
                )
              }
              {
                pets.length !== 0 && (
                  <>            
                    <div className="absolute inset-0 z-0 items-center w-full h-full">
                      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_300px,#c5c5c5,transparent)] dark:bg-[radial-gradient(circle_500px_at_50%_300px,#3e3e3e,transparent)]">
                      </div>
                    </div>
                    <div className='flex flex-col items-center w-full h-full md:flex-row z-[1]'>
                      <div className='flex flex-col items-center justify-center w-full h-full gap-2 p-2'>
                        <h3 className='text-xl text-gray-900 dark:text-white max-md:text-lg'>{pets[index]?.nombre === ''? '-':pets[index]?.nombre}</h3>
                        <p className='text-sm text-gray-900 dark:text-white'>Nacio el {pets[index]?.fecha_nac}, tiene un pelaje de color {pets[index]?.color} y es de tamaño {pets[index]?.volumen}.</p>
                      </div>
                      <div className='w-full h-[50%] md:h-[400px] 2xl:h-[550px]'>
                        <img src={`/src/mock/storagePets/${pets[index]?.foto}`} alt={pets[index]?.nombre} className='object-cover w-full h-full' />
                      </div>
                      <div className='flex items-center justify-center w-full h-full p-2'>
                        {Recordatorio.map((item,i) => (
                          <p key={i} className='text-base text-gray-900 dark:text-white'>
                            {pets[index]?.especie === item.especie ? item.resumen:''}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className='flex justify-center w-full z-[1]'>
                      <div className='flex w-full max-w-screen-md gap-2 p-2 pb-4'>
                        {
                          pets.map((pet,index) => (
                            <button onClick={()=>handleIndex(index)} key={pet.id} className='w-32 h-24 hover:scale-105'>
                              <img src={`/src/mock/storagePets/${pet.foto}`} alt={pet.nombre} className='object-cover w-full h-full' />
                            </button>
                          ))
                        }
                      </div>
                    </div>
                  </>
                )
              }
            </>
          )
        }
      </article>
    </Section>
  )
}
