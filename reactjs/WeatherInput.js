function WeatherInput({ onSubmit }) {
  const [typing, setTyping] = React.useState("");

  function onType(evt) {
    setTyping(evt.target.value);
  }

  function finishedTyping() {
    onSubmit(typing);
  }

  return (
    <div className="weatherInput">
      <input type="text" className="" onChange={onType} />
      <button onClick={finishedTyping}>Result</button>
    </div>
  );
}