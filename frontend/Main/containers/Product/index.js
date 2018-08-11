import React, { Fragment, PureComponent } from 'react';
import styled from 'styled-components';

import SlideImg from '@/components/PageTop/SlideImg';
import Title from '@/components/PageTop/Title';
import { i18nString, showI18n } from '@/i18n';

import { ContentTitle, Content } from '~/components/Paragraph/Paragraph';
import InfoContent from '~/components/Paragraph/InfoContent';
import Motto from '~/components/Paragraph/Motto';
import AnimationButton from '~/components/Button/AnimationButton';

import { media } from '~/style/helper';

import slideImg from '~/assets/img/section-product.jpg';

import Product from './Product';

import productList from './productList';

const ContentWrapper = styled.div`
  width: 70%;
  margin: 3% auto 5%;
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
  margin-bottom: 2%;
`;

const i18n = i18nString('product');
class ProductPage extends PureComponent {
  state = {
    /*
      [
        {
          activeIdx,
          max,
        }...
      ]
    */
    activeList: productList.map(product => ({
      activeIdx: 0,
      maxIdx: product.imgList.length - 1,
    })),
  }

  setActiveImg = productNo => (imgNo) => {
    const active = [...this.state.activeList];
    active[productNo].activeIdx = imgNo;
    this.setState({
      activeList: active,
    });
  }

  render() {
    return (
      <Fragment>
        <SlideImg src={slideImg} text={i18n('slideTitle')} backgroundPosition="center 27%" />
        <Title title={i18n('title')} />

        <ContentWrapper>
          <IntroContent color="bgLightOrange" noBottomMargin>{showI18n(i18n('introduceContent'))}</IntroContent>
        </ContentWrapper>

        <ContentWrapper>
          <ParagraphTitle>{i18n('sunMoonLake.title')}</ParagraphTitle>
          <p>{i18n('sunMoonLake.introduce')}</p>
          <InfoContent infoColor="info">
            {showI18n(i18n('sunMoonLake.content'))}
          </InfoContent>
        </ContentWrapper>

        {
          productList.map((product, productNo) => (
            <Product
              {...product}
              key={`product-${productNo + 1}`}
              activeIdx={this.state.activeList[productNo].activeIdx}
              toggle={this.setActiveImg(productNo)}
            />
          ))
        }

        <Motto>{showI18n(i18n('motto'))}</Motto>

        <AnimationButton
          color="orange"
          handleClick={() => window.open('https://www.zeczec.com/projects/dozotealife')} // [Todo] 放嘖嘖的網站
        >
            ~ 我要購買 ~
        </AnimationButton>
      </Fragment>
    );
  }
}

export default ProductPage;
