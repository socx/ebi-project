import { isBirthdayCurrentMonth, getMonthlyBirthdayCelebrants } from './utils';

describe('isBirthdayCurrentMonth', () => {
  test('should return true for correct data', () => {
    expect(isBirthdayCurrentMonth((new Date()))).toBe(true);
  });
  
  test('should return false for correct data', () => {
    expect(isBirthdayCurrentMonth((new Date('2018-10-27')))).toBe(false);
  });
});

describe('getMonthlyBirthdayCelebrants', () => {
  test('should return the birthday failling within the current month', () => {
    // This test will fail when the month changes need to rewrite to be dynamic.
    const people= [
      {
        firstname: 'Joe',
        surname: 'Bloggs',
        dob: '1914-03-01'
      },
      {
        firstname: 'Jane',
        surname: 'Bloggs',
        dob: '1978-10-01'
      },
      {
        firstname: 'Peter',
        surname: 'Pan',
        dob: '2017-03-11'
      }
    ];

    const expectedBirthdays = [
      {
        firstname: 'Joe',
        surname: 'Bloggs',
        dob: '1914-03-01'
      },
      {
        firstname: 'Peter',
        surname: 'Pan',
        dob: '2017-03-11'
      }
    ];
    expect(getMonthlyBirthdayCelebrants(people)).toStrictEqual(expectedBirthdays);
  });
  
});