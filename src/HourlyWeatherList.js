import React from 'react';

import HourlyWeather from './HourlyWeather'

const cmpStyle = {
  'display' : 'flex',
  'justifyContent': 'space-between',
  'padding': '5px'
}

const HourlyWeatherList = ({weather}) => {
  console.log(weather);
  return (
    <>
      <h4>Nelle prossime ore</h4>
      <div style={cmpStyle}>
          {weather.slice(0, 7).map((w, i) => (
              <HourlyWeather key={i} w={w} hour={i}/>)
          )}
      </div>
    </>
  );
};

export default HourlyWeatherList;
