import React, { useEffect } from 'react';

const CurrentWeather = ({city, weather, setBg}) => {
  const capitalize = s => { return s?.charAt(0).toUpperCase() + s?.slice(1)}
  useEffect(() => {
    setBg(weather.weather[0]?.icon)
  }, [weather])
  return (
    <div>
      <h2 style={{marginTop: 10}}> 
        {capitalize(weather.weather[0]?.description)} con {Math.round(weather.temp)}° 
        e umidità pari al {weather.humidity}%
      </h2>
      <p>Temperatura percepita {weather.feels_like}°</p>
    </div>
  );
};

export default CurrentWeather;
