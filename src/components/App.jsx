import React, { useState } from "react";

function App() {
  const now = new Date().toLocaleTimeString();

  setInterval(updateTime, 1000);

  const [nowTime, setTimeA] = useState(now);

  const [currentTime, setTime] = useState(0);
  function updateTime() {
    const autoTime = new Date().toLocaleTimeString();
    setTimeA(autoTime);
  }

  function getTime() {
    const clickTime = new Date().toLocaleTimeString();
    setTime(clickTime);
  }

  return (
    <div className="container">
      <h1>{nowTime}</h1>
      <h1>{currentTime}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
