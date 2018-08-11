import React from 'react';
import styled from 'styled-components';
import { string, func, oneOfType } from 'prop-types';

import { fromProps, media, getTheme } from '~/style/helper';
import { Row as row } from '~/components/Grid/Grid';
import Button from '~/components/Button/Button';

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

const Card = ({
  title,
  subTitle,
  context,
  img,
  handleClick,
}) => (
  <Row>
    <Div>
      <Title color="orange">{title}</Title>
      <SubTitle>{showI18n(subTitle)}</SubTitle>
      <Context>{showI18n(context)}</Context>
      <Button onClick={handleClick} radius>
        更多
      </Button>
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
  handleClick: func,
};

export default Card;

