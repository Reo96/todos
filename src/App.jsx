import {Routes,Route} from 'react-router-dom'
import Home from './files/home'
import Login from './files/login.jsx'
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
    <Toaster/>
    <Routes>
      <Route path ='/' element ={
        <>
        <Home />
        </>
      }
      ></Route>
      <Route path ='/login' element={
        <Login/>
      }
      ></Route>
       
    </Routes>
    </>
  )
}

export default App
