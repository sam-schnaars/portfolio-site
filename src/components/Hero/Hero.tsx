import styles from './Hero.module.scss';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { detailedBio, siteData } from '../../siteData';
import { useTypewriter } from 'react-simple-typewriter';
import ScrollableShowcase from "./FunTools";


const Hero: React.FC = () => {
  const {
    github,
    externalHireLink,
    externalHireLinkName,
    description,
    twitter,
    linkedin,
    author,
    largeProfileImage,
  } = siteData;

  const [text] = useTypewriter({
    words: [description],
    typeSpeed: 30,
    deleteSpeed: 0,
  });

  const { detailedBio1, detailedBio2, detailedBio3, detailedBio4 } =
    detailedBio;

  return (
    <>
      <section className={styles.hero}>
      <div className={styles.background}><h1 className='ml-[4vw]'>{text}</h1>
      <div className='absolute bottom-0 ml-[4vw]'>
      <section className={styles.hero_social}>
            
            <a href={github} target='_blank' rel='noreferrer'>
              <Image
                src='/icons/github.svg'
                alt={`github logo for ${author}`}
                width={30}
                height={30}
                loading='eager'
              />
            </a>
            <a href={linkedin} target='_blank' rel='noreferrer'>
              <Image
                src='/icons/linkedin.svg'
                alt={`linkedin logo for ${author}`}
                width={30}
                height={30}
                loading='eager'
              />
            </a>
          </section>
          </div>
      </div>
          {/* link goes here  */}
          
          <ScrollableShowcase />
        <div className='flex flex-col justify-center items-center align-middle mt-[25vh] h-[100%]'>
        <article className={styles.hero_biography}>
          <div className={styles.text}>
            <p>{detailedBio1}</p>
            <p>{detailedBio2}</p>
            <a href={externalHireLink} target='_blank' rel='noreferrer'>
              <button>{externalHireLinkName}</button>
            </a>
          </div>
          <div className={styles.pic}>
            <Image
              src={largeProfileImage}
              alt={`${author}'s profile picture`}
              loading='eager'
              width={700}
              height={500}
              priority
            />
            <label>Me and my CalHacks team (9th place 🤩 )</label>
          </div>
        </article>
        </div>
      </section>
    </>
  );
};

export default Hero;