import styles from "./index.module.scss";

interface Props {
    children: JSX.Element | JSX.Element[]
}

const Container: React.FC<Props> = ({ children }) => {
    return <div className={styles.Container}>{children}</div>;
}

export default Container;