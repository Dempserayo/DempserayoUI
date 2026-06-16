import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './moleculas/Navbar/navbar'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="flex flex-col justify-center items-center p-10 gap-4 ">
      <Navbar variant="light" />
      <Navbar variant="variante_1" />
      <Navbar variant="variante_2" />
      <Navbar variant="variante_3" />
      <Navbar variant="variante_4" />
      <Navbar variant="variante_5" />
      {/* <Navbar variant="central_variante_1" /> */}
    </div>
  </React.StrictMode>,
)
