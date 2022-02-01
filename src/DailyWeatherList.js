import React from 'react';

import DailyWeather from './DailyWeather'

const cmpStyle = {
    'display' : 'flex',
    'flexDirection': 'column',
    'padding': '6px'
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
