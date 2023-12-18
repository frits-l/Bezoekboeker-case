import { ReactElement } from "react";
import styles from "./ButtonSelect.module.scss";

interface Props {
  options: ReactElement[] | string[] | number[];
  selectedIndex?: number;
  setSelectedIndex: (index: number) => void;
  className?: string;
  id?: string;
}

const ButtonSelect: React.FC<Props> = ({
  options,
  selectedIndex,
  setSelectedIndex,
  className = "",
  id = "",
}) => (
  <ul
    className={`${styles.ButtonSelect} ${className}`}
    role="radiogroup"
    id={id}
  >
    {options.map((element, i) => (
      <li>
        {selectedIndex === i && (
          <div className={styles.Checked}>
            <span>&#10004;</span>
          </div>
        )}
        <button
          key={i}
          className={`${styles.button} ${
            selectedIndex === i ? styles.selected : ""
          }`}
          onClick={() => setSelectedIndex(i)}
          role="radio"
          aria-checked={selectedIndex === i}
        >
          {element}
        </button>
      </li>
    ))}
  </ul>
);

export default ButtonSelect;
