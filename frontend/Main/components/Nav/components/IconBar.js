import styled from 'styled-components';
import { fromProps } from '~/style/helper';

export default styled.div`
  width: 85%;
  height: 3px;
  margin-bottom: .35rem;
  background-color: ${fromProps('color')};
  transition: width .15s ease-in;

  &.short {
    width: 50%;
  }
`;
