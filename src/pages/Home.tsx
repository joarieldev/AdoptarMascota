import { Section } from '../components/Section'
import img from '../assets/pets2.webp'

export const Home = () => {
  return (
    <Section>
      <article className="flex flex-col items-center justify-center w-full gap-5 max-sm:gap-0">
        <h1 className="text-6xl font-bold tracking-wide dark:text-gray-50 max-md:text-3xl max-lg:text-5xl">
          ¡Adopta, salva vidas!
        </h1>
        <p className="mb-4 text-3xl font-bold dark:text-gray-50 xl:mb-8 max-md:text-base max-lg:text-xl">Encuentra a tu compañero fiel hoy mismo.</p>
        <img className='max-h-[300px] xl:max-h-[450px]' src={img} alt='img pets' />
      </article>
    </Section>
  )
}
