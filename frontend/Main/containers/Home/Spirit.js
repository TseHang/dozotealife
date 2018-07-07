import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';

import { i18nString, showI18n } from '@/i18n';

import left from '~/assets/Icon/left.svg';
import right from '~/assets/Icon/right.svg';

import { Row } from '~/components/Grid/Grid';
import { fromProps, getTheme } from '~/style/helper';

import test1 from '~/assets/img/test1.jpg';
import test2 from '~/assets/img/test2.jpg';

import Title from './components/Title';
import AnimationBlock from './components/AnimationBlock';

const spiritString = i18nString('spirit');

const Icon = styled.img`
  width: 10%;
  margin: 0 1rem;
`;

const blockCss = css`
  width: 80%;
  margin: 3% auto;
  padding: 2%;
  text-align: center;
  line-height: 1.5;

  &:hover {
    color: ${getTheme('color.black')}
  }
`;

const SpiritsTitle = styled.h2`
  margin: 1rem 0;
  color: ${fromProps('color')};
  font-size: 1.3rem;
`;

const Logo = styled.p`
  margin-top: 2%;
  font-size: 1.5rem;
  font-style: italic;
  font-family: 'Yellowtail', cursive;
`;

const FullRow = styled(Row)`
  justify-content: space-between;
`;

const spirits = [
  {
    title: spiritString('spirits.title'),
    content: spiritString('spirits.content'),
  },
];

const sectionsSrc = [test1, test2, test2];
const sections = spiritString('sections').map(({ title, content }, i) => ({
  src: sectionsSrc[i],
  title,
  content,
}));

const SectionImg = styled.div.attrs({
  style: props => ({
    backgroundImage: `url(${props.src})`,
  }),
})`
  position: relative;
  background: ${getTheme('color.gray')} no-repeat center/cover;
  color: ${fromProps('color')};
  width: 30%;
  height: 200px;
  text-shadow: 2px 2px 5px ${getTheme('color.black')};
`;

const SectionTitle = styled.h2`
  position: absolute;
  bottom: 20%;
  left: 15px;
`;

const SectionContent = styled.p`
  position: absolute;
  bottom: 10%;
  left: 10px;
`;

const Spirit = () => (
  <Fragment>
    <Title title={spiritString('title')} />
    {
      spirits.map(({ title, content }) => (
        <AnimationBlock key={title} css={blockCss} mask={false} color="orange">
          <Row center inline>
            <Icon src={left} />
            <SpiritsTitle color="orange">{showI18n(title)}</SpiritsTitle>
            <Icon src={right} />
          </Row>
          <div>{showI18n(content)}</div>
          <Logo>Dozo Tea &nbsp;Life</Logo>
        </AnimationBlock>
      ))
    }
    <FullRow full>
      {
        sections.map(({ src, title, content }) => (
          <SectionImg src={src} color="white" key={src}>
            <SectionTitle>{title}</SectionTitle>
            <SectionContent>{content}</SectionContent>
          </SectionImg>
        ))
      }
    </FullRow>
  </Fragment>
);

export default Spirit;
