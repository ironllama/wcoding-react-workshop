import styles from './WeatherOutput.module.css';

export default function WeatherOutput({ city, symbol, desc, temp }) {
  return (
    <div className={styles.weatherOutput}>
      <div>{city || "Unknown"}</div>
      <img src="https://openweathermap.org/img/wn/10d@2x.png" />
      <div>{desc || "Unknown"}</div>
      <p>{temp || "0"}° C</p>
    </div>
  );
}
