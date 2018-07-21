import React, { PureComponent, Fragment } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import SlideImg from '@/components/PageTop/SlideImg';
import Title from '@/components/PageTop/Title';

import { ContentTitle, Content } from '~/components/Paragraph/Paragraph';
import InfoContent from '~/components/Paragraph/InfoContent';
import AnimationButton from '~/components/Button/AnimationButton';

import { media } from '~/style/helper';

import { i18nString, showI18n } from '@/i18n';

import sectionImg from '~/assets/img/section-about.jpg';

const aboutString = i18nString('about');

const ContentWrapper = styled.div`
  margin: 5% auto;
  width: 65%;

  ${media('pad')} {
    width: 80%;
  }
`;

const ParagraphTitle = ContentTitle.extend`
  margin-bottom: 3%;
`;

const LightContent = Content.extend`
  margin: 3% auto;
  padding: 2em 1.5em;
`;


class Story extends PureComponent {
  state = { redirect: false }

  goProduct = () => this.setState({ redirect: true });

  render() {
    return this.state.redirect ? <Redirect to="/product" push /> : (
      <Fragment>
        <SlideImg src={sectionImg} text={aboutString('slideTitle')} backgroundPosition="center 25%" />
        <Title title={aboutString('title')} />
        <ContentWrapper>
          <ParagraphTitle>{aboutString('mainTitle')}</ParagraphTitle>
          <p>{aboutString('mainDescription')}</p>
          <InfoContent infoColor="info">
            {showI18n(aboutString('mainContent'))}
          </InfoContent>
        </ContentWrapper>
        <ContentWrapper>
          <ParagraphTitle>{aboutString('teamTitle')}</ParagraphTitle>
          <LightContent color="bgLightOrange" noBottomMargin>
            {showI18n(aboutString('teamContent'))}
          </LightContent>
        </ContentWrapper>
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
