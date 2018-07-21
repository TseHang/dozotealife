import React from 'react';
import { string } from 'prop-types';

import { fromProps, media } from '~/style/helper';
import { Content } from './Paragraph';

const BarContent = Content.extend`
  padding-left: 2em;
  > p {
    position: relative;
    margin-bottom: 5%;

    &:before {
      content : '';
      position: absolute;
      background-color: ${fromProps('infoColor')};
      left: -1.5em;
      top: -5%;
      width: 4px;
      height: 110%;
      border-radius: 5px;
    }

    &:first-child {
      margin-top: 3%;
    }

    ${media('pad')} {
      margin-bottom: 10%;
      &:before {
        left: -2em;
      }
      &:first-child {
        margin-top: 5%;
      }
    }

    ${media('mobile')} {
      margin-bottom: 15%;
      &:before {
        top: -2.5%;
        height: 105%;
      }
      &:first-child {
        margin-top: 10%;
      }
    }
  }

  ${media('pad')} {
    padding-left: 2.5em;
  }
`;

const InfoContent = ({
  infoColor,
  children,
}) => (
  <BarContent infoColor={infoColor}>
    {children}
  </BarContent>
);


InfoContent.propTypes = {
  infoColor: string,
};

export default InfoContent;
