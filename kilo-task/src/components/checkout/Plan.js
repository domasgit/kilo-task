import styles from "./Plan.module.css";

import { faCheckCircle, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';

function Plan(props) {
    const [isSelected, setIsSelected] = useState(false);

    const selectHandler = () => {
        setIsSelected(!isSelected);
    }


  return (
    <div className={`${styles.plan} ${isSelected ? styles.selected : null}`} onClick={selectHandler}>
      <div className={styles.textholder}>
        <p className={styles.toptext}>
          <b>{props.planLength} months plan</b>
        </p>
        <p>
          <font className={styles.monthlyprice}>{props.priceMonthly}</font>/month
        </p>
        <p>
          <strike>{props.pricePreDiscount}</strike>{" "}
          <font className={styles.discountedprice}>{props.pricePostDiscount}</font> billed every{" "}
          {props.planLength} months
        </p>
      </div>
      <div className={styles.iconholder}>
        <FontAwesomeIcon icon={isSelected ? faCheckCircle : faCircle} className={`${styles.checkmark} ${isSelected ? styles.selectedcheckmark : null}`} />
      </div>
    </div>
  );
}

export default Plan;
