import { AnimationDurationBase } from '../../../consts/consts';
import styles from './index.module.scss';

const Separator: React.FC = () => {
    return (
      <div
        data-aos="fade-up"
        data-aos-delay={AnimationDurationBase * 1.5}
        className={styles.Separator}
      ></div>
    );
}

export default Separator;