import { Section } from "../components/Section"

export const NotFound = () => {
  return (
    <Section>
      <article className="flex flex-col items-center justify-center w-full gap-5 max-sm:gap-0">
        <h1 className="text-6xl font-bold tracking-wide dark:text-gray-50 max-md:text-3xl max-lg:text-5xl">
          404
        </h1>
        <p className="mb-4 text-2xl font-bold dark:text-gray-50 xl:mb-8 max-md:text-base max-lg:text-lg">
          Lo sentimos, la página que estás buscando no existe.
        </p>
      </article>
    </Section>
  )
}
