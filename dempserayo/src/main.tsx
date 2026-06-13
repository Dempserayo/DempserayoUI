import React from 'react'
import ReactDOM from 'react-dom/client'
import { Button } from './index'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="flex flex-col gap-8 p-10">
          <div className='flex flex-row gap-2'>
            <Button variant="primary">Click me</Button>
            <Button variant="secondary">Enviar</Button>
            <Button variant="outline">Cancelar</Button>
          </div>
    </div>
  </React.StrictMode>,
)
