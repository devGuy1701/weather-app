import React from 'react';

import DailyWeather from './DailyWeather'

const cmpStyle = {
  'width': '100%'
}

const DailyWeatherList = ({weather}) => {
  return (
    <>
        <h4>Nei prossimi giorni</h4>
        <table style={cmpStyle}>
          <tbody>
            <tr>
              <th>Giorno</th>
              <th></th>
              <th>Percepita</th>
              <th>Pioggia</th>
              <th>Massima</th>
              <th>Minima</th>
              <th>Uvi</th>
            </tr>
            {weather.map((w, i) => (
                <DailyWeather w={w} key={i}/>
            ))}
          </tbody>
        </table>
    </>
    
  );
};

export default DailyWeatherList;
