import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import * as dayjs from 'dayjs';

import BirthDayToasterComponent from './BirthDayToasterComponent';

describe('BirthDayToasterComponent', () => {

  const birthdayCelebrants = [
    '1st March - Joe Bloggs',
    '1th March - Peter Pan'
  ];

  test('renders the component', () => {
    jest.mock('dayjs', () => {
      format: jest.fn().mockImplementation((d) => d === 'D' ? '01' : 'March')
    })
    const props = {
      birthdayCelebrants: birthdayCelebrants,
      isBirthdayToasterVisible: true,
      setIsBirthdayToasterVisible: ()=> {}
    };
    const container = render(<BirthDayToasterComponent {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});