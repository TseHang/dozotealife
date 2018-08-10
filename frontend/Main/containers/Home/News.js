import React from 'react';
import styled from 'styled-components';

import Title from '@/components/PageTop/Title';

import { i18nString } from '@/i18n';
import { media } from '~/style/helper';
import img1 from '~/assets/img/news-1.png';
import img2 from '~/assets/img/news-2.png';

import Card from './components/Card';

const newsString = i18nString('news');

const Div = styled.div`
  margin-top: 3%;
  ${media('pad')} {
    margin-top: 7%;
  }
`;

const Wrapper = styled.div`
  width: 80%;
  margin: 3% auto;
  ${media('mobile')} {
    width: 90%;
    margin-bottom: 6%;
  }
`;


const cards = newsString('configs').map((config, i) => {
  let img = null;
  let to = '';
  switch (i) {
    case 0: img = img1; to = 'https://www.zeczec.com/projects/dozotealife'; break;
    case 1: img = img2; to = ''; break;
    default: break;
  }

  return (
    <Card
      key={`card-${i}`}
      title={config.title}
      subTitle={config.subTitle}
      context={config.context}
      img={img}
      to={to}
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
