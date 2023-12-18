import { useState } from "react";
import ButtonSelect from "../../Components/ButtonSelect/ButtonSelect";
import SplashScreen from "../../Components/SplashScreen/SplashScreen";
import styles from "./Reserve.module.scss";
import bannerShape from "./../../assets/banner-shape.svg";
import userIcon from "./../../assets/user.svg";
import group2Icon from "./../../assets/group2.svg";
import group3Icon from "./../../assets/group3.svg";
import DatePicker from "../../Components/DatePicker/DatePicker";
import Button from "../../Components/Button/Button";

const Reserve: React.FC = () => {
  const [selectedPersonsIndex, setSelectedPersonsIndex] = useState<number>();
  const [selectedTimeIndex, setSelectedTimeIndex] = useState<number>();

  return (
    <>
      <SplashScreen />
      <main className={styles.Reserve}>
        <div className={styles.Banner}>
          <img src={bannerShape} />
        </div>

        <h1>Reserveer jouw bezoek bij [uw locatie]</h1>

        <section>
          <h2>Personen</h2>
          <label htmlFor="person-select">Met hoeveel personen kom je?</label>

          <ButtonSelect
            options={[
              <div className={styles.PersonButton}>
                <img src={userIcon} />
                <span>1</span>
              </div>,
              <div className={styles.PersonButton}>
                <img src={group2Icon} />
                <span>2</span>
              </div>,
              <div className={styles.PersonButton}>
                <img src={group3Icon} />
                <span>3</span>
              </div>,
              <div className={styles.PersonButton}>
                <img src={group3Icon} />
                <span>4</span>
              </div>,
            ]}
            selectedIndex={selectedPersonsIndex}
            setSelectedIndex={setSelectedPersonsIndex}
            id="person-select"
          />
        </section>

        <section className={styles.DateSection}>
          <h2>Plan je bezoek</h2>
          <label htmlFor="TODO">Wanneer wil je langskomen?</label>

          <DatePicker />
        </section>

        <section>
          <h2>Selecteer uw Tijsslot</h2>
          <label htmlFor="timeslot-select">
            Hoe laat wil je ongeveer langskomen?
          </label>

          <ButtonSelect
            options={[
              <span>09:00 tot 10:00</span>,
              <span>10:00 tot 11:00</span>,
              <span>11:00 tot 12:00</span>,
              <span>12:00 tot 13:00</span>,
              <span>13:00 tot 14:00</span>,
            ]}
            selectedIndex={selectedTimeIndex}
            setSelectedIndex={setSelectedTimeIndex}
            id="timeslot-select"
            className={styles.TimeSlotSelect}
          />
        </section>

        <Button>Verder</Button>
      </main>
    </>
  );
};

export default Reserve;
