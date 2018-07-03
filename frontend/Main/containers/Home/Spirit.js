import React, { Fragment } from 'react';
import styled from 'styled-components';

import { i18nString, showI18n } from '@/i18n';

import left from '~/assets/Icon/left.svg';
import right from '~/assets/Icon/right.svg';

import { Row } from '~/components/Grid/Grid';
import { fromProps } from '~/style/helper';

import Title from './components/Title';

const tString = i18nString('spirit');

const Icon = styled.img`
  width: 10%;
  margin: 0 1rem;
`;

const Section = {
  block: styled.div`
    width: 80%;
    margin: 3% auto;
    padding: 2%;
    text-align: center;
    line-height: 1.5;
    border: solid .5px ${fromProps('color')};
  `,

  title: styled.h2`
    margin: 1rem 0;
    color: ${fromProps('color')};
    font-size: 1.3rem;
    &:before {
      content: '';
      background: url(${left});
      width: 100px;
      height: 100px;
    }
    &:after {
      content: '';
    }
  `,

  content: styled.div``,

  logo: styled.p`
    margin-top: 2%;
    font-size: 1.5rem;
    font-style: italic;
    font-family: 'Yellowtail', cursive;
  `,
};

const sections = [
  {
    title: tString('section.title'),
    content: tString('section.content'),
  },
];

const Spirit = () => (
  <Fragment>
    <Title title={tString('title')} />
    {
      sections.map(({ title, content }) => (
        <Section.block color="orange" key="title">
          <Row center inline>
            <Icon src={left} />
            <Section.title color="orange">{showI18n(title)}</Section.title>
            <Icon src={right} />
          </Row>
          <Section.content>{showI18n(content)}</Section.content>
          <Section.logo>Dozo</Section.logo>
        </Section.block>
      ))
    }
  </Fragment>
);

export default Spirit;
