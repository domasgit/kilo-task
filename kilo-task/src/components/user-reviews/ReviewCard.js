import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./ReviewCard.module.css";

function ReviewCard(props) {
  return (
    <div className={styles.card}>
      <p className={styles.name}>
        {props.name}, {props.age}
      </p>
      <p className={styles.location}>{props.city}</p>
      <div className={styles.starholder}>
        <FontAwesomeIcon
          icon={faStar}
          className={props.rating >= 1 ? styles.selectedstar : styles.star}
        />
        <FontAwesomeIcon
          icon={faStar}
          className={props.rating >= 2 ? styles.selectedstar : styles.star}
        />
        <FontAwesomeIcon
          icon={faStar}
          className={props.rating >= 3 ? styles.selectedstar : styles.star}
        />
        <FontAwesomeIcon
          icon={faStar}
          className={props.rating >= 4 ? styles.selectedstar : styles.star}
        />
        <FontAwesomeIcon
          icon={faStar}
          className={props.rating >= 5 ? styles.selectedstar : styles.star}
        />
      </div>
      <div>
          <img src={props.imgsrc} />
      </div>
    </div>
  );
}

export default ReviewCard;
