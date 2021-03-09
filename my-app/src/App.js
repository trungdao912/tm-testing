import Menu from './components/Menu'
import './App.css'
import data from './mock/data.json'

function App() {
  return (
    <div className="App">
      <Menu data={data} />
    </div>
  )
}

export default App
