import type { socialIcons } from '~/public/socialIcons';

export interface BasicInfo  {
  pageSize: number;
  author: string;
}

export interface SocialObjects {
  name: keyof typeof socialIcons;
  href: string;
  active: boolean;
  linkTitle: string;
  icon: string;
};
