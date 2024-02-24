import React from 'react';
import ReactDOM from 'react-dom';
import Live from './Live';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Live />, div);
  ReactDOM.unmountComponentAtNode(div);
});