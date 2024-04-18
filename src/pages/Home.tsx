import { Section } from '../components/Section'
import img2 from '../assets/pets2.webp'


export const Home = () => {
  return (
    <Section>
      <article className="flex justify-center items-center flex-col w-full gap-5 max-sm:gap-0">
        <h1 className="dark:text-gray-50 text-6xl font-bold max-md:text-3xl max-lg:text-5xl tracking-wide">
          ¡Adopta, salva vidas!
        </h1>
        <p className="dark:text-gray-50 text-3xl mb-4 font-bold xl:mb-8 max-md:text-base max-lg:text-xl">Encuentra a tu compañero fiel hoy mismo.</p>
        <img className='max-h-[300px] xl:max-h-[450px]' src={img2} alt='img pets' />
      </article>
    </Section>
  )
}
