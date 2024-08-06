import styles from './index.module.scss';

interface Props {
    code: string
}

const Flag: React.FC<Props> = ({ code }) => {
    return (
        <span className={styles.Flag + " " + styles["Flag-" + code]}></span>
    )
}

export default Flag;