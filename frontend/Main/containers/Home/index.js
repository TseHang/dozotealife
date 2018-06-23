import React from 'react';
import PageTop from '@/components/PageTop';

import Slider from './components/Slider';
// import FullImageBlock from '@/components/Block/FullImgBlock';
// import bg from '~/assets/img/bg.jpg';

const Home = () => (
  <React.Fragment>
    <PageTop subTitle />
    <Slider />
    {/* <TitleBar subTitle /> */}
  </React.Fragment>
);

export default Home;
