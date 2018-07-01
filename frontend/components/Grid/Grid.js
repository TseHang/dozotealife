import styled from 'styled-components';
import { bool } from 'prop-types';
import { getTheme } from '~/style/helper';

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 ${getTheme('layout.left')};
  align-items: ${props => (props.inline ? 'center' : 'inherit')};
  justify-content: ${props => (props.center ? 'center' : 'flex-start')};
`;

Row.propTypes = {
  inline: bool,
  center: bool,
};

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 ${getTheme('layout.left')};
  align-items: ${props => (props.center ? 'center' : 'inherit')};
`;

Block.propTypes = {
  center: bool,
};
