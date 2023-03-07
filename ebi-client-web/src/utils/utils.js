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
  return date.getMonth() === (new Date()).getMonth();
}

export const getMonthlyBirthdayCelebrants = (people) => {
  return  people.filter((person) => {
    return person.dob && isBirthdayCurrentMonth(new Date(person.dob))
  });
}

export const getOrdinalSuffix = (number)  => {
  const j = number % 10;
  const k = number % 100;
  if (j == 1 && k != 11) {
    return `${number}st`;
  }
  if (j == 2 && k != 12) {
    return `${number}nd`;
  }
  if (j == 3 && k != 13) {
    return `${number}rd`;
  }
  return `${number}th`;
}