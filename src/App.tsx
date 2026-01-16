import { Routes, Route } from 'react-router-dom'
import './App.css'
// import { Portfolio } from './pages/Portfolio'
import MainPage from './pages/Main_page'
import { Layout } from './components/Layout'

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
