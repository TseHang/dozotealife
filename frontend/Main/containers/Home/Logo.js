import React from 'react';
import styled from 'styled-components';

import { Block } from '~/components/Grid/Grid';
import svg from '~/components/SVG';

import RoundLogoSVG from '~/assets/Logo/logo-round.svg';
import subTitle from '~/assets/Logo/subLogo.svg';

const SVG = styled(svg)`
  width: 15%;
  margin: 2% auto;
`;

const SubTitle = styled.img`
  width: 20%;
  margin: 0 auto;
`;

const Logo = () => (
  <Block>
    <SVG src={RoundLogoSVG} />
    <SubTitle src={subTitle} />
  </Block>
);

export default Logo;
