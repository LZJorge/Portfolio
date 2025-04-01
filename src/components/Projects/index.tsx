import { useTranslation } from "react-i18next";
import Separator from "../common/Separator";
import { Anchors } from '../../consts/consts';
import { AnimationDurationBase } from "../../consts/consts";
import styles from './index.module.scss';

type Project = {
  id: number;
  title: string;
  description: string;
  image_url: string;
  medias: {
    id: number;
    name: string;
    url: string;
    icon: string;
  }[];
};

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const tProjects = t('projects.data', { returnObjects: true }) as Project[];

  return (
    <section className={styles.Projects} id={Anchors.PROJECTS}>
      <h1
        data-aos="fade-up"
        data-aos-delay={AnimationDurationBase * 1}
        className={styles.Projects__Title}
      >
        {t("projects.title")}
      </h1>
      <Separator />
      <div className={styles.Projects__Container}>
        {tProjects.map((project: Project, key: number) => {
          return (
            <div
              key={project.id}
              className={styles.Projects__Project}
              data-aos={key !== 0 ? "fade-left" : "fade-right"}
              data-aos-delay={AnimationDurationBase * (key + project.id)}
            >
              <img
                src={project.image_url}
                alt={project.title}
                className={styles.Projects__Project_Image}
              />
              <h1 className={styles.Projects__Project_Preview}>{project.title}</h1>
              
              <div className={styles.Projects__Project_Shape}>
                <p className={styles.Projects__Project_Title}>
                  {project.title}
                </p>
                <p className={styles.Projects__Project_Description}>
                  {project.description}
                </p>
                <div className={styles.Projects__Project_Medias}>
                  {project.medias.map((media) => {
                    return (
                      <a
                        key={media.id}
                        href={media.url}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.Projects__Project_Medias_Item}
                      >
                        {media.name}
                        <i className={media.icon}></i>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;