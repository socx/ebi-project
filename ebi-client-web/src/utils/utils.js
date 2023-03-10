import * as dayjs from 'dayjs'

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

export const isBirthdayCurrentMonth = (date) => {
  return date.getMonth() === (new Date(Date.now())).getMonth();
}

export const getMonthlyBirthdayCelebrants = (people) => {
  return  people.filter((person) => {
    return person.dob && isBirthdayCurrentMonth(new Date(person.dob))
  });
}

export const getBirthdayCelebrantsList = (celebrants) => {
  return celebrants.map((celebrant) => {
    const birthDate = new Date(celebrant.dob);
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
