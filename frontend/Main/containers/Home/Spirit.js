import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { i18nString, showI18n } from '@/i18n';

import left from '~/assets/Icon/left.svg';
import right from '~/assets/Icon/right.svg';

import { Row } from '~/components/Grid/Grid';
import { fromProps, getTheme, media } from '~/style/helper';

import spirit1Img from '~/assets/img/spirit-1.jpg';
import spirit2Img from '~/assets/img/spirit-2.jpg';
import spirit3Img from '~/assets/img/spirit-3.jpg';

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
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const spirits = [
  {
    title: spiritString('spirits.title'),
    content: spiritString('spirits.content'),
  },
];

const sectionsSrc = [spirit1Img, spirit2Img, spirit3Img];
const sectionsLinkPath = ['', '', ''];
const sections = spiritString('sections').map(({ title, content }, i) => ({
  src: sectionsSrc[i],
  to: sectionsLinkPath[i],
  title,
  content,
}));

const SectionContent = styled.div`
  position: absolute;
  bottom: 10%;
  left: 10px;
  transition: bottom .1s ease-in;
`;

const SectionImg = styled(Link).attrs({
  style: props => ({
    backgroundImage: `url(${props.src})`,
  }),
})`
  position: relative;
  background: ${getTheme('color.gray')} no-repeat center/cover;
  color: ${fromProps('color')};
  width: 30%;
  height: 200px;
  opacity: 1;
  text-shadow: 2px 2px 5px ${getTheme('color.black')};
  transition: opacity .2s linear;
  &:link {
    color: ${fromProps('color')};
  }
  &:hover {
    cursor: pointer;
    opacity: .8;
    ${SectionContent} {
      bottom: 13%;
    }
  }

  ${media('pad')} {
    width: 40%; 
  }
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
        sections.map(({ src, title, content, to }) => (
          <SectionImg src={src} color="white" key={src} to={to}>
            <SectionContent>
              <h2>{title}</h2>
              <p>{content}</p>
            </SectionContent>
          </SectionImg>
        ))
      }
    </FullRow>
  </Fragment>
);

export default Spirit;
