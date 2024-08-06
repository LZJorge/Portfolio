import { useState } from 'react';
import { AxiosError } from 'axios';
import { useTranslation } from 'react-i18next';
import { Tooltip } from 'react-tooltip';
import { toast } from 'react-toastify';
import { Email, sendEmail } from '../../services/email';
import { Anchors, AnimationDurationBase } from "../../consts/consts";
import styles from './index.module.scss';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(loading) return;

    setLoading(true);
    const data = Object.fromEntries(new window.FormData(event.target as HTMLFormElement));

    const email: Email = {
      name: data.name as string,
      email: data.email as string,
      message: data.message as string
    };

    try {
      await sendEmail(email);

      toast.success(t("contact.toast.success"));
    } catch(error) {
      if(error instanceof AxiosError) {
        toast.error(error.response?.data.detail[0].msg);
      } 
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={styles.Contact} id={Anchors.CONTACT}>
      <div
        data-aos="fade-up"
        data-aos-delay={AnimationDurationBase * 3}
        className={styles.Contact__Info}
      >
        <h1 className={styles.Contact__Info_Title}>
          {t("contact.info.title")}
        </h1>
        <h1 className={styles.Contact__Info_Subtitle}>
          {t("contact.info.subtitle")}
        </h1>
        <h5 className={styles.Contact__Info_Description}>
          {t("contact.info.description")}
        </h5>

        <a
          data-tooltip-id="email-tooltip"
          data-tooltip-content={t("contact.info.tooltip")}
          href="mailto:JX9zA@example.com"
          className={styles.Contact__Info_EmailBox}
        >
          <Tooltip id="email-tooltip" />
          <i
            className={styles.Contact__Info_EmailBox_Icon + " far fa-envelope"}
          ></i>
          <div className={styles.Contact__Info_EmailBox_Content}>
            <h5 className={styles.Contact__Info_EmailBox_Text}>
              {t("contact.info.email")}
            </h5>
            <h5 className={styles.Contact__Info_EmailBox_Email}>
              dev.jorge2003@hotmail.com
            </h5>
          </div>
        </a>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay={AnimationDurationBase * 6}
        className={styles.Contact__FormContainer}
      >
        <form className={styles.Contact__Form} onSubmit={handleSubmit}>
          <h2 className={styles.Contact__Form_Title}>
            {t("contact.form.cta")}
          </h2>
          <div className={styles.Contact__Form_Group}>
            <i className={styles.Contact__Form_Group_Icon + " far fa-user"}></i>
            <input
              id="name"
              name="name"
              placeholder=" "
              className={styles.Contact__Form_Group_Input}
              type="text"
              required
            />
            <label htmlFor="name" className={styles.Contact__Form_Group_Label}>
              {t("contact.form.name")}
            </label>
            <div className={styles.Contact__Form_Group_Underline}></div>
          </div>

          <div className={styles.Contact__Form_Group}>
            <i className={styles.Contact__Form_Group_Icon + " far fa-at"}></i>
            <input
              id="email"
              name="email"
              placeholder=" "
              className={styles.Contact__Form_Group_Input}
              type="email"
              required
            />
            <label htmlFor="email" className={styles.Contact__Form_Group_Label}>
              {t("contact.form.email")}
            </label>
            <div className={styles.Contact__Form_Group_Underline}></div>
          </div>

          <div className={styles.Contact__Form_Group}>
            <i
              className={
                styles.Contact__Form_Group_Icon_Textarea + " far fa-envelope"
              }
            ></i>
            <textarea
              id="message"
              name="message"
              className={styles.Contact__Form_Group_Textarea}
              required
            ></textarea>
            <label
              htmlFor="message"
              className={styles.Contact__Form_Group_Label}
            >
              {t("contact.form.message")}
            </label>
            <div className={styles.Contact__Form_Group_Underline}></div>
          </div>

          <button className={styles.Contact__Form_Button} type={ loading ? "button" : "submit"}>
            {loading ? (
              <i className="fas fa-spinner fa-spin"></i>
            ) : (
              <>
                {t("contact.form.button")}
                <i
                  className={
                    styles.Contact__Form_Button_Icon + " fas fa-paper-plane"
                  }
                ></i>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;