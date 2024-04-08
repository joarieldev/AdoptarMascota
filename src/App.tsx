import './App.css'
import { Header } from './components/Header'


function App() {

  return (
    <>
      <div className='absolute z-[-2] bg-[#E9E9E7] dark:bg-[#242424] min-h-screen top-0 w-screen'></div>
      <Header/>
      <h1 className='text-3xl font-semibold text-center pt-14 dark:text-gray-50'>Hola Mundo!</h1>
    </>
  )
}

export default App
