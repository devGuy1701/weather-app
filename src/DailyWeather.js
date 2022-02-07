import React, { useState, useEffect } from 'react';
import ImageBox from './ImageBox';

const cmpStyle = {
    'display': 'flex',
    'flexDirection': 'row',
    'justifyContent': 'center',
    'alignItems': 'center'
}

const st = {
    'flexGrow': 1,
    'flexShrink': 1,
    'flexBasis': 0,
    'textAlign': 'center'
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
            <div style={{fontWeight: 'bold'}}>{day}</div>
            <div style={st}><ImageBox stl={{width: 60}} icon={w.weather[0]?.icon} /></div>
            <div style={st}>{temp}°</div>
            <div style={st}>{(w.pop * 100).toFixed()}%</div>
            <div style={st}>{w.temp.max}°</div>
            <div style={st}>{w.temp.min}°</div>
            <div style={st}>{w.uvi}</div>
            
        </div>
    );
};

export default DailyWeather;
