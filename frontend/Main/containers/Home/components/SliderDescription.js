import React from 'react';
import styled from 'styled-components';
import { string, shape } from 'prop-types';

const Container = styled.div`
`;

const Title = styled.h2`
`;

const Text = styled.p`
`;

const transformPosition = (key) => {
  switch (key) {
    default:
      return { left: '10px', top: '' };
  }
};

const SliderDescription = ({
  imgKey,
  description,
}) => (
  <Container {...transformPosition(imgKey)}>
    <Title>Title{description.title}</Title>
    <Text>Text{description.text}</Text>
  </Container>
);

SliderDescription.propTypes = {
  imgKey: string,
  description: shape({
    title: string,
    text: string,
  }),
};

export default SliderDescription;
