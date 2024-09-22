import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { MyPets } from './pages/MyPets'
import { ChoosePets } from './pages/ChoosePets'
import { About } from './pages/About'
import { NotFound } from './pages/NotFound'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Header/>}>
          <Route index element={<Home/>}/>
          <Route path='my-pets' element={<MyPets/>}/>
          <Route path='choose-pets' element={<ChoosePets/>}/>
          <Route path='about' element={<About/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
