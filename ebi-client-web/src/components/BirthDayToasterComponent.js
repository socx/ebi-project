import React from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

import * as dayjs from 'dayjs'

import { getOrdinalSuffix } from './../utils/utils';

const BirthDayToasterComponent = (props) => {
  const { monthlyBirthdayCelebrants, isBirthdayToasterVisible, setIsBirthdayToasterVisible } = props;
  const birthdayCelebrants = monthlyBirthdayCelebrants.map((celebrant) => {
    const birthDate = new Date(celebrant.dob);
    const fullname = `${celebrant.firstname} ${celebrant.surname}`;
    const birthday = `${getOrdinalSuffix(dayjs(birthDate).format('D'))} ${dayjs(birthDate).format('MMMM')}`;
    return <li key={celebrant.id}>{`${birthday} - ${fullname}`}</li>
  });

  return (
    <>
      <ToastContainer position={'middle-center'}>
        <Toast bg={'dark'}
          onClose={setIsBirthdayToasterVisible}
          show={isBirthdayToasterVisible}
        >
          <Toast.Header>
            <img src='' className="rounded me-2" alt="" />
            <strong className="me-auto">Birthdays this month</strong>
            {/* <small className="text-muted">2 seconds ago</small> */}
          </Toast.Header>
          <Toast.Body className={'text-white'}>
            <p>The following have their birthdays coming up this month:-</p>
            <ul>
              {birthdayCelebrants}
            </ul>
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  )
}

export default BirthDayToasterComponent