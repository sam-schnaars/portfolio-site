import React from "react";
import styles from "../styles/pages/contact.module.scss";
import Image from "next/image";
import Head from "next/head";
import { siteData } from "../siteData";

const contact: React.FC = () => {
  const { siteTitle, twitter, linkedin, email, github, author } = siteData;
  return (
    <>
      <Head>
        <title>Contact | {siteTitle} </title>
      </Head>
      <article className={styles.contact}>
        <section className={styles.contact_links}>
          <h1 className={styles.contact_heading}>Contact</h1>
          <a href={github} target="_blank" rel="noreferrer">
            <Image
              src="/icons/github.svg"
              alt={`instagram logo for ${author}`}
              width={30}
              height={30}
              style={{ objectFit: 'contain' }}
              loading="eager"
            />
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer">
            <Image
              src="/icons/linkedin.svg"
              alt={`linkedin logo for ${author}`}
              width={30}
              height={30}
              style={{ objectFit: 'contain' }}
              loading="eager"
            />
          </a>
        </section>
        <div className={styles.btn}>{email}</div>
      </article>
    </>
  );
};

export default contact;
