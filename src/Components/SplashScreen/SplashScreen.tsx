import styles from "./SplashScreen.module.scss";
import calendarLogo from "./../../assets/calendar.svg";
import { useEffect, useRef, useState } from "react";

interface Props {}

const SplashScreen: React.FC<Props> = () => {
  const [visible, setVisible] = useState(true);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleAnimationEnd = () => {
      setVisible(false);
    };

    const splashElement = ref.current;
    splashElement?.addEventListener("animationend", handleAnimationEnd);

    return () => {
      splashElement?.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <section ref={ref} className={styles.SplashScreen}>
      <img src={calendarLogo} alt="Bezoekboeker" />

      <h1>Bezoekboeker</h1>
      <h2>Plan en reserveer je bezoek</h2>
    </section>
  );
};

export default SplashScreen;
