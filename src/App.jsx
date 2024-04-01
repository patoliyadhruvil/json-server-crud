import { Route, Routes } from 'react-router-dom'
import './App.css'
import CreateForm from './components/CreteForm/CreateForm'

import Header from './components/Header/Header'
import UpdateForm from './components/UpdateForm/UpdateForm'
import View from './components/EditForm/view'

function App() {


  return (  
    <>
      <Header/>
      <Routes>
        <Route path='/' element={ <CreateForm/>}/>
        <Route path='Update' element={  <UpdateForm/>}/>
        <Route path='/View' element={   <View/>}/>
      </Routes>
    </>
  )
}

export default App
