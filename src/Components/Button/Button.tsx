import styles from "./Button.module.scss";

interface Props {
  children?: React.ReactNode;
}

const Button: React.FC<Props> = ({ children }) => {
  return <button className={styles.Button}>{children}</button>;
};

export default Button;
