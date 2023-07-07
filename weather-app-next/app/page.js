'use client'

import {useState, useEffect} from 'react';
import styles from './page.module.css'

import WeatherInput from './components/WeatherInput';
import WeatherOutput from './components/WeatherOutput';

export default function Home() {
    const [apiSymbol, setApiSymbol] = useState("");
    const [apiDesc, setApiDesc] = useState("");
    const [apiTemp, setApiTemp] = useState("");
    const [apiCity, setApiCity] = useState("");
  
    useEffect(function () {
      getWeather("Seoul");
      // console.log("Dude");
    }, []);
  
    function getWeather(city) {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=3f36a008bba9d213f7a6e6101f6588c1`
      )
        .then((res) => res.json())
        .then((resObj) => {
          // console.log(resObj);
          const newCity = `${resObj.city.name} ${resObj.city.country}`;
          const newTemp = resObj.list[0].main.temp;
          const { description, icon } = resObj.list[0].weather[0];
  
          setApiCity(newCity);
          setApiTemp(newTemp);
          setApiSymbol(icon);
          setApiDesc(description);
        });
    }
  
    function onInput(text) {
      // console.log("Use API to get weather for", text);
      getWeather(text);
    }
  
    return (
      <div className={styles.page}>
        <WeatherInput onSubmit={onInput} />
        <WeatherOutput
          city={apiCity}
          symbol={apiSymbol}
          desc={apiDesc}
          temp={apiTemp}
        />
      </div>
    );  
}
