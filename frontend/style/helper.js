import _ from 'lodash';
import { breakpoints } from './theme';

/**
 * @param {string} path
 * @param {any} defaultValue
 */
export const getTheme = (path, defaultValue) =>
  props => _.get(props, `theme.${path}`, defaultValue)
;

/**
 * @param {string} path
 * @param {any} defaultValue
 */
export const fromProps = propsName =>
  (props) => {
    const propValue = _.get(props, propsName);
    return _.get(props, `theme.${propsName}.${propValue}`, propValue);
  };

/**
 * @param {string} threshold
 */
export const media = (threshold, displayWay = 'max') => {
  const breakpoint = `${breakpoints[threshold]}px`;
  return `@media (${displayWay}-width: ${breakpoint})`;
};

