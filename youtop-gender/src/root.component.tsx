import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from "./components/slight/slight"

function Root() {
  return (
    <div>
      <Router>
        <div className="Root">
          <Menu />
          <br /><br />
          <div className='contenedorPrincipal'>
            <Routes>

            </Routes>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default Root