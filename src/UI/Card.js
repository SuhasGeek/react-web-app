import styles from "./Card.module.css";
import classNames from "classnames";

const Card = (props) => {
  return (
    <div
      className={classNames(styles.card, "container", props.className)}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default Card;
