import React from 'react';
import styled, { css } from 'styled-components';
import { string, arrayOf, shape, number, func, object } from 'prop-types';

import { Row as row } from '~/components/Grid/Grid';

import { media, getTheme, fromProps } from '~/style/helper';

const Wrapper = styled.div`
  width: 70%;
  height: 50%;
  margin: 3% auto;
  ${media('pad')} {
    width: 90%;
    margin: 5% auto;
  }
`;

const Title = styled.h2`
  color: ${getTheme('color.orange')};
  margin-bottom: 3%;
  ${media('pad')} {
    margin-top: 5%;
  }
`;

const Img = styled.div`
  width: 100%;
  height: ${fromProps('height')};
  border: ${props => (props.border && `solid 2px ${props.theme.color.gray}`)};
  background: ${props => `url(${props.src})`} center no-repeat;
  background-size: ${fromProps('backgroundSize', 'contain')};
  transition: all .1s linear;
  
  ${props => !props.active && css`
    opacity: .4;
    cursor: pointer;
    border: none;
  `};
`;

const ActiveWrapper = styled.figure`
  width: 75%;
  text-align: center;

  > figcaption {
    margin-top: .5em;
  }

  ${media('pad')} {
    width: 100%;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;

    > ${Img} {
      max-height: 48vh;
    }
  }

  ${media('mobile')} {
    > ${Img} {
      max-height: 45vh;
    }
  }
`;

const ScrollWrapper = styled.div`
  width: 20%;
  margin: 0 auto;
  padding: 0 1%;
  max-height: 65vh;
  overflow: scroll;
  
  > ${Img} {
    margin-bottom: 8%;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  ${media('pad')} {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;

    width: 100%;
    height: 20vh;
    margin: 1em 0;
    padding: 0;

    > ${Img} {
      width: 25%;
      margin-right: 1em;
      flex: 0 0 auto;
    }
  }

  ${media('mobile')} {
    > ${Img} {
      width: 35%;
      margin-bottom: 1em;
    }
  }
`;

const Details = styled.div`
  color: ${getTheme('color.gray')};
  font-size: .8em;
  padding-right: 2%;
  text-align: right;
`;

const Row = row.extend`
  margin: 3% 0 1%;
`;


const Product = ({
  title,
  description,
  imgList,
  details,
  activeIdx,
  toggle,
}) => (
  <Wrapper>
    <Title>{title}</Title>
    <p>{description}</p>
    <Row>
      <ActiveWrapper>
        <Img src={imgList[activeIdx].src} height="65vh" active />
        <figcaption>{imgList[activeIdx].description}</figcaption>
      </ActiveWrapper>
      <ScrollWrapper>
        {imgList.map(({ src }, idx) => (
          <Img
            key={`product-${idx + 1}`}
            src={src}
            height="17vh"
            backgroundSize="cover"
            active={idx === activeIdx}
            onClick={() => toggle(idx)}
            border
          />
        ))}
      </ScrollWrapper>
    </Row>
    <Details>
      {details}
    </Details>
  </Wrapper>
);

Product.propTypes = {
  title: string,
  description: string,
  imgList: arrayOf(shape({
    src: string,
    description: string,
  })),
  details: object, /* eslint-disable-line react/forbid-prop-types */
  toggle: func,
  activeIdx: number,
};

export default Product;
