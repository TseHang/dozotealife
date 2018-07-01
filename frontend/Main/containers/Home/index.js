import React from 'react';
import PageTop from '@/components/PageTop';

import Slider from './components/Slider';
import Title from './components/Title';
// import FullImageBlock from '@/components/Block/FullImgBlock';
// import bg from '~/assets/img/bg.jpg';

const Home = () => (
  <React.Fragment>
    <PageTop subTitle />
    <Slider />
    <Title title={'最新消息'} />
  </React.Fragment>
);

export default Home;
