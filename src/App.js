import './App.css';
import React, { useState } from 'react';

import ImageBox from './ImageBox';
import CurrentWeather from './CurrentWeather'
import HourlyWeatherList from './HourlyWeatherList'
import DailyWeatherList from './DailyWeatherList'
import OtherWeatherInfo from './OtherWeatherInfo'

const API_KEY = process.env.REACT_APP_ID
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather"
const URL = "https://api.openweathermap.org/data/2.5/onecall"

function App() {

  const [bg, setBg] = useState('')
  const [city, setCity] = useState('')

  const [current, setCurrent] = useState([])
  const [daily, setDaily] = useState([])
  const [hourly, setHourly] = useState([])

  const [tz, setTz] = useState('')

  const [errorCurrent, setErrorCurrent] = useState(false)

  const [search, setSearch] = useState(false)
  const [name, setName] = useState('')


  const handleSearchByName = async () => {
    return fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=it`)
      .then(response => response.json())
      .then(res => {
        if(res.cod === 200) {
          setErrorCurrent(false)
          setBg('')
          return res.coord
        } else {
          setErrorCurrent(true)
          return {}
        }
      })
  }

  const handleSearch = async () => {
    const coord = await handleSearchByName()
    if(!coord?.lat) return console.log('Errore');
    fetch(`${URL}?lat=${coord.lat}&lon=${coord.lon}&appid=${API_KEY}&units=metric&lang=it`)
      .then(res => res.json())
      .then(result => {
        setName(city)
        setCurrent(result.current)
        setTz(result.timezone_offset)
        setDaily(result.daily.slice(1))
        setHourly(result.hourly)
        setSearch(true)
      })
  }
  
  return (
    <div className="App">
      <div className='content'>
        <h1>OpenWeather API</h1>
        <ImageBox icon={bg}/>
        <div className='searchBox'>
          <input
            autoFocus={true}
            
            className='searchBar'
            type="text"
            placeholder='Prato...'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => {
              if(e.key === 'Enter') handleSearch()
            }}/>
          <button
            className='searchBtn'
            onClick={() => handleSearch()}>Cerca</button>
        </div>
        <div className='cnt'>
          {errorCurrent ?  'Errore nella ricerca della città'
            : search ? <CurrentWeather city={name} weather={current} setBg={setBg}/> : 'Cerca una città'}
          {errorCurrent ?  ''
            : search ? <HourlyWeatherList weather={hourly}/> : ''}
          {errorCurrent ?  ''
            : search ? <DailyWeatherList weather={daily}/> : ''}
          {errorCurrent ?  ''
            : search ? <OtherWeatherInfo weather={current} tz={tz}/> : ''}
        </div>
      </div>
    </div>
    
  );
}

export default App;
