import { useState } from 'react';

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
      <button className="resultButton" onClick={finishedTyping}>Result</button>
    </div>
  );
}