import React from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';


const AnniversaryToasterComponent = (props) => {
  const {
    anniversaryCelebrants,
    birthdayCelebrants,
    isAnniversaryToasterVisible,
    isBirthdayToasterVisible,
    setIsAnniversaryToasterVisible,
    setIsBirthdayToasterVisible
  } = props;
  const birthdayList = birthdayCelebrants && birthdayCelebrants.length &&
    birthdayCelebrants.map((celebrant, index) => {
      return <li key={index}>{celebrant}</li>
    });

  const anniversaryList = anniversaryCelebrants && anniversaryCelebrants.length &&
    anniversaryCelebrants.map((celebrant, index) => {
      return <li key={index}>{celebrant}</li>
    });

  return (
    <>
      <ToastContainer position={'middle-center'}>
        {birthdayCelebrants && birthdayCelebrants.length > 0 &&
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
        }
        {anniversaryCelebrants && anniversaryCelebrants.length > 0 &&
          <Toast bg={'dark'}
            onClose={setIsAnniversaryToasterVisible}
            show={isAnniversaryToasterVisible}
          >
            <Toast.Header>
              <img src='' className="rounded me-2" alt="" />
              <strong className="me-auto">Wedding anniversaries this month</strong>
              {/* <small className="text-muted">2 seconds ago</small> */}
            </Toast.Header>
            <Toast.Body className={'text-white'}>
              <p>The following have their anniversaries coming up this month:-</p>
              <ul>
                {anniversaryList}
              </ul>
            </Toast.Body>
          </Toast>
        }
      </ToastContainer>
    </>
  )
}

export default AnniversaryToasterComponent;
