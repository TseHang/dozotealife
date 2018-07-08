import React from 'react';
import { string } from 'prop-types';
import InlineSVG from 'react-inlinesvg';

const SVG = ({ src, ...props }) => (src ? (
  <InlineSVG src={src} {...props} />
) : null);

SVG.propTypes = {
  src: string,
};

export default SVG;
