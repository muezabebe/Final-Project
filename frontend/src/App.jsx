import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {pages} from './pages/page'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <NavBar/>
      <SearchBar/>
      <Routes>
        <Route path ="/" element ={<pages.Home/>}/>
        <Route path ='/collection' element ={<pages.Collection/>}/>
        <Route path ='/about' element ={<pages.About/>}/>
        <Route path ='/contact' element ={<pages.Contact/>}/>
        <Route path ='/product/:productId' element ={<pages.Product/>}/>
        <Route path ='/cart' element ={<pages.Cart/>}/>
        <Route path ='/login' element ={<pages.Login/>}/>
        <Route path ='/placeorder' element ={<pages.PlaceOrder/>}/>
        <Route path ='/orders' element ={<pages.Orders/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App