import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Div = styled.div`
  color: red;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <Div>
        <h1>Hello, World! Plz start!</h1>
      </Div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
