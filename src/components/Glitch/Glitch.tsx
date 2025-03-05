import styles from "./Glitch.module.scss";
import { siteData } from "../../siteData";
const Glitch: React.FC = () => {
  const { email } = siteData;
  return (
    <>
      <section className={styles.glitch}>
        <article className={styles.glitch_content}>
          <h1>let's work together</h1>
          <button className="border border-gray-200">{email}</button>
        </article>
      </section>
    </>
  );
};

export default Glitch;
