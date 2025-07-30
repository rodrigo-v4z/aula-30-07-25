import { useState } from 'react'
import './App.css'
import { Usuario } from './models/Usuario'

function App() {

  const [u1, setU1] = useState(() => new Usuario('João da Silva', 37, 'joao123'));
  const [senha, setSenha] = useState('');
  const [tentativa, setTentativa] = useState('');

  console.log(u1.apresentar());

  u1.nome = 'Jorge';

  return (
    <>
      <p>
        {u1.apresentar()}
      </p>
      <p>
        <input type="password" placeholder='Digite a senha' onChange={e => {setSenha(e.target.value)}} />
        <button onClick={() => {setTentativa(u1.verificarSenha(senha))}}>Enviar!</button>
      </p>
      <p>
        <button onClick={() => {u1.redefinirSenha(senha)}}>Redefinir Senha</button>
      </p>
      <p>
        {tentativa ? 'Senha correta!' : 'Senha incorreta!'}
      </p>
    </>
  )
}

export default App
