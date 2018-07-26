import React, { PureComponent, Fragment } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import SlideImg from '@/components/PageTop/SlideImg';
import Title from '@/components/PageTop/Title';

import { Row as row } from '~/components/Grid/Grid';
import { ContentTitle } from '~/components/Paragraph/Paragraph';
import InfoContent from '~/components/Paragraph/InfoContent';
import LineLeftContent from '~/components/Paragraph/LineLeftContent';
import Motto from '~/components/Paragraph/Motto';
import AnimationButton from '~/components/Button/AnimationButton';
import SelectImg from '~/components/Block/SelectImg';

import { media } from '~/style/helper';

import sectionImg from '~/assets/img/section-promise.jpg';
import sgsImg from '~/assets/img/sgs.png';
import teaGardenImg from '~/assets/img/spirit-2.jpg';

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

const Row = row.extend`
  ${media('pad')} {
    > figure {
      width: 100%;
    }
  }
`;

class Promise extends PureComponent {
  state = { redirect: false }

  goProduct = () => this.setState({ redirect: true });

  render() {
    return (
      this.state.redirect ? <Redirect to="/product" push /> : (
        <Fragment>
          <SlideImg src={sectionImg} text={promiseString('slideTitle')} backgroundPosition="center 25%" />
          <Title title={promiseString('title')} />
          <ContentWrapper>
            <ParagraphTitle>{promiseString('promiseTitle')}</ParagraphTitle>
            <InfoContent infoColor="info">
              {showI18n(promiseString('promiseContent'))}
            </InfoContent>
          </ContentWrapper>
          <SelectImg src={sgsImg} description={promiseString('sgsImgDescription')} width="20%" />
          <Motto>{showI18n(promiseString('motto'))}</Motto>
          <ContentWrapper>
            <ParagraphLineTitle>{promiseString('seasonTitle')}</ParagraphLineTitle>
            <p>{showI18n(promiseString('seasonDescription'))}</p>
            <LineLeftContent>
              {showI18n(promiseString('seasonContent'))}
            </LineLeftContent>
          </ContentWrapper>
          <Row>
            <SelectImg src={teaGardenImg} description={promiseString('sgsImgDescription')} width="30%" />
            <SelectImg src={teaGardenImg} description={promiseString('sgsImgDescription')} width="30%" />
            <SelectImg src={teaGardenImg} description={promiseString('sgsImgDescription')} width="30%" />
          </Row>
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
