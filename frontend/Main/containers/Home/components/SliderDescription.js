import React from 'react';
import styled from 'styled-components';
import { number, shape, string, func, oneOfType } from 'prop-types';

import { media, fromProps } from '~/style/helper';
import { showI18n } from '@/i18n';

const Container = styled.figcaption`
  position: absolute;
  left: ${fromProps('left')};
  top: ${fromProps('top')};

  color: ${fromProps('color')};
  z-index: 1;

  ${media('pad')} {
    position: static;
  }
`;

const Title = styled.h2``;

const Text = styled.p`
  margin-top: 5px;
  padding-left: 5px;
`;

const transformPosition = (key) => {
  switch (key) {
    case 0: return { left: '60%', top: '85%', color: 'white' };
    case 1: return { left: '5%', top: '27%', color: 'white' };
    case 2: return { left: '65%', top: '23%', color: 'black' };
    case 3: return { left: '5%', top: '20%', color: 'black' };
    default:
      return { left: '5%', top: '20%', color: 'white' };
  }
};

const SliderDescription = ({
  slideKey,
  description,
}) => (
  <Container {...transformPosition(slideKey, description)}>
    <Title>{description.title}</Title>
    <Text>{showI18n(description.text)}</Text>
  </Container>
);

SliderDescription.propTypes = {
  slideKey: number,
  description: shape({
    title: string,
    text: oneOfType([string, func]),
  }),
};

export default SliderDescription;
