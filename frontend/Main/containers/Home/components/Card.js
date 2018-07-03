import React from 'react';
import styled from 'styled-components';
import { string, func, oneOfType } from 'prop-types';
import { Link as link } from 'react-router-dom';

import { fromProps, media, getTheme } from '~/style/helper';
import { Row as row } from '~/components/Grid/Grid';
import SVG from '~/components/SVG';

import { showI18n } from '@/i18n';

import linkIcon from '~/assets/Icon/link.svg';


const Row = styled(row)`
  margin: 0;
  margin-bottom: 3%;
`;

const Title = styled.h2`
  color: ${fromProps('color')};
  margin-bottom: 1rem;
`;

const SubTitle = styled.p`
  font-weight: 700;
  margin-bottom: .75rem;
`;

const Context = styled.p`
  padding-left: 1.5rem;
  line-height: 1.5;
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
  width: 50%;
  padding: ${fromProps('padding')};

  ${media('pad')} {
    width: 100%;
  }
`;

const Link = styled(link)`
  position: absolute;
  left: 1.5rem;
  bottom: 10px;
  max-width: 50px;
  svg {
    width: 40%;
  }
  &:hover {
    rect {
      fill: ${getTheme('color.orange')}
    }
  }
`;

const Card = ({
  title,
  subTitle,
  context,
  img,
}) => (
  <Row>
    <Div>
      <Title color="orange">{title}</Title>
      <SubTitle>{showI18n(subTitle)}</SubTitle>
      <Context>{showI18n(context)}</Context>
      <Link to="/product" >
        <SVG src={linkIcon} />
      </Link>
    </Div>
    <Div padding="0 1rem">
      <Img src={img} />
    </Div>
  </Row>
);

Card.propTypes = {
  title: oneOfType([string, func]),
  subTitle: oneOfType([string, func]),
  context: oneOfType([string, func]),
  img: string,
};

export default Card;
