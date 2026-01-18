import { Routes, Route } from 'react-router-dom'
import './App.css'
// import { Portfolio } from './pages/Portfolio'
import MainPage from './pages/Main_page'
import { Layout } from './components/Layout'
import { Portfolio } from './pages/Portfolio'

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
