import React, { useState, useEffect} from 'react';

const OtherWeatherInfo = ({weather}) => {
  const [riseHour, setRiseHour] = useState('')
  const [setHour, setSetHour] = useState('')

  useEffect(() => {
    let dr = new Date(weather.sunrise * 1000)
    let ds = new Date(weather.sunset * 1000)
    
    setRiseHour(`${dr.getHours()}:${dr.getMinutes()}`)
    setSetHour(`${ds.getHours()}:${ds.getMinutes()}`)
  }, [weather])
  return (
    <div>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <p style={{display: 'grid'}}><img style={{margin: '0 auto'}} width={50} src={`${process.env.PUBLIC_URL}/assets/img/sunrise.png`}/> Alba {riseHour}</p>
          <p style={{display: 'grid'}}><img style={{margin: '0 auto'}} width={50} src={`${process.env.PUBLIC_URL}/assets/img/sunset.png`}/> Tramonto {setHour}</p>
        </div>

        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <p style={{display: 'grid'}}><img style={{margin: '0 auto'}}width={50} src={`${process.env.PUBLIC_URL}/assets/img/uv.png`}/> Indice UV {weather.uvi}</p>
          <p style={{display: 'grid'}}><img style={{margin: '0 auto'}} width={50} src={`${process.env.PUBLIC_URL}/assets/img/wind.png`}/> Vento {Math.round(weather.wind_speed * 3.6)} km/h</p>
          <p style={{display: 'grid'}}><img style={{margin: '0 auto'}} style={{margin: '0 auto'}}width={50} src={`${process.env.PUBLIC_URL}/assets/img/humidity.png`}/> Umidità {weather.humidity}%</p>
        </div>
    </div>
  );
};

export default OtherWeatherInfo;
