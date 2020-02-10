import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

it('renders the main page', () => {
  const component = <App />;
  const tree = renderer.create(component).toJSON();

  expect(tree).toMatchSnapshot();
});

it('converts Unicode to Beta Code', () => {
  const component = <App />;
  const rendered = renderer.create(component);
  rendered.root.findByProps({ placeholder: 'μῆνιν ἄειδε θεὰ ...' }).props.onChange({
    target: { value: 'κατέβην χθὲς εἰς Πειραιᾶ' },
  });
  const tree = rendered.toJSON();

  expect(tree).toMatchSnapshot();
});

it('converts Beta Code to Unicode', () => {
  const component = <App />;
  const rendered = renderer.create(component);
  rendered.root.findByProps({ placeholder: 'mh=nin a)/eide qea ...' }).props.onChange({
    target: { value: 'a)/ndra moi e)/nnepe' },
  });
  const tree = rendered.toJSON();

  expect(tree).toMatchSnapshot();
});
