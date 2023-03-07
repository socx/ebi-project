import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const DemoModalComponent = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="help-demo-modal"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="help-demo-modal">
          Help
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Demo Video</h5>
        <p>
          This video shows how to navigate around the app.
        </p>
        <p>
          You can use the Zoom item in the navigation menu to resize the application.
        </p>
        <p>
          You can also click anywhere inside the app window and drag horizontally and/or vertically 
          to see parts of the family tree that may not visible at any time.
        </p>
        <video width="1000" height="750" preload="true" controls >
          <source src={require('./../videos/ebi_demo.mp4')} type="video/mp4"/>
        </video>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DemoModalComponent;
