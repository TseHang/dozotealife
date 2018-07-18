import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import { Row } from '~/components/Grid/Grid';

import { media, fromProps } from '~/style/helper';

import logoBg from '~/assets/Logo/logoBg.svg';

const Bg = styled(Row)`
  background: url(${logoBg}) no-repeat center/contain;
  width: 12vw;
  height: 90px;
  text-align: center;
  color: ${fromProps('color')};

  ${media('pad')} {
    width: 30vw;
  }

  ${media('mobile')} {
    width: 40vw;
  }
`;

const Text = styled.h2`
  ${media('pad')} {
    font-size: 1.5em;
  }
`;


const Title = ({
  title,
}) => (
  <Row inline center>
    <Bg color={'green'} inline center>
      <Text>{title}</Text>
    </Bg>
  </Row>
);

Title.propTypes = {
  title: string,
};

export default Title;