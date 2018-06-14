import createHistory from 'history/createBrowserHistory';

const history = createHistory();

export default history;

export function goToParent(location) {
  history.push(location.pathname.replace(/\/[^/]+$/, ''));
}
