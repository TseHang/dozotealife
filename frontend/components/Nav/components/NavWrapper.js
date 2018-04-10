import styled from 'styled-components';

export default styled.nav`
  position: fixed;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 8%;
  background-color: ${props => props.theme.color.navBgGray};
  color: ${props => props.theme.color.mainGreen};
`;
