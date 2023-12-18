import { useState } from "react";
import styles from "./DatePicker.module.scss";

const monthNames = [
  "Januari",
  "Februari",
  "Maart",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Augustus",
  "September",
  "Oktober",
  "November",
  "December",
];

const dayNames = ["zo", "ma", "di", "wo", "do", "vr", "za"];

const DatePicker = () => {
  const now = new Date();
  const [currentViewingMonth, setCurrentViewingMonth] = useState(now);

  const navigateMonth = (offset: number) => {
    const newDate = new Date(currentViewingMonth);
    newDate.setMonth(currentViewingMonth.getMonth() + offset);
    setCurrentViewingMonth(newDate);
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const currentMonthName = monthNames[currentViewingMonth.getMonth()];
  const firstDay = new Date(
    currentViewingMonth.getFullYear(),
    currentViewingMonth.getMonth(),
    1
  ).getDay();

  const daysInMonth = getDaysInMonth(currentViewingMonth);
  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return (
    <section className={styles.DatePicker}>
      <nav>
        <button onClick={() => navigateMonth(-1)} aria-label="Vorige maand">
          &#8592;
        </button>
        <h4>
          {currentMonthName} {currentViewingMonth.getFullYear()}
        </h4>
        <button onClick={() => navigateMonth(1)} aria-label="Volgende maand">
          &#8594;
        </button>
      </nav>

      <div className={styles.Calendar}>
        {dayNames.map((day, index) => (
          <div className={styles.DayTitle} key={index}>
            {day}
          </div>
        ))}
        {days.map((day, index) => (
          <div
            className={`${styles.Day} ${day === 13 && styles.selected}`}
            key={index}
          >
            {day}
          </div>
        ))}
      </div>
    </section>
  );
};

export default DatePicker;
