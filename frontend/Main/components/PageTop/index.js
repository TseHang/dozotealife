import React from 'react';
import styled from 'styled-components';
import { bool, string } from 'prop-types';

import { getTheme, media } from '~/style/helper';
import { Row as row } from '~/components/Grid/Grid';

import subLogo from '~/assets/Logo/subTitle.svg';
import logoBg from '~/assets/Logo/logoBg.png';
import logoRow from '~/assets/Logo/logo-row.png';

const Row = styled(row)`
  height: 12vh;
  max-height: 90px;
  flex-wrap: nowrap;
  margin-bottom: 2vh;
`;

const Title = {
  Container: styled.div`
    position: relative;
    top: 4%;
    left: 50%;
    transform: translateX(-50%);
  `,

  Text: styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.4rem;
    font-weight: 700;
    color: ${getTheme('color.green')};
  `,

  Bg: styled.img`
    width: 30%;
    margin: auto;
  `,

  Logo: styled.img`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 10vw;

    ${media('pad')} {
      width: 24vw;
    }
  `,
};

const SubTitle = styled.img`
  margin-left: auto;
  width: 17vw;

  ${media('pad')} {
    display: none;
  }
`;


const getComponent = title => (title ? <Title.Text>{title}</Title.Text> : <Title.Logo src={logoRow} />);

const PageTop = ({
  title,
  subTitle,
}) => (
  <Row inline>
    <Title.Container>
      <Title.Bg src={logoBg} />
      {getComponent(title)}
    </Title.Container>
    {subTitle && <SubTitle src={subLogo} />}
  </Row>
);

PageTop.propTypes = {
  subTitle: bool,
  title: string,
};

export default PageTop;
