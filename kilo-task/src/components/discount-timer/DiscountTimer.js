import React, { useEffect, useState } from "react";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./DiscountTimer.module.css";

function DiscountTimer(props) {
  const validUntil = props.validUntil;

  const calculateTimeLeft = () => {
    const difference = +new Date(validUntil) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        h: Math.floor(difference / (1000 * 60 * 60)),
        m: Math.floor((difference / (1000 * 60)) % 60),
        s: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  if (timerComponents.length) {
    return (
      <div className={styles.valid}>
        <FontAwesomeIcon icon={faTag} className={styles.ico}/> {props.discount} dicount only valid for <b>{timerComponents}</b>
      </div>
    );
  }
  else {
      return (
        <div className={styles.notvalid}>Time's up!</div>
      );
  }
}

export default DiscountTimer;
