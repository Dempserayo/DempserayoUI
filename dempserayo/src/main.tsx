import React from 'react'
import ReactDOM from 'react-dom/client'
import { Button } from './index'
import './index.css'
import Navbar from './Navbar/navbar'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="flex flex-col gap-4 p-10">
          <Navbar variant="primary" />
          <Navbar variant="light" />
          <Navbar variant="central_variante_1" />

          
          <div className='flex flex-row gap-2'>
            <Button variant="primary">Click me</Button>
            <Button variant="neutral">Enviar</Button>
            <Button variant="outline">Cancelar</Button>
          </div>
    </div>
  </React.StrictMode>,
)
