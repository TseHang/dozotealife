import React from 'react';
import styled from 'styled-components';

import { fromProps } from '~/style/helper';
import { Content } from './Paragraph';

const Wrapper = styled.div`
  position: relative;
  border-left: dashed 2px ${fromProps('color')};
  padding: 2em 0 1em 3em;
`;

const Dot = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  left: -1px;
  top: 0;
  transform: translate(-50%, -50%);
  background-color: ${fromProps('color')};
`;

const LineLeftContent = ({
  children,
}) => (
  <Wrapper color="orange">
    <Dot color="orange" />
    <Content>
      {children}
    </Content>
  </Wrapper>
);

export default LineLeftContent;
