import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { Row as row } from '~/components/Grid/Grid';
import fullImg from '~/components/Block/FullImg';

import { media } from '~/style/helper';
import bg from '~/assets/img/bg.jpg';
import bg2 from '~/assets/img/bg2.jpg';

import Description from './SliderDescription';

const Row = styled(row)`
  ${media('pad')} {
    margin: 0;
  }
`;

const Figure = styled.figure`
  position: relative;
  width: 100%;
  height: 85vh;
  ${media('pad')} {
    height: 30vh;
  }
`;

const FullImg = styled(fullImg)`
  position: absolute;
  display: ${props => (props.active ? 'block' : 'none')};
  top: 0;
  left: 0;
`;

class Slider extends PureComponent {
  state = {
    description: 1,
  }
  render() {
    const { description } = this.state;
    return (
      <Row>
        <Figure>
          <FullImg src={bg} height={'100%'} active />
          <FullImg src={bg2} height={'100%'} active={false} />
        </Figure>
        <Description description={description} />
      </Row>
    );
  }
}

export default Slider;
