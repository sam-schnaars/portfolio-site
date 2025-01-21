interface Props {
  id?: number;
  title?: string;
  description?: string;
  linkText?: string;
  link?: string;
  picture?: string;
}

export const WorkData: Props[] = [
  {
    id: 1,
    title: "AsqMe",
    description:
      "I'm currentyl a spring Intern at AsqMe, working on an NLP algorithm that allows creators to find questions from their audience and create the perfect reply.",
    picture: "/work/AsqMe.jpg",
    linkText: "AsqMe →",
    link: "https://asqme.com",
  },
  {
    id: 3,
    title: "Zest Capital",
    description:
      "I partnered with Zest Capital to create a three month startup incubator within Peru, eventually travelling to Lima to organize a pitch competition for the cohort and source investors for them.",
    picture: "/work/zest.jpg",
    linkText: "Zest Capital →",
    link: "https://https://zest.pe/",
  },
  {
    id: 2,
    title: "Ozaru",
    description:
      "Ozaru was my first software internship where I helped to prototype their fladship product and work on customer discovery. My code was eventually expanded into a pilot project with PepsiCo's manufacturing facility in Mexico City.",
    picture: "/work/ozaru.png",
    linkText: "Ozaru →",
    link: "https://ozaru.io",
  },
];
