import { useState } from 'react';
import './App.css';
import logo from './logo-doom.png'

function App() {
  // Permite adicionar estado ao componente (monitorar mudanças no conteúdo).
  const [usuario,setUsuario] = useState('')
  const [usuarios,setUsuarios] = useState([])
  const [mensagem,setMensagem] = useState('')

  const adicionarUsuario = () => {
    // Remove espaços em branco
    const usuarioTrimado = usuario.trim()

    if(usuarioTrimado === ''){
      setMensagem('Nome de usuário não pode estar em branco.')
      setTimeout(()=> {
        setMensagem('')
      },3000)
      return
    }

    // Verificando se o novo usuário já existe na lista.
    if(usuarios.includes(usuario)||usuarios.includes(usuarioTrimado)){
      setMensagem('Usuário já existente na lista.')
      setTimeout(()=> {
        setMensagem('')
      },3000)
      return
    }

    setUsuarios([...usuarios,usuario]) // Adiciona um novo usuário na lista.
    setUsuario('') // Limpa o campo de entrada.

    setMensagem('Usuário adicionado com sucesso!')

    setTimeout(()=> {
      setMensagem('')
    },2000)

  }

  return (
    <div className='App'>
      <img className='logo' src={logo} alt='Logo'/>
      <hr/>
      <h2>Adicionar usuário</h2>
      <input
        type = 'text'
        placeholder='Digite o nome do usuário'
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        onKeyDown={(e) => {
          if(e.key === 'Enter'){
            adicionarUsuario()
          }
        }}
        />

      <button onClick={adicionarUsuario}>Adicionar</button>

      {mensagem && <p style={{color:'white'}}>{mensagem}</p>}

      <hr/>
      <h2>Lista de usuários</h2>
      <ol>{usuarios.map((usuario,index) => (
        <li key={index}>{usuario}</li>
      ))}</ol>
    </div>
  );
}

export default App;
