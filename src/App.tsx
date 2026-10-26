import { useState } from 'react'
import Colors from './color-jsons/colors.json'
import Cat from './cat'
import './styles/App.css'

function App() {
  const [currentColor, setCurrentColor] = useState("")
  const colorValues: string[] = Object.values(Colors)

  return (
    <div className="app">
      <div id="parentContainer">
        {
          colorValues.map((color, colorIndex) => (
            <div>
              <Cat key={colorIndex} size={140} background={Colors['yellow-100']} primary={Colors['blue-300']} accent={color} />
              <input type="checkbox"></input>
            </div>
          ))}
        {/* <Cat size={140} background={Colors.core['yellow-100']} primary={Colors.core['blue-300']} accent={Colors.core['red-900']} /> */}
      </div>
    </div>
  )
}

export default App
