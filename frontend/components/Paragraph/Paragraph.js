import styled from 'styled-components';
import { media, getTheme } from '~/style/helper';

export const Content = styled.div`
  line-height: 1.2;
  letter-spacing: 2px;
  
  > p {
    margin-bottom: 7%;
  }

  ${media('pad')} {
    line-height: 1.5;
  }
`;

export const ContentTitle = styled.h2`
  color: ${getTheme('color.orange')};
`;
