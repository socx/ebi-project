"use strict";
const moment = require('moment');

const baseUrl = 'http://localhost:3008';

// const apiRoot = window.location.host.includes('localhost') ? API_ROOT : REMOTE_API_ROOT;

exports.getFamilyTree = async (req, res) => {
  const fs = require('fs');

  fs.readFile('./data/mock-data.json', (err, data) => {
    if (err) throw err;
    const familyTreeNodes = JSON.parse(data);

    const familyTree = familyTreeNodes.map((person) => ({
      ...person,
      name: `${getFullName(person)}`,
      bdate: `${getBDate(person.dob)}`,
      lifetime: `${person.dod ? getLifetime({dob: person.dob, dod: person.dod}) : getBDate(person.dob)}`,
      img: `${req.protocol}://${req.get('host')}/images/${person.id}.jpg`
    }));
    res.status(200).json(familyTree);
  });
};

const getFullName = (person) => {
  const { firstname, middlename, surname } = person;
  const middleInitials = middlename ? `${middlename.substring(0,1).toUpperCase()}.` : '';
  return `${firstname} ${middleInitials} ${surname}`;
}

const getBDate = (dob) => {
  return dob ? moment(dob).format('Do MMM yyyy') : '';
}

const getLifetime = ({dob, dod}) => {
  return `${dob ? moment(dob).format('yyyy') : ''} - ${dod ? moment(dod).format('yyyy') : ''}`;
}
