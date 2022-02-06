import React, { useState, useEffect } from 'react';
import ImageBox from './ImageBox';

const cmpStyle = {
    'display': 'flex',
    'flexDirection': 'row',
    'justifyContent': 'space-around',
    'alignItems': 'center'
}

const DailyWeather = ({w}) => {
    const [day, setDay] = useState('')
    const [temp, setTemp] = useState('')

    const days = {
        "Mon": "Lunedi",
        "Tue": "Martedi",
        "Wed": "Mercoledi",
        "Thu": "Giovedi",
        "Fri": "Venerdi",
        "Sat": "Sabato",
        "Sun": "Domenica"
    }

    useEffect(() => {
        let theDate = new Date(w.dt * 1000);
        let day = theDate.toString().split(' ')[0]
        setDay(days[day])

        let t = Object.values(w.feels_like).reduce((i,k) => (i+k), 0)
        setTemp(Math.round(t / 4))

    }, [w])
    return (
        <div style={cmpStyle}>
            <p style={{fontWeight: 'bold'}}>{day}</p>
            <ImageBox stl={{width: 60}} icon={w.weather[0]?.icon} />
            <p>{temp}°</p>
            <p>{(w.pop * 100).toFixed()}%</p>
            <p>{w.temp.max}°</p>
            <p>{w.temp.min}°</p>
            <p>{w.uvi}</p>
            
        </div>
    );
};

export default DailyWeather;
