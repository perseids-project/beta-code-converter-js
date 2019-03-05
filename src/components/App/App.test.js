import React from 'react';
import { render } from 'react-dom';

import App from './App';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  render(<App />, div);
});
