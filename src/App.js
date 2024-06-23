import { useState, useEffect } from "react"

const App = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  const sizeControler = () => {
    setWindowSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", sizeControler)
    return () => {
    window.removeEventListener("resize", sizeControler)
  }
  })

  return <div>
    <h1>Šířka okna</h1>
    <h3>{windowSize}</h3>
  </div>
}

export default App