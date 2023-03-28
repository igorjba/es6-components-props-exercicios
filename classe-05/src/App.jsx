import CookieAlert from './components/CookieAlert'
import SessionExpiredAlert from './components/SessionExpiredAlert'
import './App.css'

function App() {

  return (
    <div className="App">
      <CookieAlert />
      <SessionExpiredAlert />
    </div>
  )
}

export default App


