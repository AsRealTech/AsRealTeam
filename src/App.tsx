import { Routes, Route } from 'react-router-dom'
import './App.css'
import MainPage from './pages/Main_page'
import { Layout } from './components/Layout'
import { Portfolio } from './pages/Portfolio'
import { ProjectsPage } from './pages/Projects'

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={
            <div className="page-transition">
              <MainPage />
            </div>
          } />
          <Route path='/portfolio' element={
            <div className="page-transition">
              <Portfolio />
            </div>
          } />
          <Route path='/projects' element={
            <div className="page-transition">
              <ProjectsPage />
            </div>
          } />
        </Route>
      </Routes>
    </>
  )
}

export default App
