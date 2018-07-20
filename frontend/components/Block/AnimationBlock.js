import React, { Fragment } from 'react';
import styled from 'styled-components';
import { arrayOf, oneOfType, string, number, object, func, bool } from 'prop-types';

import { fromProps, getTheme } from '~/style/helper';


const LineAnimation = styled.div`
  background-color: ${fromProps('color')};
`;

const TopLine = styled(LineAnimation)`
  position: absolute;
  height: 1px;
  width: 100%;
  top: 0px;
  transform: translateX(-150%);
  animation: slide-in-top 2.5s 0.7s infinite;
  @keyframes slide-in-top {
    to { transform: translateX(100%); }
  }
`;


const BottomLine = styled(LineAnimation)`
  position: absolute;
  height: 1px;
  width: 100%;
  bottom: 0px;
  left: 0;
  transform: translateX(150%);
  animation: slide-in-down 2.5s 0.7s infinite;
  @keyframes slide-in-down {
    to { transform: translateX(-100%); }
  }
`;

const RightLine = styled(LineAnimation)`
  position: absolute;
  height: 100%;
  width: 1px;
  right: 0px;
  transform: translateY(-150%);
  animation: slide-in-right 2.5s 0.7s infinite;
  @keyframes slide-in-right {
    to { transform: translateY(100%); }
  }
`;

const LeftLine = styled(LineAnimation)`
  position: absolute;
  height: 100%;
  width: 1px;
  left: 0;
  transform: translateY(150%);
  animation: slide-in-left 2.5s 0.7s infinite;
  @keyframes slide-in-left {
    to { transform: translateY(-100%); }
  }
`;

const Mask = styled.div`
  display: ${props => (props.active ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${fromProps('color')};
  top: 0;
  left: 100%;
  animation: slideOut .5s;

  @keyframes slideOut {
    from { left: 0; }
    to { left: 100%; }
  }
`;


const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border: solid 1px ${fromProps('color')};
  color: ${getTheme('color.black')};

  &:hover {
    color: ${props => (props.mask ? props.theme.color.white : props.theme.color.black)};
    ${Mask} {
      left: -100%;
      animation: slideIn .5s forwards;
      @keyframes slideIn {
        to { left: 0; }
      }
    }
  }

  ${props => props.css}
`;

const renderLines = (disabled) => {
  if (disabled) return '';

  return (
    <Fragment>
      <TopLine color="orange" />
      <BottomLine color="orange" />
      <RightLine color="orange" />
      <LeftLine color="orange" />
    </Fragment>
  );
};

const AnimationBlock = ({
  css,
  color,
  handleClick = () => {},
  disabled = false,
  mask = true,
  children,
}) => (
  <Wrapper css={css} onClick={handleClick} color={color}>
    {renderLines(disabled)}
    <Mask active={mask} color={color} />
    {children}
  </Wrapper>
);

AnimationBlock.propTypes = {
  css: arrayOf(oneOfType([
    number,
    string,
    object,
    func,
  ])),
  color: string,
  handleClick: func,
  disabled: bool,
  mask: bool,
};

export default AnimationBlock;
