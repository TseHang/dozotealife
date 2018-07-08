import React from 'react';
import Motto from '~/components/Paragraph/Motto';

import PageTop from '@/components/PageTop';
import { i18nString } from '@/i18n';

import Slider from './Slider';
import News from './News';
import Spirit from './Spirit';
import Sections from './Sections';
import Logo from './Logo';

const Home = () => (
  <React.Fragment>
    <PageTop subTitle />
    <Slider />
    <News />
    <Spirit />
    <Motto>{i18nString('motto')}</Motto>
    <Sections />
    <Logo />
  </React.Fragment>
);

export default Home;
