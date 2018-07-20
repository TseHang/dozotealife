import styled, { css } from 'styled-components';
import { media, getTheme, fromProps } from '~/style/helper';

const noBottomMargin = css`
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Content = styled.div`
  line-height: 1.2;
  letter-spacing: 2px;
  background-color: ${fromProps('color', 'transparent')};
  
  > p {
    margin-bottom: 7%;
    ${props => props.noBottomMargin && noBottomMargin};
  }

  ${media('pad')} {
    line-height: 1.5;
  }
`;

export const ContentTitle = styled.h2`
  color: ${getTheme('color.orange')};
`;
