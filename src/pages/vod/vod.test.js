import React from 'react';
import ReactDOM from 'react-dom';
import Vod from './Vod';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Vod />, div);
  ReactDOM.unmountComponentAtNode(div);
});