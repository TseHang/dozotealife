import React, { PureComponent, Fragment } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import SlideImg from '@/components/PageTop/SlideImg';
import Title from '@/components/PageTop/Title';

import { ContentTitle } from '~/components/Paragraph/Paragraph';
import InfoContent from '~/components/Paragraph/InfoContent';
import LineLeftContent from '~/components/Paragraph/LineLeftContent';
import Motto from '~/components/Paragraph/Motto';
import AnimationButton from '~/components/Button/AnimationButton';

import sectionImg from '~/assets/img/section-promise.jpg';

import { media } from '~/style/helper';

import { i18nString, showI18n } from '@/i18n';

const promiseString = i18nString('promise');

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

const ParagraphLineTitle = ContentTitle.extend`
  transform: translate(-20px, -100%);
  ~ p {
    margin-bottom: 3%;
  }
`;

class Promise extends PureComponent {
  state = { redirect: false }

  goProduct = () => this.setState({ redirect: true });

  render() {
    return (
      this.state.redirect ? <Redirect to="/product" /> : (
        <Fragment>
          <SlideImg src={sectionImg} text={promiseString('slideTitle')} backgroundPosition="center 25%" />
          <Title title={promiseString('title')} />
          <ContentWrapper>
            <ParagraphTitle>{promiseString('promiseTitle')}</ParagraphTitle>
            <InfoContent infoColor="info">
              {showI18n(promiseString('promiseContent'))}
            </InfoContent>
          </ContentWrapper>
          {/* <SelectImg text="12" /> */}
          <Motto>{showI18n(promiseString('motto'))}</Motto>
          <ContentWrapper>
            <ParagraphLineTitle>{promiseString('seasonTitle')}</ParagraphLineTitle>
            <p>{showI18n(promiseString('seasonDescription'))}</p>
            <LineLeftContent>
              {showI18n(promiseString('seasonContent'))}
            </LineLeftContent>
          </ContentWrapper>
          {/* <SlideImg /> */}
          <AnimationButton
            color="orange"
            handleClick={this.goProduct}
          >
            ~ 讓我們請你喝杯茶 ~
          </AnimationButton>
        </Fragment>
      )
    );
  }
}

export default Promise;
