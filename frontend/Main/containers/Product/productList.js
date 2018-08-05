import { i18nString, showI18n } from '@/i18n';

import product1To1 from '~/assets/img/product/product-1-1.jpg';
import product1To2 from '~/assets/img/product/product-1-2.jpg';
import product1To3 from '~/assets/img/product/product-1-3.jpg';
import product1To4 from '~/assets/img/product/product-1-4.jpg';
import product1To5 from '~/assets/img/product/product-1-5.jpg';
import product1To6 from '~/assets/img/product/product-1-6.jpg';

import product2To1 from '~/assets/img/product/product-2-1.jpg';
import product2To2 from '~/assets/img/product/product-2-2.png';
import product2To3 from '~/assets/img/product/product-2-3.jpg';
import product2To4 from '~/assets/img/product/product-2-4.jpg';
import product2To5 from '~/assets/img/product/product-2-5.jpg';
import product2To6 from '~/assets/img/product/product-2-6.png';

const str = i18nString('product.productList');

export default [
  {
    title: str('0.title'),
    description: str('0.description'),
    details: showI18n(str('0.details')),
    imgList: [
      {
        src: product1To1,
        description: str('0.imgList.0.description'),
      },
      {
        src: product1To2,
        description: str('0.imgList.1.description'),
      },
      {
        src: product1To3,
        description: str('0.imgList.2.description'),
      },
      {
        src: product1To4,
        description: str('0.imgList.3.description'),
      },
      {
        src: product1To5,
        description: str('0.imgList.4.description'),
      },
      {
        src: product1To6,
        description: str('0.imgList.5.description'),
      },
    ],
  },
  {
    title: str('1.title'),
    description: str('1.description'),
    details: showI18n(str('1.details')),
    imgList: [
      {
        src: product2To1,
        description: str('1.imgList.0.description'),
      },
      {
        src: product2To2,
        description: str('1.imgList.1.description'),
      },
      {
        src: product2To3,
        description: str('1.imgList.2.description'),
      },
      {
        src: product2To4,
        description: str('1.imgList.3.description'),
      },
      {
        src: product2To5,
        description: str('1.imgList.4.description'),
      },
      {
        src: product2To6,
        description: str('1.imgList.5.description'),
      },
    ],
  },

];
