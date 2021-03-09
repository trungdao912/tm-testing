import Menu from './components/Menu'
import data from './mock/data.json'
import './App.css'

function App() {
  return (
    <div className="App">
      <Menu data={data} />
    </div>
  )
}

export default App
