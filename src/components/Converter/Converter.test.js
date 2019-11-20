import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { render } from 'react-dom';

import Converter from './Converter';

it('renders without crashing', () => {
  const div = window.document.createElement('div');

  const component = (
    <MemoryRouter initialEntries={['/']}>
      <Route path="/" component={Converter} />
    </MemoryRouter>
  );

  render(component, div);
});
