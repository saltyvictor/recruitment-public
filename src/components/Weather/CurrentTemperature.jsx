import React, { useState, useEffect } from 'react'

export const CurrentTemperature = ({input}) => {
  const [temperature, setTemperature] = useState('');
  const [weather, setWeather] = useState('Clear' | 'Thunderstorm' | 'Drizzle' | 'Rain' | 'Snow' | 'Clouds' | 'Atmosphere');

  useEffect(() => {
    if (input) {       
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=a17480f70f0d4368ad0b5eabd0e37b66`)
        .then(res => res.json())
        .then(data => {
          setTemperature(data.main.temp)
          console.log('weather', data.weather[0].main)
          setWeather(data.weather[0].main)
        })
        .catch(err => console.log(err))
  }
  }, [input])
  const currentTempLocation = temperature ? Math.round(temperature) + '°' : 'Waiting for temperature data'
  
  return (
    <div className="card__weather">
      <h3>The temperature at your location is currently:</h3>
      <p>{input && currentTempLocation}</p>
      <p>{!input && 'Pick a city!'}</p>

      {weather === 'Clear' && <i className="fa-solid fa-sun"></i>}
      {weather === 'Drizzle' && <i class="fa-solid fa-cloud-rain"></i>}
      {weather === 'Rain' && <i class="fa-solid fa-cloud-showers-heavy"></i>}
      {weather === 'Thunderstorm' && <i class="fa-solid fa-cloud-bolt"></i>}
      {weather === 'Snow' && <i class="fa-regular fa-snowflake"></i>}
      {weather === 'Clouds' && <i class="fa-solid fa-cloud"></i>}
      {weather === 'Atmosphere' && <i class="fa-solid fa-triangle-exclamation"></i>}

    </div>
  )
}