import { useState } from "react";
import styles from "./DatePicker.module.scss";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

interface Props {}

const DatePicker: React.FC<Props> = () => {
  const now = new Date();

  const [currentViewingMonth, setCurrentViewingMonth] = useState(now);

  const currentMonthName = monthNames[currentViewingMonth.getMonth()]; // Maps the month index to the month name

  return (
    <div className={styles.DatePicker}>
      <h4>{currentMonthName}</h4>

      {JSON.stringify(now)}
    </div>
  );
};

export default DatePicker;
