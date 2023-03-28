import './App.css'
import Lista from './components/Lista'

const itens = ['item 1', 'item 2', 'item 3']

function App() {

  return (
    <div className="App">
      <Lista itens={itens} />
    </div>
  )
}

export default App
