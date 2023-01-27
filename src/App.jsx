import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [person, setPerson] = useState([])

  const search = async (q) => {

      const response = await fetch(
        'http://localhost:8080/?' + new URLSearchParams({q})
      );

      const data = await response.json()
      setPerson(data)
      
  }

  return (
    <>
      <div  id='firstCard'>

      <h1>Look for <br /> Someone </h1>

      <input type="text"
        placeholder='Search'
        onChange={(e)=>{search(e.target.value)}}
        />

      </div>
      <div id='secondCard'>

      <ul>
        {
          person.map((p)=>{
            return(
              <li key={p.id}>
              <strong>{p.type}</strong> {p.name}  {p.age} years old
            </li>)
          })
        }
        {person.length == 0 && "no f results"}

      </ul>
    </div>

    </>
  )
}

export default App
