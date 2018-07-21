import { i18nString } from '@/i18n';

const navString = i18nString('nav');

export const navConfigs = [
  {
    path: '/story',
    label: navString('story.label'),
    text: navString('story.text'),
  },
  {
    path: '/promise',
    label: navString('promise.label'),
    text: navString('promise.text'),
  },
  {
    path: '/product',
    label: navString('product.label'),
    text: navString('product.text'),
  },
  {
    path: '/know-how',
    label: navString('know-how.label'),
    text: navString('know-how.text'),
  },
  {
    path: '/about',
    label: navString('about.label'),
    text: navString('about.text'),
  },
];
