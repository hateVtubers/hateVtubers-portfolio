import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaReact,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiGraphql,
  SiApollographql,
  SiFirebase,
  SiSupabase,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiSass,
  SiTypescript
} from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

export const social = [
  {
    Icon: FaGithub,
    url: 'https://github.com/hateVtubers',
    alt: 'github',
  },
  {
    Icon: FaTwitter,
    url: 'https://twitter.com/hateVtubers',
    alt: 'twiiter',
  },
  {
    Icon: FaLinkedinIn,
    url: 'https://www.linkedin.com/in/guillermo-mollo-flores-778b52233/',
    alt: 'linkedin',
  },
  {
    Icon: MdEmail,
    url: 'mailto:hatevtubers@gmail.com',
    alt: 'email',
  },
];

export const routes = {
  '/': {
    title: 'About me',
  },
  '/projects': {
    title: 'Projects',
  },
};

export const repositoryDescription = [
  'A simple CRUD application using NextJS with apollo client and apollo server',
  'An application to download doujins from nhentai, this project is a PWA',
  'My personal blog for translate doujins to spanish',
];

export const repositoryTopics = [
  [FaReact, SiNextdotjs, SiTailwindcss, SiFirebase, SiGraphql, SiApollographql],
  [FaReact, SiNextdotjs, SiTailwindcss, SiSupabase, SiGraphql, SiApollographql],
  [FaReact, SiNextdotjs, SiTailwindcss],
];

export const skills = [
  { Logo: SiHtml5, color: '#E34C26' }, // #E34C26
  { Logo: SiCss3, color: '#3C99DC' }, // #3C99DC
  { Logo: SiJavascript, color: '#f7df1e' }, // #f7df1e
  { Logo: SiTypescript, color: '#007acc' }, // #007ACC
  { Logo: SiReact, color: '#61DBFB' }, // #61DBFB
  { Logo: SiNextdotjs, color: '#ffffff' }, // #fff
  { Logo: SiGraphql, color: '#e535ab' }, // #e535ab
  { Logo: SiSass, color: '#CD6799' }, // #CD6799
  { Logo: SiTailwindcss, color: '#38bdf8' }, // #38bdf8
  { Logo: SiFirebase, color: '#FFCB2B' }, // #FFCB2B
];
