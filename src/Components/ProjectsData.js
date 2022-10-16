
import { MdOutlineContacts } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoMdContacts } from "react-icons/io";
import { MdDynamicFeed } from "react-icons/md";
import { MdOutlineLocalMovies } from "react-icons/md";
import { RiNewspaperLine } from "react-icons/ri";
import { BsCart4 } from "react-icons/bs";
import { FaCalculator } from "react-icons/fa";
import { TbListNumbers } from 'react-icons/tb';
import { FaDog } from 'react-icons/fa';

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Portfolio website",
    category: "react",
    showOnHome: false,
    description:
      "My personal portfolio website which showcase all of  Me, My Skills, My Work, My Contact Information, etc. ",
    toolsUsed: "React, CSS, JSX",
    icon: <CgProfile />,
    githubLink: "https://github.com/SaMs-Hub/SaMsProfile",
    liveLink: "https://sams-hub-profile.netlify.app",
  },
  {
    id: 2,
    title: "Convvey",
    category: "others",
    showOnHome: true,

    description:
      "Convvey is an Social Media Webapp where a User can post different articles, view his friends, like and comment on their posts etc",
    toolsUsed: "NodeJS, MongoDB, ExpressJS, SCSS",
    icon: <IoMdContacts />,
    githubLink: "https://github.com/SaMs-Hub/Convvey",

  },
  {
    id: 3,
    title: "Cinemango",
    category: "react",
    showOnHome: true,

    description:
      "Cinemango is an React and Redux based Web App. It is an Movie listing app with features such as adding Favourites and showing them in a separate section",
    toolsUsed: "ReactJS, Redux, JSX",
    icon: <MdOutlineLocalMovies />,
    githubLink: "https://github.com/SaMs-Hub/Cinemango",
    liveLink: "https://sams-hub.github.io/Cinemango/",
  },
  {
    id: 4,
    title: "SimList",
    category: "others",
    showOnHome: true,

    description:
      "SimList is an NodeJS based Contacts Book where the User can Add, delete and Update the Contact he/she requires ",
    toolsUsed: "NodeJS, MongoDB,SCSS ",
    icon: <MdOutlineContacts />,

    githubLink: "https://github.com/SaMs-Hub/Simlist",

  },
  {
    id: 5,
    title: "Feedify",
    category: "react",
    showOnHome: true,

    description:
      "Feedify is a React JS based rating website, where the user can give a feedback to app along with ratings from 1 to 10",
    toolsUsed: "HTML, CSS, JavaScript",
    icon: <MdDynamicFeed />,

    githubLink: "https://github.com/SaMs-Hub/Feedify",
    liveLink: "https://sams-hub-feedify.netlify.app/",
  },
  {
    id: 6,
    title: "Dogoxo",
    showOnHome: true,

    category: "javaScript",
    description:
      "DogoXo is an JS based web app. It generates the Pic of the Dog breeds that a user wants to see!!",
    toolsUsed: "HTML, CSS, JavaScript",
    icon: <FaDog />,

    githubLink: "https://github.com/SaMs-Hub/DogoXo",
    liveLink: "https://sams-hub.github.io/DogoXo/",
  },
  {
    id: 7,
    title: "SamsLuckyDigit",
    category: "javaScript",
    showOnHome: true,

    description:
      "Sams Lucky Digit is an number guessing game",
    toolsUsed: "HTML, CSS, Javascript",
    icon: <TbListNumbers />,

    githubLink: "https://github.com/SaMs-Hub/SaMsLuckyDigit",
    liveLink: "https://sams-hub.github.io/SaMsLuckyDigit/",
  },
  {
    id: 8,
    title: "SamsCalc",
    category: "javaScript",
    showOnHome: false,

    description:
      "A calculator that can be used to perform all the mathematical operations.",
    toolsUsed: "HTML, CSS, JavaScript",
    icon: <FaCalculator />,

    githubLink: "https://github.com/SaMs-Hub/CalC",
    liveLink: "https://sams-hub.github.io/CalC/",
  },

];

export default PROJECTS_DATA;
