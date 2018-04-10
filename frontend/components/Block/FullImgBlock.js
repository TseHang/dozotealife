import styled from 'styled-components';

const FullImageBlock = styled.div`
  position: relative;
  background: #F4F3F4 url(${props => props.src}) center center/cover no-repeat;
  width: 100%;
  height: ${props => props.height || '100vh'};
`;

export default FullImageBlock;
