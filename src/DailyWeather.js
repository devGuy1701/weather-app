import React, { useState, useEffect } from 'react';
import ImageBox from './ImageBox';

const cmpStyle = {
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
        <tr style={cmpStyle}>
            <td style={{fontWeight: 'bold'}}>{day}</td>
            <td><ImageBox stl={{width: 60}} icon={w.weather[0]?.icon} /></td>
            <td>{temp}°</td>
            <td>{(w.pop * 100).toFixed()}%</td>
            <td>{w.temp.max}°</td>
            <td>{w.temp.min}°</td>
            <td>{w.uvi}</td>
            
        </tr>
    );
};

export default DailyWeather;
