import { useTranslation } from "react-i18next";
import { Anchors, AnimationDurationBase } from "../../consts/consts";
import styles from "./index.module.scss";
import Separator from "../common/Separator";

type Experience = {
  company: string;
  title: string;
  description: string;
  location_prefix: string;
  location: string;
  date_prefix: string;
  date: string;
  web_button: string;
  web_url: string;
  image_url: string;
};

const Experience: React.FC = () => {
  const { t } = useTranslation();
  const tExperiences = t("experience.data", {
    returnObjects: true,
  }) as Experience[];

  return (
    <section className={styles.Experience} id={Anchors.EXPERIENCE}>
      <h1
        data-aos="fade-up"
        data-aos-delay={AnimationDurationBase * 1}
        className={styles.Experience__Title}
      >
        {t("experience.title")}
      </h1>
      <Separator />

      {tExperiences.map((experience: Experience, key: number) => {
        return (
          <div
            key={key}
            className={styles.Experience__Item}
            data-aos={key !== 0 ? "fade-left" : "fade-right"}
            data-aos-delay={AnimationDurationBase * (key + 1)}
          >
            <div className={styles.Experience__Item_Content_Content}>
              <p className={styles.Experience__Item_Content_Company}>
                {experience.company}
              </p>
              <h1 className={styles.Experience__Item_Content_Title}>
                {experience.title}
              </h1>
              <p className={styles.Experience__Item_Content_Description}>
                {experience.description}
              </p>
              <p className={styles.Experience__Item_Content_Location}>
                <span
                  className={styles.Experience__Item_Content_Location_Prefix}
                >
                  <i className="fa-solid fa-location-dot"></i>
                  {experience.location_prefix}:
                </span>{" "}
                {experience.location}
              </p>
              <p className={styles.Experience__Item_Content_Date}>
                <span className={styles.Experience__Item_Content_Date_Prefix}>
                  <i className="fa-solid fa-calendar"></i>
                  {experience.date_prefix}:
                </span>{" "}
                {experience.date}
              </p>
              <a
                href={experience.web_url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.Experience__Item_Content_Web}
              >
                {experience.web_button}
                <i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
            <div className={styles.Experience__Item_Image}>
              <img
                src={experience.image_url}
                alt={experience.company}
                className={styles.Experience__Item_Image_Img}
              />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Experience;
