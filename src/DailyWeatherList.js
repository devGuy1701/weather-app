import React from 'react';

import DailyWeather from './DailyWeather'

const cmpStyle = {
  'padding': '10px'
}

const DailyWeatherList = ({weather}) => {
  return (
    <>
        <h4>Nei prossimi giorni</h4>
        <div style={cmpStyle}>
          
          {weather.map((w, i) => (
              <DailyWeather w={w} key={i}/>
          ))}
        </div>
    </>
    
  );
};

export default DailyWeatherList;
