import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import { string } from 'prop-types';
import _ from 'lodash';

import { getTheme, fromProps } from '~/style/helper';

const Bg = styled.div`
  display: none;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${getTheme('color.navBgGray')};
`;

const viewCss = css`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
  margin: 0;

  > img {
    transition: all .3s linear;
    margin: 3% auto 0;
    height: 80%;
  }

  > ${Bg} {
    display: block;
    z-index: -1;
  }
`;

const Wrapper = styled.figure`
  position: relative;
  width: ${fromProps('width', '50%')};
  margin: 5% auto;
  text-align: center;
  > img {
    cursor: pointer;
    margin-bottom: 5px;
  }
  ${props => props.view && viewCss};
`;


class SelectImg extends PureComponent {
  static propTypes = {
    src: string.isRequired,
    description: string.isRequired,
    alt: string,
    width: string,
  }
  state = {
    view: false,
  }

  toggleView = () => this.setState({
    view: !this.state.view,
  })

  renderDescription() {
    const Description = this.props.description;
    if (_.isFunction(Description)) return <Description />;
    return Description;
  }

  render() {
    const { src, alt, width } = this.props;
    return (
      <Wrapper onClick={this.toggleView} width={width} view={this.state.view}>
        <Bg />
        <img src={src} alt={alt} />
        <figcaption>{this.renderDescription()}</figcaption>
      </Wrapper>
    );
  }
}

export default SelectImg;
