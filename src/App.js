import { useState, useEffect } from "react"

const myHeaders = new Headers();
myHeaders.append("apikey", "m1YMRjpLiVkbzdAdtEfiAlsceIszXQ2V");

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

  


const App = () => {
  const [outcome, setOutcome] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect( () => {
  fetch("https://api.apilayer.com/currency_data/convert?to=EUR&from=CZK&amount=100", requestOptions)
    .then(response => response.json())
    .then(result => { 
        setOutcome(result.result)
        setLoading(false)
      })
    .catch(error => console.log('error', error));
}, [])

  if (loading) {
   return <h2>Načítání výsledku...</h2>
  }
  return <div>
    <p>{outcome}</p>
  </div>
}

export default App