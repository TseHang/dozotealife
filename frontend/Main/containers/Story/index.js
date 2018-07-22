import React, { PureComponent, Fragment } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import SlideImg from '@/components/PageTop/SlideImg';
import Title from '@/components/PageTop/Title';

import LineLeftContent from '~/components/Paragraph/LineLeftContent';
import { ContentTitle, Content } from '~/components/Paragraph/Paragraph';
import Motto from '~/components/Paragraph/Motto';
import AnimationButton from '~/components/Button/AnimationButton';

import { media } from '~/style/helper';

import { i18nString, showI18n } from '@/i18n';

import sectionImg from '~/assets/img/section-story.jpg';

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


class Story extends PureComponent {
  state = { redirect: false }

  goProduct = () => this.setState({ redirect: true });

  render() {
    return this.state.redirect ? <Redirect to="/product" push /> : (
      <Fragment>
        <SlideImg src={sectionImg} text={storyString('slideTitle')} backgroundPosition="center 30%" />
        <Title title={storyString('title')} />
        <Spirits content={storyString('spirits')} />
        <Motto>{storyString('motto')}</Motto>
        <ContentWrapper>
          <ParagraphTitle>起源</ParagraphTitle>
          <LineLeftContent>
            {showI18n(storyString('content'))}
          </LineLeftContent>
        </ContentWrapper>
        <LightContent color="bgLightOrange" noBottomMargin>
          {showI18n(storyString('subContent'))}
        </LightContent>
        <AnimationButton
          color="orange"
          handleClick={this.goProduct}
        >
          ~ 讓我們請你喝杯茶 ~
        </AnimationButton>
      </Fragment>

    );
  }
}

export default Story;
