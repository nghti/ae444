import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/Component/Header'
import Content1 from './assets/Component/Content1'
import Content2 from './assets/Component/Content2'
import Footer1 from './assets/Component/Footer1'
import Footer2 from './assets/Component/Footer2'


function App() {
  
  return (
    <>
      <Header />
      <div className='mt-4 mb-6'>
      <Content1/>
      </div>
      <Content2/>
      <div className='mt-4'>
      <Footer1 />
      </div>
      <Footer2/>
    </>
  )
}

export default App
