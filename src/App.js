import {useState, useEffect} from "react"

const App = () => {
  const url = "http://api.open-notify.org/iss-now.json"
  const [loading, setLoading] = useState(true)
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")

  useEffect( () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => data.iss_position)
      .then( (position) => {
      setLatitude(position.latitude)
        setLongitude(position.longitude)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <h2>Načítání stránky...</h2>
  } else {
    return <div>
    <h2>Zeměpisná šířka</h2>
    <p>{latitude}</p>
    <h2>Zeměpisná délka</h2>
    <p>{longitude}</p>
  </div>
  }
}

export default App