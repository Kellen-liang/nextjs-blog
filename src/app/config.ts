import socialIcons from '~/public/socialIcons';
import type { BasicInfo, SocialObjects } from './type';

export const BASIC_INFO: BasicInfo = {
  author: 'Kellen',
  pageSize: 2,
};

export const SOCIALS: SocialObjects[] = [
  {
    name: 'Github',
    href: 'https://github.com/Kellen-liang',
    linkTitle: ` ${BASIC_INFO.author} on Github`,
    active: true,
    icon: socialIcons.Github,
  },
];