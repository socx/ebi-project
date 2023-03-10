import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const options = [
  { label: '25%', value: .25 },
  { label: '50%', value: .5 },
  { label: '75%', value: .75 },
  { label: '100%', value: 1 },
];

const NavigationComponent = ({selectedZoomChanged, setIsDemoModalVisible}) => {
  return (
    <>
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              data-testid="navbar-brand-image"
              alt=""
              src={require('./../images/logo.svg')}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Family Tree App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark" />
          <Navbar.Collapse id="navbar-dark">
            <Nav>
              <Nav.Link
                onClick={()=> setIsDemoModalVisible(true) }
              >
                Help
              </Nav.Link>
              <NavDropdown
                id="nav-dropdown-dark"
                title="Zoom"
                menuVariant="dark"
                onSelect={selectedZoomChanged}
              >
                {options.map(({ value, label}) => {
                  return <NavDropdown.Item key={value} eventKey={value}>{label}</NavDropdown.Item>
                })}
                <NavDropdown.Divider />
                <NavDropdown.Item key="0.1" eventKey="0.1">Fit to Screen</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavigationComponent
