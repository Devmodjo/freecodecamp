
import './App.css'

interface DisplayProps{
  value: string;
}

function App() {

  // small calculator

  return (
    <div className='App'>


    </div>
  )
}

function Display(data: DisplayProps) {
  return(
    <div className='Display'>
      {data.value}
    </div>
  )
}

export default App
