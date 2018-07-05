import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';

import { i18nString, showI18n } from '@/i18n';

import left from '~/assets/Icon/left.svg';
import right from '~/assets/Icon/right.svg';

import { Row } from '~/components/Grid/Grid';
import { fromProps, getTheme } from '~/style/helper';

import Title from './components/Title';
import AnimationBlock from './components/AnimationBlock';

const tString = i18nString('spirit');

const Icon = styled.img`
  width: 10%;
  margin: 0 1rem;
`;

const Section = {
  blockCss: css`
    width: 80%;
    margin: 3% auto;
    padding: 2%;
    text-align: center;
    line-height: 1.5;

    &:hover {
      color: ${getTheme('color.black')}
    }
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
        <AnimationBlock key={title} css={Section.blockCss} mask={false} color="orange">
          <Row center inline>
            <Icon src={left} />
            <Section.title color="orange">{showI18n(title)}</Section.title>
            <Icon src={right} />
          </Row>
          <Section.content>{showI18n(content)}</Section.content>
          <Section.logo>Dozo</Section.logo>
        </AnimationBlock>
      ))
    }
  </Fragment>
);

export default Spirit;
