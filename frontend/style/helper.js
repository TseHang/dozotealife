import _ from 'lodash';

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

