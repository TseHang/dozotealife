import styled from 'styled-components';
import { fromProps } from '~/style/helper';

const FullImageBlock = styled.div`
  position: relative;
  background: #F4F3F4 url(${fromProps('src')}) center center/cover no-repeat;
  width: 100%;
  height: ${fromProps('height', '100vh')};
`;

export default FullImageBlock;
