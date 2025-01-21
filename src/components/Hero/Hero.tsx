import styles from './Hero.module.scss';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { detailedBio, siteData } from '../../siteData';
import { useTypewriter } from 'react-simple-typewriter';

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
        {/* the title goes here  */}
        <article className={styles.hero_header}>
          <h1>{text}<WaitingFunc></WaitingFunc></h1>
          {/* link goes here  */}
          <section className={styles.hero_social}>
            
            <a href={github} target='_blank' rel='noreferrer'>
              <Image
                src='/icons/github.svg'
                alt={`instagram logo for ${author}`}
                width={30}
                height={30}
                objectFit='contain'
                loading='eager'
              />
            </a>
            <a href={linkedin} target='_blank' rel='noreferrer'>
              <Image
                src='/icons/linkedin.svg'
                alt={`linkedin logo for ${author}`}
                width={30}
                height={30}
                objectFit='contain'
                loading='eager'
              />
            </a>
          </section>
        </article>
        {/* picture and the biography goes here  */}
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
              objectFit='cover'
              width={700}
              height={500}
              priority
            />
            <label>Me and my CalHacks team (9th place 🤩 )</label>
          </div>
        </article>
      </section>
    </>
  );
};

const WaitingFunc = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 3033);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {showComponent ? (
        <h1 className='text-purple-400 italic'>learn</h1>
      ) : <div></div>}
    </div>
  );
};

export default Hero;
