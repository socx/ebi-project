import React from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';


const BirthDayToasterComponent = (props) => {
  const { birthdayCelebrants, isBirthdayToasterVisible, setIsBirthdayToasterVisible } = props;
  const birthdayList = birthdayCelebrants.map((celebrant, index) => {
    return <li key={index}>{celebrant}</li>
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
              {birthdayList}
            </ul>
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  )
}

export default BirthDayToasterComponent