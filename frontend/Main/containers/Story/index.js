import React from 'react';

import SlideImg from '@/components/PageTop/SlideImg';
import Title from '@/components/PageTop/Title';

import section1 from '~/assets/img/section-1.jpg';

import { i18nString } from '@/i18n';

const storyString = i18nString('story');

const Story = () => (
  <React.Fragment>
    <SlideImg src={section1} text={storyString('slideTitle')} backgroundPosition="center 30%" />
    <Title title={storyString('title')} />
    <h1>story</h1>
  </React.Fragment>
);

export default Story;
