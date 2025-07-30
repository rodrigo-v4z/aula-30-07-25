import { useState } from 'react'
import './App.css'
import { Usuario } from './models/Usuario'

function App() {

  const u1 = new Usuario('João da Silva', 37, 'joao123');
  const u2 = new Usuario('Maria Oliveira', 25, 'maria456');
  const [tentativa, setTentativa] = useState('');

  console.log(u1.apresentar());

  u1.nome = 'Jorge';

  return (
    <>
      <p>
        {u1.apresentar()}
      </p>
      <p>
        {u2.apresentar()}
      </p>
      <p>
        <input type="password" placeholder='Digite a senha' onChange={e => {setTentativa(e.target.value)}} />
      </p>
      <p>
        {u1.verificarSenha(tentativa) ? 'Senha correta!' : 'Senha incorreta!'}
      </p>
    </>
  )
}

export default App
