import React from 'react';
import styled, { css } from 'styled-components';
import { string, arrayOf, shape, number, func, object } from 'prop-types';

import { Row as row } from '~/components/Grid/Grid';

import { getTheme, fromProps } from '~/style/helper';

const Wrapper = styled.div`
  width: 70%;
  height: 50%;
  margin: 3% auto;
`;

const Title = styled.h2`
  color: ${getTheme('color.orange')};
  margin-bottom: 3%;
`;

const Img = styled.div`
  width: 100%;
  height: ${fromProps('height')};
  background: ${props => `url(${props.src})`} center no-repeat;
  background-size: ${fromProps('backgroundSize', 'contain')};
  transition: all .1s linear;
  
  ${props => !props.active && css`
    opacity: .4;
    cursor: pointer;
  `};
`;

const ActiveWrapper = styled.figure`
  width: 75%;
  text-align: center;

  > figcaption {
    margin-top: .5em;
  }
`;

const Details = styled.div`
  color: ${getTheme('color.gray')};
  font-size: .8em;
  padding-left: 2%;
`;

const ScrollWrapper = styled.div`
  width: 25%;
  padding: 0 3%;
  max-height: 65vh;
  overflow-y: scroll;
  > ${Img} {
    margin-bottom: 8%;
  }
`;

const Row = row.extend`
  margin: 3% auto 1%;
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
