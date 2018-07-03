import React from 'react';
import PageTop from '@/components/PageTop';

import Slider from './Slider';
import News from './News';
import Spirit from './Spirit';
// import FullImageBlock from '@/components/Block/FullImgBlock';
// import bg from '~/assets/img/bg.jpg';

const Home = () => (
  <React.Fragment>
    <PageTop subTitle />
    <Slider />
    <News />
    <Spirit />
  </React.Fragment>
);

export default Home;
