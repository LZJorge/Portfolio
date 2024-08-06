import { useTranslation } from "react-i18next";
import { Anchors, AnimationDurationBase } from "../../consts/consts";
import styles from "./index.module.scss";
import { Socials } from "../../consts/consts";

const Home: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className={styles.Home} id={Anchors.HOME}>
      <div className={styles.Home__Info}>
        <h2
          data-aos="fade-up"
          data-aos-delay={AnimationDurationBase * 2}
          className={styles.Home__Title + " " + "hoverable"}
        >
          {t("home.title")} <span className={styles.Home__Title_Accent}>{t("home.name")}</span>!
        </h2>
        <h1
          data-aos="fade-up"
          data-aos-delay={AnimationDurationBase * 3}
          className={styles.Home__Subtitle}
        >
          {t("home.subtitle")}{" "}
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay={AnimationDurationBase * 4}
          className={styles.Home__Text}
        >
          {t("home.text")}
        </p>
        <ul
          data-aos="fade-up"
          data-aos-delay={AnimationDurationBase * 5}
          className={styles.Home__Socials}
        >
          {Socials.map((social) => (
            <a
              key={social.id}
              className={styles.Home__Socials_Item}
              href={social.url}
              title={social.name}
              target="_blank"
              rel="noreferrer"
            >
              <i className={`fa-brands fa-${social.icon}`}></i>
            </a>
          ))}
        </ul>
        <div
          data-aos="fade-up"
          data-aos-delay={AnimationDurationBase * 8}
          data-aos-offset={80}
          className={styles.Home__ScrollAnim}
        ></div>
      </div>
    </section>
  );
}

export default Home;