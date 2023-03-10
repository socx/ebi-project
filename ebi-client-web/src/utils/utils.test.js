import {
  isBirthdayCurrentMonth,
  getMonthlyBirthdayCelebrants,
  getOrdinalSuffix,
} from './utils';

import * as utils from './utils';


describe('isBirthdayCurrentMonth', () => {
  beforeAll(() => {
    jest.spyOn(Date, 'now').mockImplementation(() => 1401667200000); // 2014-06-02
  });

  afterAll(() => {
    jest.restoreAllMocks
  });

  test('should return true for correct data', () => {
    expect(isBirthdayCurrentMonth(new Date('2019-06-27'))).toBe(true);
  });
  
  test('should return false for correct data', () => {
    expect(isBirthdayCurrentMonth(new Date('2018-10-27'))).toBe(false);
  });
});

describe('getMonthlyBirthdayCelebrants', () => {
  beforeAll(() => {
    jest.spyOn(Date, 'now').mockImplementation(() => 1401667200000); // 2014-06-02
  });

  afterAll(() => {
    jest.restoreAllMocks
  });
  
  test('should return the birthday failling within the current month', () => {
    const people = [
      {
        firstname: 'Joe',
        surname: 'Bloggs',
        dob: '1914-06-01'
      },
      {
        firstname: 'Jane',
        surname: 'Bloggs',
        dob: '1978-10-01'
      },
      {
        firstname: 'Peter',
        surname: 'Pan',
        dob: '2017-06-11'
      }
    ];

    const expectedBirthdays = [
      {
        firstname: 'Joe',
        surname: 'Bloggs',
        dob: '1914-06-01'
      },
      {
        firstname: 'Peter',
        surname: 'Pan',
        dob: '2017-06-11'
      }
    ];
    expect(getMonthlyBirthdayCelebrants(people)).toStrictEqual(expectedBirthdays);
  });
});

describe('getOrdinalSuffix', () => {
  test('should return 1st for 1', () => {
    expect(getOrdinalSuffix(1)).toBe('1st');
  });

  test('should return 32nd for 32', () => {
    expect(getOrdinalSuffix(32)).toBe('32nd');
  });

  test('should return 173rd for 173', () => {
    expect(getOrdinalSuffix(173)).toBe('173rd');
  });

  test('should return 100th for 100', () => {
    expect(getOrdinalSuffix(100)).toBe('100th');
  });
});