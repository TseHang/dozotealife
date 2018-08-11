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

const Div = styled.div`
  text-align: center;
  font-size: .9em;
`;

const Youtube = ({
  src,
  width = '100%',
  height = '420',
  text,
}) => (
  <Div>
    <Iframe
      width={width}
      height={height}
      src={src}
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullscreen
    />
    <p>{text}</p>
  </Div>
);

Youtube.propTypes = {
  src: string,
  width: string,
  height: string,
  text: string,
};

export default Youtube;
