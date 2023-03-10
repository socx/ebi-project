import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import AnniversaryToasterComponent from './AnniversaryToasterComponent';

describe('AnniversaryToasterComponent', () => {

  const birthdayCelebrants = [
    '1st March - Joe Bloggs',
    '1th March - Peter Pan'
  ];

  test('renders the component', () => {
    const props = {
      birthdayCelebrants: birthdayCelebrants,
      isBirthdayToasterVisible: true,
      setIsBirthdayToasterVisible: ()=> {}
    };
    const container = render(<AnniversaryToasterComponent {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
