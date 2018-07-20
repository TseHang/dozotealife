import React, { PureComponent, Fragment } from 'react';
import styled, { css } from 'styled-components';
import { Redirect } from 'react-router-dom';

import SlideImg from '@/components/PageTop/SlideImg';
import Title from '@/components/PageTop/Title';

import LeftLineContent from '~/components/Paragraph/LineLeftContent';
import { ContentTitle, Content } from '~/components/Paragraph/Paragraph';
import Motto from '~/components/Paragraph/Motto';
import AnimationBlock from '~/components/Block/AnimationBlock';

import { media, fromProps } from '~/style/helper';

import { i18nString, showI18n } from '@/i18n';

import section1 from '~/assets/img/section-1.jpg';

import Spirits from './Spirits';

const storyString = i18nString('story');

const ContentWrapper = styled.div`
  margin: 15% auto 10%;
  width: 50%;

  ${media('pad')} {
    width: 80%;
  }
`;

const ParagraphTitle = styled(ContentTitle)`
  transform: translate(-20px, -100%);
`;

const LightContent = Content.extend`
  margin: 10% auto 3%;
  padding: 2em 1.5em;
  width: 50%;

  ${media('pad')} {
    width: 80%;
  }
`;


const buttonCss = css`
  cursor: pointer;
  width: 25%;
  margin: 5% auto 10%;
  padding: .6rem .8rem;
  text-align: center;
  color: ${fromProps('color')};

  &:hover {
    color: white;
  }

  ${media('pad')} {
    margin-top: 10%;
    margin-bottom: 20%;    
    width: 60%;
  }
`;

class Story extends PureComponent {
  state = { redirect: false }

  setRedirect = () => this.setState({ redirect: true });

  render() {
    return this.state.redirect ? <Redirect to="/product" push /> : (
      <Fragment>
        <SlideImg src={section1} text={storyString('slideTitle')} backgroundPosition="center 30%" />
        <Title title={storyString('title')} />
        <Spirits content={storyString('spirits')} />
        <Motto>{storyString('motto')}</Motto>
        <ContentWrapper>
          <ParagraphTitle>起源</ParagraphTitle>
          <LeftLineContent>
            {showI18n(storyString('content'))}
          </LeftLineContent>
        </ContentWrapper>
        <LightContent color="bgLightOrange" noBottomMargin>
          {showI18n(storyString('subContent'))}
        </LightContent>
        <AnimationBlock
          color="orange"
          css={buttonCss}
          handleClick={this.setRedirect}
        >
          ~ 讓我們請你喝杯茶 ~
        </AnimationBlock>
      </Fragment>

    );
  }
}

export default Story;
