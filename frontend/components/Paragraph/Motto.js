import styled from 'styled-components';

import { media, getTheme } from '~/style/helper';

export default styled.div`
  color: ${getTheme('color.gray')};
  margin: 10%;
  font-weight: 900;
  font-size: 1.5rem;
  letter-spacing: 4px;
  text-align: center;
  ${media('pad')} {
    margin: 25% 5%;
  }
`;

