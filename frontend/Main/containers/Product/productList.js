import { i18nString, showI18n } from '@/i18n';

import product1To1 from '~/assets/img/product/product-1-1.jpg';
import product1To2 from '~/assets/img/product/product-1-2.jpg';
import product1To3 from '~/assets/img/product/product-1-3.jpg';

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
    ],
  },
  {
    title: str('1.title'),
    description: str('1.description'),
    details: showI18n(str('1.details')),
    imgList: [
      {
        src: product1To1,
        description: str('1.imgList.0.description'),
      },
      {
        src: product1To2,
        description: str('1.imgList.1.description'),
      },
      {
        src: product1To3,
        description: str('1.imgList.2.description'),
      },
    ],
  },

];
