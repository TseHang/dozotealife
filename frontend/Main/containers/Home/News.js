import React, { Fragment } from 'react';
import styled from 'styled-components';

import { i18nString } from '@/i18n';

import Card from './components/Card';
import Title from './components/Title';

const i18n = i18nString('news');


const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;


const cards = i18n('configs').map((config, i) => {
  let img = null;
  switch (i) {
    case 0: img = 1; break;
    case 1: img = 2; break;
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
  <Fragment>
    <Title title={i18n('title')} />
    <Wrapper>
      {cards}
    </Wrapper>
  </Fragment>
);

export default News;
