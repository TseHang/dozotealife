import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Block } from '~/components/Grid/Grid';
import { getTheme, media } from '~/style/helper';

const BgImg = styled.div.attrs({
  style: props => ({
    backgroundImage: `url(${props.src})`,
    backgroundPosition: props.position,
  }),
})`
  width: 100%;
  height: 100%;
  background: ${getTheme('color.gray')} no-repeat center/cover;
  clip-path: polygon(20% 0%, 5% 100%,90% 100%,90% 0%);
  transition: all .1s ease-in;
`;

const TextContainer = styled(Block)`
  position: absolute;
  justify-content: center;
  width: 35%;
  height: 80px;
  left: 0;
  top: 15%;
  padding: .5rem 1rem;
  background-color: white;
  border: solid 1px ${getTheme('color.gray')};
  transform: translateY(-7.5%);
  transition: all .15s ease-in;

  h2 {
    color: white;
    font-size: 1.3rem;
  }

  ${media('pad')} {
    width: 35%;
    height: auto;
  }
`;

const Shadow = styled(TextContainer)`
  background-color: ${getTheme('color.gray')};
  border: none;
  left: -8px;
  top: calc(15% - 8px);
  opacity: .5;
`;

const Wrapper = styled(Link)`
  display: block;
  position: relative;
  width: 100%;
  height: 250px;
  margin-bottom: 10%;

  &:hover {
    ${Shadow} {
      background-color: ${getTheme('color.orange')};
      opacity: 1;
    }

    ${BgImg} {
      transform: scale(.98);
    }

    ${TextContainer} {
      transform: translateX(-8px) translateY(110%);
    }

    ${Shadow} {
      display: flex;
      transform: translateY(-7.5%);
    }
  }

  ${media('pad')} {
    &:hover {
      ${TextContainer} {
        transform: translateX(-8px) translateY(0);
      }
    }
  }
`;

const Section = ({
  title,
  text,
  src,
  to,
  position,
}) => (
  <Wrapper to={to}>
    <Shadow>
      <h2>{title}</h2>
    </Shadow>
    <BgImg src={src} position={position} />
    <TextContainer>
      <p>{text}</p>
    </TextContainer>
  </Wrapper>
);

Section.propTypes = {
  title: string,
  text: string,
  src: string,
  position: string,
  to: string,
};

export default Section;
