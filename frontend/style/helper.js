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
export const fromProps = (propsName, defaultValue) =>
  (props) => {
    const propsValue = _.get(props, propsName, defaultValue);
    return _.get(props, `theme.${propsName}.${propsValue}`, propsValue);
  };

/**
 * @param {string} threshold
 * @param {string} displayWay 'max' or 'min'
 */
export const media = (threshold, displayWay = 'max') => {
  const breakpoint = breakpoints[threshold];
  return `@media (${displayWay}-width: ${breakpoint}px)`;
};

