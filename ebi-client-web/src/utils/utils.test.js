import dayjs from 'dayjs'

import {
  getAnniversaryCelebrantsByMonth,
  getOrdinalSuffix,
} from './utils';

import {
  ANNIVERSARY_FIELD_BIRTHDAY,
  ANNIVERSARY_FIELD_WEDDING,
  API_ROOT,
  REMOTE_API_ROOT
} from './../constants/utils';


describe('getAnniversaryCelebrantsByMonth', () => {
  beforeAll(() => {
    jest.spyOn(Date, 'now').mockImplementation(() => 1291939200000); // 2010-12-10
  });

  test('should return list of wedding anniversary celebrants', () => {
    const people = [
      {
        firstname: 'Joe',
        surname: 'Bloggs',
        dow: '1788-12-30'
      },
      {
        firstname: 'Jane',
        surname: 'Bloggs',
        dow: '1965-12-01'
      },
      {
        firstname: 'Peter',
        surname: 'Pan',
        dow: '2010-04-21'
      }
    ];

    const expectedList = [
      '30th December - Joe Bloggs',
      '1st December - Jane Bloggs',
    ];

    const actualList = getAnniversaryCelebrantsByMonth(people, ANNIVERSARY_FIELD_WEDDING);
    expect(actualList).toEqual(expectedList);
    expect(new Set(actualList)).toEqual(new Set(expectedList));
    expect(actualList).toEqual(expect.arrayContaining(expectedList));
  });

  test('should return list of birthday celebrants', () => {
    const people = [
      {
        firstname: 'Joe',
        surname: 'Bloggs',
        dob: '1891-12-31'
      },
      {
        firstname: 'Jane',
        surname: 'Bloggs',
        dob: '1988-12-03'
      },
      {
        firstname: 'Peter',
        surname: 'Pan',
        dob: '2010-04-21'
      }
    ];

    const expectedList = [
      '31st December - Joe Bloggs',
      '3rd December - Jane Bloggs',
    ];

    const actualList = getAnniversaryCelebrantsByMonth(people, ANNIVERSARY_FIELD_BIRTHDAY);
    expect(actualList).toEqual(expectedList);
    expect(new Set(actualList)).toEqual(new Set(expectedList));
    expect(actualList).toEqual(expect.arrayContaining(expectedList));
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
