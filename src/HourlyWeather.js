import React, { useEffect, useState } from 'react';
import ImageBox from './ImageBox';

const cmpStyle = {
    'fontSize': '11px'
}

const imgStyle = {
}

const stl = {
    height: '50',
    width: '50'
}

const HourlyWeather = ({w}) => {
    const [hour, setHour] = useState('')
    const [bg, setBg] = useState('')

    useEffect(() => {
        let theDate = new Date(w.dt * 1000);
        setHour(`${theDate.getHours()}`)
        setBg(w.weather[0]?.icon)
    }, [w])
    return (
        <div style={cmpStyle}>
            <p style={{margin: 0}}>{hour}:00</p>
            <ImageBox icon={bg} stl={stl}/>
            <p style={{margin: 2, fontWeight: 'bold', textTransform: 'capitalize'}}>{w.weather[0]?.description}</p>
            <p style={{margin: 0}}>{Math.round(w.temp)}°</p>
            <p>{w.pop}%</p>
        </div>
    );
};

export default HourlyWeather;
