 import React from 'react'
import DashBoard from './assets/components/DashBoard'
import UserDetail from './assets/components/UserDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
 
 const App = () => {
   return (
      <>

      

      <div className="">
           <Routes>
              <Route path='/' element={<DashBoard/>}/>
              <Route path='/userdetail' element={<UserDetail/>}/>
           </Routes>

      </div>
      
      </>

   )
 }
 
 export default App