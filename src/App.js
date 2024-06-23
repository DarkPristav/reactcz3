import {useState, useEffect } from "react"

const App = () => {
  const [state, setState] = useState({
    name: '',
    image: '',
    people: ''
  })
  const url = "https://restcountries.com/v3.1/name/ukraine"
  const countryInfo = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data[0]);
      setState({
        name: data[0].capital[0],
        image: data[0].flags.png,
        people: (data[0].population / 1000000).toFixed(2)
      })
    } catch (error) {
      console.log('Chyba při načítání dat: ', error);
    }
    
  }
  useEffect(() => {
    countryInfo()
  }, [])
  const {name, image, people} = state;
  return <div className='country-box'>
    <div className="country-info">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{people} milionů</p>
    </div>
  </div>
}
export default App