import './App.css'
import BemVindo from './components/BemVindo'

function App() {

  return (
    <div className="App">
      <BemVindo nome="João">
        <p>Seja bem-vindo(a) ao nosso site!</p>
      </BemVindo>
    </div>
  )
}

export default App
