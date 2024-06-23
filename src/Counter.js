import { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(0);
    useEffect(() => {
      document.title = `Počet kliknutí: ${count}`;
    }, [count]);
  return <div>
          <p>Počet kliknutí na tlačítko: {count}</p>
          <button onClick={() => setCount(count + 1)}>
          Klikni na mě
      </button>
      <p>Obsah proměnné value: {value}</p> 
            <button onClick={() => setValue(value + 1)}>Opět klikni</button>
      </div>
}

export default Counter