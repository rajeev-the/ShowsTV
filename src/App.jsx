import {useState,React} from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Home from './Components/Home'
import Page from './Components/Page'

const App = () => {
 
  const [newdata, setnewdata] = useState("");
  const [newname, setname] = useState("");

  const Data = (e,b) => {
    setnewdata(e);
    setname(b)
  };
  
  return (
   
    
    <BrowserRouter>
    
    <Routes>


       <Route  path='/' element={<Home func={Data}  />} />
       <Route  path='/page' element={<Page data={newdata }  name = {newname}  />} />


      
    </Routes>
    
    
    
    </BrowserRouter>
    
    
    
  
   
  )
}

export default App
