import { useState, useEffect } from "react"

const App = () => {
  const [quote, setQuote] = useState(null)
  const url = "https://api.kanye.rest/";

  const getQuote = async () => {

    try {
      const response = await fetch(url)
      const data = await response.json()
      setQuote(data.quote)
    } catch (error) {
      setQuote('Nepodařilo se načíst citát.')
    }
  }

  useEffect(() => {
    getQuote()
  }, [])

  if (!quote) {
    return <h1>Načítání dat...</h1>
  }

  return <div>
    <h1>{quote}</h1>
  </div>
  
}

export default App