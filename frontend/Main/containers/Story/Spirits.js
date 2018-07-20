import React from 'react';
import styled, { css } from 'styled-components';
import { func } from 'prop-types';

import { showI18n } from '@/i18n';

import { media, getTheme } from '~/style/helper';
import AnimationBlock from '~/components/Block/AnimationBlock';

import leftIcon from '~/assets/Icon/left.svg';
import rightIcon from '~/assets/Icon/right.svg';

const LeftIcon = styled.img`
  position: absolute;
  width: 20%;
  left: 5px;
  bottom: 0;
  transform: translateX(-100%);
`;

const RightIcon = styled.img`
  position: absolute;
  width: 20%;
  right: 5px;
  top: 0;
  transform: translateX(100%);
`;

const blockCss = css`
  color: ${getTheme('color.gray')};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 30%;
  margin: 3% auto 5%;
  padding: 5% 3%;
  font-weight: 400;
  font-size: 1.1em;
  line-height: 1.5;

  overflow: visible;
  box-shadow: 12px -10px 5px 2px #F8F8F8;

  > p {
    margin-bottom: 13%;
  }

  ${media('pad')} {
    width: 70%;
  }
`;

const HandWriting = styled.div`
  margin-left: auto;
  font-size: 1.1rem;
  font-style: italic;
  font-family: 'Yellowtail', cursive;
`;

const Spirits = ({
  content,
}) => (
  <AnimationBlock css={blockCss} color="orange" mask={false} disabled>
    {showI18n(content)}
    <HandWriting>
      Dozo Tea Life<br />
      Let&rsquo;s drink warm
    </HandWriting>
    <LeftIcon src={leftIcon} />
    <RightIcon src={rightIcon} />
  </AnimationBlock>
);

Spirits.propTypes = {
  content: func,
};

export default Spirits;
