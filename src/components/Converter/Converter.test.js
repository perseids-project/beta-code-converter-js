import React from 'react';
import { render } from 'react-dom';

import Converter from './Converter';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  render(<Converter />, div);
});
