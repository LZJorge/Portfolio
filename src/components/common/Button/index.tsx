import { Link } from "react-router-dom";
import styles from "./index.module.scss";

interface Props {
  children: React.ReactNode;
  to?: string;
  style?: 'primary' | 'secondary';
  customStyle?: string;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ children, to = '#', style = 'primary', customStyle, onClick  }) => {
  return (
    <Link className={styles[style] + " " + customStyle} to={to} onClick={onClick}>
      {children}
    </Link>
  );
};

export default Button;
