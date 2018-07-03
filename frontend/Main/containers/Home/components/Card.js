import React, { Fragment } from 'react';
import styled from 'styled-components';
import { string, func, oneOfType } from 'prop-types';
import { fromProps } from '~/style/helper';


import { showI18n } from '@/i18n';

const Title = styled.h2`
  color: ${fromProps('color')};
`;

const Card = ({
  title,
  subTitle,
  context,
}) => (
  <Fragment>
    <Title color="orange">{title}</Title>
    {showI18n(subTitle)}
    {showI18n(context)}
  </Fragment>
);

Card.propTypes = {
  title: oneOfType([string, func]),
  subTitle: oneOfType([string, func]),
  context: oneOfType([string, func]),
  // img: string,
};

export default Card;

