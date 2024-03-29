import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import SlideImg from '@/components/PageTop/SlideImg';
import Title from '@/components/PageTop/Title';
import { i18nString, showI18n } from '@/i18n';

import LineLeftContent from '~/components/Paragraph/LineLeftContent';
import InfoContent from '~/components/Paragraph/InfoContent';
import { Content, ContentTitle } from '~/components/Paragraph/Paragraph';
import Youtube from '~/components/Youtube/Youtube';
import AnimationButton from '~/components/Button/AnimationButton';

import { media } from '~/style/helper';
import sectionImg from '~/assets/img/section-know-how.jpg';

const i18n = i18nString('know-how');

const ContentWrapper = styled.div`
  margin: 5% auto;
  width: 65%;

  ${media('pad')} {
    width: 80%;
  }
`;

const IntroContent = Content.extend`
  padding: 2em 1.5em;
  > p {
    margin-bottom: 3%;
  }
`;

const ParagraphTitle = ContentTitle.extend`
  margin-bottom: 3%;
`;

const ParagraphLineTitle = ContentTitle.extend`
  margin-top: 3em;
  transform: translate(-20px, -100%);
  ~ p {
    margin-bottom: 3%;
  }
`;

class KnowHow extends PureComponent {
  state = {
    redirect: false,
  }

  goProduct = () => this.setState({ redirect: true });

  render() {
    return this.state.redirect ? <Redirect to="/product" push /> : (
      <React.Fragment>
        <SlideImg src={sectionImg} text={i18n('slideTitle')} backgroundPosition="center 20%" />
        <Title title={i18n('title')} />
        <ContentWrapper>
          <IntroContent color="bgLightOrange" noBottomMargin>{showI18n(i18n('intro'))}</IntroContent>
        </ContentWrapper>
        <ContentWrapper>
          <ParagraphLineTitle>{i18n('historyTitle')}</ParagraphLineTitle>
          <LineLeftContent noBottomMargin>
            {showI18n(i18n('history'))}
          </LineLeftContent>
        </ContentWrapper>
        <ContentWrapper>
          <Youtube src={'https://www.youtube.com/embed/f-zQVpGueQE'} text={i18n('video-description1')} />
        </ContentWrapper>
        <ContentWrapper>
          <ParagraphTitle>{i18n('teaGoodTitle')}</ParagraphTitle>
          <InfoContent infoColor="info">
            {showI18n(i18n('teaGoodContent'))}
          </InfoContent>
        </ContentWrapper>

        <ContentWrapper>
          <IntroContent color="bgLightOrange" noBottomMargin>{showI18n(i18n('caution'))}</IntroContent>
        </ContentWrapper>

        <ContentWrapper>
          <ParagraphTitle>{i18n('famousTeaTitle')}</ParagraphTitle>
          <InfoContent infoColor="info">
            {showI18n(i18n('famousTeaContent'))}
          </InfoContent>
        </ContentWrapper>

        <AnimationButton
          color="orange"
          handleClick={this.goProduct}
        >
      ~ 讓我們請你喝杯茶 ~
        </AnimationButton>

      </React.Fragment>
    );
  }
}

export default KnowHow;
