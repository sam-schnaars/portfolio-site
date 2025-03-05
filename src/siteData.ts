interface SiteProps {
  siteTitle?: string;
  secondaryTitle?: string;
  email?: string;
  author?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  externalHireLink?: string;
  externalHireLinkName?: string;
  description?: string;
  detailedBio1?: string;
  detailedBio2?: string;
  detailedBio3?: string;
  detailedBio4?: string;
  footerBriefBio?: string;
  siteKeywords?: string;
  largeProfileImage?: string;
  footerHeadshotImage?: string;
}

type DetailedBioProps = {
  detailedBio1?: string;
  detailedBio2?: string;
  detailedBio3?: string;
  detailedBio4?: string;
};

export const siteData: SiteProps = {
  siteTitle: 'samarei.com',
  secondaryTitle: '',
  email: 'samschnaars@berkeley.edu',
  author: '@samschnaars',
  github: 'https://github.com/sam-schnaars',
  linkedin: 'https://linkedin.com/in/sam-schnaars',
  externalHireLink: 'https://linkedin.com/in/sam-schnaars',
  externalHireLinkName: 'Linkedin',
  // in this case, upwork | change it if you want
  description: `I'm Sam - a third year data scientist at UC Berkeley; scroll down to learn more about me.`,
  footerBriefBio:
    'If you like what you see, please contact me anytime. Click the below gif!',
  siteKeywords:
    'sam schnaars, samuel schnaars, sam schnaars data science, data engineer, data scientist, NLP Engineer, NLP Intern',

  largeProfileImage: '/pic/calHacks.jpeg',
  footerHeadshotImage: '/pic/casual_headshot.jpg',
};

export const detailedBio: DetailedBioProps = {
  detailedBio1: `
  I'm focused on using complex methods to achieve easily articulated goals - like saving front line workers 10 hours a week with AI. 💻
  `,
  detailedBio2: `I have a love for linguistics and am currently working on using NLP techniques to help creators connect with their audiences. I adore learning and am always looking for new ways to improve my skills.`,
};
