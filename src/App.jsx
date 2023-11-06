import Main1 from './pages/main.jsx';
import Main2 from './pages/main2.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Outlet,
  Route
} from 'react-router-dom'
import { Footer } from 'antd/es/layout/layout.js';
import { Formu } from './pages/regitro2.jsx';
import Logins from './pages/registracion.jsx'
import Registro from './pages/cuenta.jsx';
import Viewer from './Component/vista/vista.jsx';



function App() {

  
  
  

  
  return (

    <Router >
      <Routes>
        <Route path='/' element={<Root />}>
          <Route index element={<Logins />} />
          {/* <Route index element={<Formu />} /> */}
          <Route path='/home' element={<Main1 />} />
          <Route path='/homeadmin' element={<Main2 />} />
          <Route path='/registro' element={<Registro />} />
          <Route path='/vista' element={<Viewer />} />

        </Route>
      </Routes>
    </Router>)
}

export default App

const Root = () =>
  <>
  
    <div>
      <Footer />
    </div>
    <div>
      <Outlet />
    </div>
  </>