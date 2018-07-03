import React from 'react';
import styled from 'styled-components';

import { i18nString } from '@/i18n';
import img1 from '~/assets/img/news-1.png';
import img2 from '~/assets/img/news-2.png';

import Card from './components/Card';
import Title from './components/Title';

const newsString = i18nString('news');

const Div = styled.div`
  margin-top: 3%;
`;

const Wrapper = styled.div`
  width: 80%;
  margin: 3% auto;
`;


const cards = newsString('configs').map((config, i) => {
  let img = null;
  switch (i) {
    case 0: img = img1; break;
    case 1: img = img2; break;
    default: break;
  }

  return (
    <Card
      key={`card-${i}`}
      title={config.title}
      subTitle={config.subTitle}
      context={config.context}
      img={img}
    />
  );
});


const News = () => (
  <Div>
    <Title title={newsString('title')} />
    <Wrapper>
      {cards}
    </Wrapper>
  </Div>
);

export default News;
