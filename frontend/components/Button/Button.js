import styled, { css } from 'styled-components';
import { getTheme } from '~/style/helper';

const radiusCss = css`
  border-radius: 15px;
`;

export default styled.button`
  display: inline-block;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  margin-left: .5rem;
  padding: .3rem .6rem;
  border: solid 1px ${getTheme('color.gray')};
  background-color: transparent;
  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0; top: 0;
    width: 100%; height: 100%;
    background-color: ${getTheme('color.orange')};
    animation: slideOut .3s forwards;
    z-index: -1;

    @keyframes slideOut {
      from { left: 0 }
      to { left: 100%; }
    }
  }
  
  &:hover {
    &:before {
      left: -100%;
      animation: slideIn .3s forwards;
      @keyframes slideIn {
        to { left: 0; }
      }
    }

    color: white;
    border-color: ${getTheme('color.orange')};
  }

  ${props => props.radius && radiusCss};
`;
