import { useState, useEffect } from 'react';
import Counter from './Counter'

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
   useEffect(() => {
    
  const intervalId = setInterval(() => {
    setCurrentTime(new Date().toLocaleTimeString());
  }, 1000);
  return () => {
    clearInterval(intervalId);
  }
  })
  return <div>
    <h2>Aktuální čas</h2>
    <p>{currentTime}</p>
    <Counter />
  </div>
}

export default App