import React, { useState, useEffect } from "react";

const TitleTimer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
        clearInterval(intervalId);
    }
  }, []);

  useEffect(() => {
    document.title = handleTime()
  }, [time])

  function handleTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return <div></div>;
};

export default TitleTimer;
