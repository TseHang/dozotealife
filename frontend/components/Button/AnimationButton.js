import React from 'react';
import { css as styledCss } from 'styled-components';
import { arrayOf, oneOfType, string, number, object, func } from 'prop-types';

import AnimationBlock from '~/components/Block/AnimationBlock';
import { fromProps, media } from '~/style/helper';

const btnCss = styledCss`
  cursor: pointer;
  width: 25%;
  margin: 5% auto 10%;
  padding: .6rem .8rem;
  text-align: center;
  color: ${fromProps('color')};

  &:hover {
    color: white;
  }

  ${media('pad')} {
    margin-top: 10%;
    margin-bottom: 20%;    
    width: 60%;
  }
`;

const AnimationButton = ({
  css = btnCss,
  ...props
}) => <AnimationBlock css={css} {...props} />;

AnimationButton.propTypes = {
  css: arrayOf(oneOfType([
    number,
    string,
    object,
    func,
  ])),
};

export default AnimationButton;
