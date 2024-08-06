import { useTranslation } from "react-i18next";
import { Socials } from "../../consts/consts";
import styles from "./index.module.scss";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer__Container}>
        <section className={styles.Footer__Logo}>
          <span className={styles.Footer__Logo_Icon}>JL</span>
          <span className={styles.Footer__Logo_Name}>Jorge</span>
        </section>
        
        <section className={styles.Footer__Socials}>
          {Socials.map((social) => (
            <a
              className={styles.Footer__Socials_Item}
              href={social.url}
              title={social.name}
              target="_blank"
              rel="noreferrer"
              key={social.id}
            >
              <i className={`fa-brands fa-${social.icon}`}></i>
            </a>
          ))}
        </section>

        <p className={styles.Footer__Email}>dev.jorge2003@hotmail.com</p>

        <p className={styles.Footer__Copyright}>
          &copy; {new Date().getFullYear()} Jorge Landaeta. {t("footer.copyright")}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
