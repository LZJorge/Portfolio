import { useTranslation } from "react-i18next";
import { Anchors, AnimationDurationBase } from '../../consts/consts';
import styles from "./index.module.scss";
import Button from "../common/Button";

const About: React.FC = () => {
  const { t } = useTranslation();

  const tTexts = t('about.texts', { returnObjects: true }) as string[];

  const donwloadFile = () => {
    window.open(t("about.cv_file"), "_blank");
  }

  return (
    <section
      data-aos="fade-up"
      data-aos-delay={AnimationDurationBase / 2}
      className={styles.About}
      id={Anchors.ABOUT}
    >
      <div className={styles.About__Container}>
        <div
          data-aos="fade-up"
          data-aos-delay={AnimationDurationBase * 1}
          className={styles.About__Image}
        >
          <img className={styles.About__Image_Shape} src="/profile-pic(5).png"></img>
        </div>

        <div className={styles.About__Info}>
          <h2
            data-aos="fade-up"
            data-aos-delay={AnimationDurationBase * 2}
            className={styles.About__Title}
          >
            {t("about.title")}
          </h2>
          {tTexts.map((text, key) => (
            <p
              data-aos="fade-up"
              data-aos-delay={AnimationDurationBase * (3 + key)}
              className={styles.About__Text}
              key={key}
            >
              {text}
            </p>
          ))}
          <div data-aos="fade-up" data-aos-delay={AnimationDurationBase * 5}>
            <Button style="primary" customStyle={styles.About__Button} onClick={donwloadFile}>
              {t("about.cv_button")} <i className="fa-regular fa-file"></i>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;