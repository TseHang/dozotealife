import React from 'react';
import styled from 'styled-components';
import { string, func, oneOfType } from 'prop-types';
import { Link as link } from 'react-router-dom';

import { fromProps, media, getTheme } from '~/style/helper';
import { Row as row } from '~/components/Grid/Grid';

import { showI18n } from '@/i18n';


const Row = styled(row)`
  padding-bottom: 5%;
  margin-bottom: 5%;
  border-bottom: ${getTheme('color.gray')} 1px solid;
  ${media('pad')} {
    margin-bottom: 8%;
  }
`;

const Title = styled.h2`
  color: ${fromProps('color')};
  margin-bottom: 1rem;
`;

const SubTitle = styled.p`
  padding-left: .5rem;
  font-weight: 700;
  margin-bottom: .75rem;
`;

const Context = styled.p`
  padding-left: .5rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
`;

const Img = styled.img`
  margin: 0 auto;
  width: 80%;

  ${media('pad')} {
    width: 100%;
    margin: 1rem auto;
  }
`;

const Div = styled.div`
  position: relative;
  width: 60%;
  padding: ${fromProps('padding')};

  ${media('pad')} {
    width: 100%;
  }
`;

const ImgDiv = Div.extend`
  display: flex;
  align-items: center;
  width: 40%;
`;

const Link = styled(link)`
  display: inline-block;
  position: relative;
  overflow: hidden;
  margin-left: .5rem;
  padding: .3rem .6rem;
  border-radius: 15px;
  border: solid 1px ${getTheme('color.gray')};
  background-color: transparent;
  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0; top: 0;
    width: 100%; height: 100%;
    background-color: ${getTheme('color.orange')};
    animation: slideOut .3s forwards;
    z-index: -1;

    @keyframes slideOut {
      from { left: 0 }
      to { left: 100%; }
    }
  }
  
  &:hover {
    &:before {
      left: -100%;
      animation: slideIn .3s forwards;
      @keyframes slideIn {
        to { left: 0; }
      }
    }

    color: white;
    border-color: ${getTheme('color.orange')};
  }
`;

const Card = ({
  title,
  subTitle,
  context,
  img,
  to,
}) => (
  <Row>
    <Div>
      <Title color="orange">{title}</Title>
      <SubTitle>{showI18n(subTitle)}</SubTitle>
      <Context>{showI18n(context)}</Context>
      <Link to={to} >
        更多
      </Link>
    </Div>
    <ImgDiv padding="0 1rem">
      <Img src={img} />
    </ImgDiv>
  </Row>
);

Card.propTypes = {
  title: oneOfType([string, func]),
  subTitle: oneOfType([string, func]),
  context: oneOfType([string, func]),
  img: string,
  to: string,
};

export default Card;

