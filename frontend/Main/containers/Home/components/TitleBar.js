import React from 'react';
import styled from 'styled-components';
import { bool, string } from 'prop-types';

import { Row as row } from '~/components/Grid/Grid';

import subLogo from '~/assets/Logo/subLogo.svg';
import logoBg from '~/assets/Logo/logoBg.png';
import logoRow from '~/assets/Logo/logo-row.png';

const Row = styled(row)`
  padding-top: 2%;
`;

const Title = {
  Container: styled.div`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  `,

  Text: styled.p`
    text-align: center;
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
  `,
};

const SubTitle = styled.img`
  margin-left: auto;
  width: 17vw;
`;


const TitleBar = ({
  subTitle,
  title,
}) => (
  <Row inline>
    <Title.Container>
      <Title.Bg src={logoBg} />
      {/* <Title.Text>最新消息</Title.Text> */}
      <Title.Logo src={logoRow} />
    </Title.Container>
    <SubTitle src={subLogo} />
  </Row>
);

TitleBar.propTypes = {
  subTitle: bool,
  title: string,
};

export default TitleBar;
