export const Section = ({ children }:{children: JSX.Element}) => {
  return (
    <section className="flex justify-center min-h-screen pt-14 dark:text-gray-50">
      <div className="flex w-[1280px] max-sm:block max-sm:px-2">
        {children}
      </div>
    </section>
  )
}
