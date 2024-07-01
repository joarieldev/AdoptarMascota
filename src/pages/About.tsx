import { Section } from '../components/Section'
import img from '../assets/pets1.jpg'

export const About = () => {
  return (
    <Section>
        <article className='flex flex-col items-center justify-center w-full gap-5'>
          <p className='dark:text-gray-50 md:w-[510px] text-pretty font-thin text-center max-md:text-base text-lg xl:text-xl max-sm:px-1 pt-1'>
            <span className='block font-medium tracking-wide'>¡Adopta una mascota y cambia su vida para siempre!</span>
            <span className='block'>
              Las mascotas son seres maravillosos que nos brindan amor incondicional y alegría en nuestras vidas. Si estás pensando en agregar un nuevo miembro peludo a tu familia, la adopción es una opción maravillosa y gratificante.
            </span>
          </p>
          <img src={img} className='max-h-[300px] xl:max-h-[450px]' alt="img pets" />
        </article>
    </Section>
  )
}
