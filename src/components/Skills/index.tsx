import { useTranslation } from 'react-i18next';
import { Tooltip } from "react-tooltip";
import styles from './index.module.scss';
import { Anchors, AnimationDurationBase } from "../../consts/consts";
import Separator from '../common/Separator';

interface Skill {
  name: string;
  icon: string;
}

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const tSkills = t("skills.data", { returnObjects: true }) as Skill[];

  return (
    <section className={styles.Skills} id={Anchors.SKILLS}>
      <h1
        data-aos="fade-up"
        data-aos-delay={AnimationDurationBase * 1}
        className={styles.Skills__Title}
      >
        {t("skills.title")}
      </h1>
      <Separator />
      <div className={styles.Skills__Items}>
        {tSkills.map((skill, key) => (
          <div
            key={key}
            data-aos="fade-up"
            data-aos-delay={AnimationDurationBase * key}
          >
            <Tooltip id={skill.name + "-tooltip-" + key} />
            <div
              className={styles.Skills__Items_Item + " hoverable"}
              data-tooltip-id={skill.name + "-tooltip-" + key}
              data-tooltip-content={skill.name}
            >
              <img
                src={`https://skillicons.dev/icons?i=${skill.icon}`}
                alt={skill.name}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;