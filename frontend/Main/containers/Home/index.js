import React from 'react';
import Motto from '~/components/Paragraph/Motto';

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
    <Motto>“我們承諾，打造每一杯好茶，創造每一天的好心情！”</Motto>
  </React.Fragment>
);

export default Home;
