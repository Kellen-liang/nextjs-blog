import type { BasicInfo } from './type';
import { Github, Mail, Twitter } from './ui/socialIcons';

export const BASIC_INFO: BasicInfo = {
  author: 'Kellen',
  pageSize: 2,
};

export const LINKS = [
  {
    name: 'Github',
    url: 'https://github.com/Kellen-liang',
    icon: Github,
  },
  {
    name: 'github',
    url: 'https://x.com/liangzhimingzm',
    icon: Twitter,
  },
  {
    name: 'email',
    url: 'mailto://dh18344094637@outlook.com',
    icon: Mail,
  },
];
