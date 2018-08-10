import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

import { media, fromProps } from '~/style/helper';

const Iframe = styled.iframe`
  height: ${fromProps('height')}px;
  ${media('pad')} {
    height: ${props => parseInt(props.height, 10) * 0.7}px;
  }
`;

const Youtube = ({
  src,
  width = '100%',
  height = '420',
  ...props
}) => (
  <Iframe
    width={width}
    height={height}
    src={src}
    frameBorder="0"
    allow="autoplay; encrypted-media"
    allowFullscreen
    {...props}
  />
);

Youtube.propTypes = {
  src: string,
  width: string,
  height: string,
};

export default Youtube;
