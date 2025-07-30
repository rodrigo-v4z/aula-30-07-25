import { useState } from 'react'
import './App.css'
import { Usuario } from './models/Usuario'

function App() {

  const u1 = new Usuario('João da Silva', 37);

  console.log(u1.apresentar());

  return (
    <>
      <p>
        {u1.idade} anos
      </p>
    </>
  )
}

export default App
