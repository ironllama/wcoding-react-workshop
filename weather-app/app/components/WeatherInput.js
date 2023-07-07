import { useState } from 'react';

import styles from './WeatherInput.module.css';

export default function WeatherInput({ onSubmit }) {
  const [typing, setTyping] = useState("");

  function onType(evt) {
    setTyping(evt.target.value);
  }

  function finishedTyping() {
    onSubmit(typing);
  }

  return (
    <div className="weatherInput">
      <input type="text" className="" onChange={onType} />
      <button className={styles.resultButton} onClick={finishedTyping}>Result</button>
    </div>
  );
}