import './App.css'
import Carta from './components/Carta'

const carta = {
  titulo: 'Olá, mundo!',
  conteudo: 'Essa é uma carta.'
}

function App() {

  return (
    <div className="App">
      <Carta titulo={carta.titulo} conteudo={carta.conteudo} />
    </div>
  )
}

export default App
