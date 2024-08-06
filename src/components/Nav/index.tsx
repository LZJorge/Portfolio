import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Flag from "../Flag";
import Button from "../common/Button";
import { Anchors, AnimationDurationBase } from "../../consts/consts";
import styles from "./index.module.scss";

interface LinkItem {
  id: number;
  name: string;
  anchor: string;
}

type Lang = { id: number; name: string; code: string; flag: string };

const languages: Lang[] = [
  { id: 0, name: "English", code: "en", flag: "us" },
  { id: 1, name: "Español", code: "es", flag: "es" },
]

const Nav: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [languageMenu, setLanguageMenu] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setLanguageMenu(false);
    });
  }, [i18n]);

  const tLinks = t("nav.links", { returnObjects: true }) as LinkItem[];

  const scrollTo = (anchor: string) => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  const showLanguageMenu = () => {
    setLanguageMenu(!languageMenu);
  }

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setLanguageMenu(false);
  }

  return (
    <nav
      data-aos="fade-down"
      data-aos-delay={AnimationDurationBase * 14}
      className={styles.Nav}
    >
      <div className={styles.Nav__Container}>
        <section className={styles.Nav__Logo}>
          <span className={styles.Nav__Logo_Icon}>J.</span>
        </section>

        <ul
          className={
            styles.Nav__Links + " " + (showMenu ? styles.Nav__Links_Show : "")
          }
        >
          {tLinks.map((link: LinkItem) => (
            <li className={styles.Nav__Links_Element} key={link.id}>
              <Link
                className={styles.Nav__Links_Item}
                to={"#" + link.anchor}
                onClick={() => {
                  scrollTo(link.anchor);
                  closeMenuOnMobile();
                }}
                data-text={link.name}
              >
                {link.name}
              </Link>
            </li>
          ))}

          <li className={styles.Nav__Links_Element}>
            <Button
              style="primary"
              customStyle={styles.Nav__Links_Contact}
              to={"#" + Anchors.CONTACT}
              onClick={() => {
                scrollTo(Anchors.CONTACT);
                closeMenuOnMobile();
              }}
              data-text={t("nav.contact")}
            >
              {t("nav.contact")} <i className="fa-regular fa-paper-plane"></i>
            </Button>
          </li>

          <li className={styles.Nav__Links_Element}>
            <button
              className={styles.Nav__Links_LanguageButton}
              title={t("nav.changeLanguage")}
              onClick={() => showLanguageMenu()}
            >
              <i className="fa-solid fa-language"></i>
            </button>

            {languageMenu && (
              <ul className={styles.Nav__Languages}>
                {languages.map((lang: Lang) => (
                  <li
                    className={
                      styles.Nav__Languages_Element +
                      " " +
                      (lang.id === languages.length - 1
                        ? styles.Nav__Languages_Element_NotBordered
                        : "")
                    }
                    key={lang.id}
                  >
                    <button
                      className={styles.Nav__Languages_Element_Button}
                      onClick={() => changeLanguage(lang.code)}
                    >
                      <div className={styles.Nav__Languages_Element_Name}>
                        <Flag code={lang.flag} /> {lang.name}
                      </div>
                      {lang.code === i18n.language && (
                        <i className="fa-solid fa-check-circle"></i>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>

        <button className={styles.Nav__MenuButton} onClick={() => toggleMenu()}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
