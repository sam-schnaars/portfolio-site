import styles from './Footer.module.scss';
import Image from 'next/image';
import { siteData } from '../../siteData';

const Footer: React.FC = () => {
  const {
    footerBriefBio,
    author,
    linkedin,
    footerHeadshotImage,
    github,
  } = siteData;
  return (
    <>
      <footer className={styles.footer}>
        <section className={styles.footer_social_section}>
          <article>
            <div className={styles.headshot}>
              <Image
                className={styles.header_img}
                src={footerHeadshotImage}
                alt={`${author}'s headshot image`}
                width={100}
                height={100}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <p>{footerBriefBio}</p>
            <div className='styles.gif_parent'>
            </div>
          </article>
          <article className={styles.footer_social_section_links}>
            <aside>
            </aside>
          </article>
        </section>
        <p className={styles.date}>
          {author} • All Rights Reserved &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
};

export default Footer;
