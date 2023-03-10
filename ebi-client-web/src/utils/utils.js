import  dayjs from 'dayjs';

import {
  ANNIVERSARY_FIELD_BIRTHDAY,
} from './../constants/utils';


export const checkIfImageExists = (url, callback) => {
  const img = new Image();
  img.src = url;

  if (img.complete) {
    callback(true);
  } else {
    img.onload = () => {
      callback(true);
    };
    
    img.onerror = () => {
      callback(false);
    };
  }
}

export const getAnniversaryCelebrantsByMonth = (people, anniversaryField = ANNIVERSARY_FIELD_BIRTHDAY) => {
  const celebrants = people.filter((person) => {
    return person[anniversaryField] && (new Date(person[anniversaryField])).getMonth() === (new Date(Date.now())).getMonth();
  });

  return celebrants.map((celebrant) => {
    const birthDate = new Date(celebrant[anniversaryField]);
    const fullname = `${celebrant.firstname} ${celebrant.surname}`;
    const birthday = `${getOrdinalSuffix(dayjs(birthDate).format('D'))} ${dayjs(birthDate).format('MMMM')}`;
    return `${birthday} - ${fullname}`;
  });
}

export const getOrdinalSuffix = (number)  => {
  const modulusTen = number % 10;
  const modulusHundred = number % 100;
  if (modulusTen === 1 && modulusHundred !== 11) {
    return `${number}st`;
  }
  if (modulusTen === 2 && modulusHundred !== 12) {
    return `${number}nd`;
  }
  if (modulusTen === 3 && modulusHundred !== 13) {
    return `${number}rd`;
  }
  return `${number}th`;
}
