import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { MyPets } from './pages/MyPets'
import { ChoosePets } from './pages/ChoosePets'
import { About } from './pages/About'


function App() {

  return (
    <>
      <div className='absolute z-[-2] bg-[#E9E9E7] dark:bg-[#242424] min-h-screen top-0 w-screen'></div>
      <Routes>
          <Route path='/' element={<Header/>}>
            <Route index element={<Home/>}/>
            <Route path='my-pets' element={<MyPets/>}/>
            <Route path='choose-pets' element={<ChoosePets/>}/>
            <Route path='about' element={<About/>}/>
          </Route>
      </Routes>
      <Header/>
    </>
  )
}

export default App
