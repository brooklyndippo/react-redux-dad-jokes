import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveJoke } from '../actions'
import './DadJoke.css'

function DadJoke() {
  const dispatch = useDispatch()

  //Set states
  const [joke, setJoke] = useState('hahaha')
  const [data, setData] = useState('')

 
  async function generateLaughter() {
    console.log("generating dad joke")
    const path = `https://icanhazdadjoke.com/`
   
    const response = await fetch(path, {
        headers: {
            Accept: 'application/json'
        }
    })
    const json = await response.json()
    console.log(json.joke)

    if (response.status !== 200) {
        setData({
            status: response.status
        })
        console.log('error')
        return
    }

    setJoke({
        status: response.status,
        id: json.id,
        joke: json.joke,
    })

  };

  return (
    <div style={{margin: '20px', height: '20vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>


      <div className="big-laughs"><strong>{joke.joke}</strong></div>
      {/* BUTTON TO SAVE */}
      <div>
        <button
        className="generate-button"
        onClick={(e) => {
          generateLaughter()
        }}>Generate Dad Joke</button>
      </div>
      <button onClick={(e) => {
        dispatch(saveJoke(joke.joke))
      }}>Put it in your back pocket</button>
    </div>
  )
}

export default DadJoke;