import React from 'react';
import styled from 'styled-components';

import { Block } from '~/components/Grid/Grid';
import svg from '~/components/SVG';

import { media } from '~/style/helper';
import RoundLogoSVG from '~/assets/Logo/logo-round.svg';
import subTitle from '~/assets/Logo/subLogo.svg';

const SVG = styled(svg)`
  width: 15%;
  margin: 0 auto;
  ${media('pad')} {
    width: 25%;
  }
`;

const SubTitle = styled.img`
  width: 20%;
  margin: 2% auto 7%;
  ${media('pad')} {
    width: 30%;
  }
`;

const Logo = () => (
  <Block>
    <SVG src={RoundLogoSVG} />
    <SubTitle src={subTitle} />
  </Block>
);

export default Logo;
