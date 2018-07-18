import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { media, fromProps } from '~/style/helper';
import fullImageBlock from '~/components/Block/FullImg';

const Mask = styled.div`
  width: 100%;
  height: 60vh;
  background: rgba(3, 3, 3, .4);
  transition: opacity .2s linear;

  ${media('pad')} {
    height: 50vh;
  }
`;

const Wrapper = styled(fullImageBlock)`
  position: relative;
  background-position: ${fromProps('backgroundPosition')};
  height: 60vh;
  margin-bottom: 5%;

  ${media('pad')} {
    height: 50vh;
  }
`;

const Content = styled.div` 
  position: absolute;
  color: ${fromProps('color')};
  left: 8%;
  bottom: 25%;
  font-size: 1.4em;
  font-weight: 500;
  letter-spacing: 4px;

  ${media('pad')} {
    font-size: 1.2em;
  }
`;

const SlideImg = ({
  src,
  text,
  backgroundPosition = 'center',
}) => (
  <Wrapper src={src} backgroundPosition={backgroundPosition}>
    <Mask />
    <Content color="white">{text}</Content>
  </Wrapper>
);

SlideImg.propTypes = {
  src: string.isRequired,
  text: string,
  backgroundPosition: string,
};

export default SlideImg;
