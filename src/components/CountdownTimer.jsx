import React, { useEffect, useState } from "react";
import CountdownCards from "./CountdownCards";

const CountdownTimer = ({ targetDate }) => {
  const [message, setMessage] = useState("");
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const formatTime = (value) => (value < 10 ? `0${value}` : value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });
  return (
    <>
      <section className="flex justify-center items-center gap-4">
        <CountdownCards value={formatTime(timeLeft.days)} title={"Days"} />
        <CountdownCards value={formatTime(timeLeft.hours)} title={"Hours"} />
        <CountdownCards
          value={formatTime(timeLeft.minutes)}
          title={"Minutes"}
        />
        <CountdownCards
          value={formatTime(timeLeft.seconds)}
          title={"Seconds"}
        />
      </section>
    </>
  );
};

export default CountdownTimer;
