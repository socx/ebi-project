import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import FamilyTreeComponent from './FamilyTreeComponent';

import { API_ROOT, REMOTE_API_ROOT } from './constants/utils';

import './App.css';

const apiRoot = window.location.host.includes('localhost') ? API_ROOT : REMOTE_API_ROOT;

export default class AppMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      familyTreeNodes: [],
      selectedZoom: 1
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {debugger
    const selectedZoom = Number(value);
    const newState = {...this.state, selectedZoom};
    this.setState(newState);
  }

  componentDidMount() {
    fetch(`${apiRoot}/people/family-tree/1`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({familyTreeNodes: json});
      });
  }

  render() {
    const { familyTreeNodes } = this.state;
    const options = [
      { label: '100%', value: 1},
      { label: '50%', value: .5},
      { label: '25%', value: .25},
      { label: 'fit to screen', value: 0.1}
    ]
      return (
        <div>
          <Navbar variant="dark" bg="dark" expand="lg">
            <Container fluid>
              <Navbar.Brand href="#home">Family Tree App</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbar-dark-example" />
              <Navbar.Collapse id="navbar-dark-example">
                <Nav>
                  <NavDropdown
                    id="nav-dropdown-dark-example"
                    title="Zoom"
                    menuVariant="dark"
                    onSelect={this.handleChange}
                  >
                    {options.map(({ value, label}) => {
                      return <NavDropdown.Item eventKey={value}>{label}</NavDropdown.Item>
                    })}
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          

          <div className="flex-container">
            <div className="row"> 
              <div className="flex-item bg-dark">
                <h1 className="text-center text-light">Family Tree</h1>
              </div>
            </div>
          </div>
          <div style={{height: '100%'}}>
            {familyTreeNodes && familyTreeNodes.length &&
              <FamilyTreeComponent nodes={familyTreeNodes} selectedZoom={this.state.selectedZoom} />
            }
          </div>
        </div>
      );
  }
}

// import React, { useState, useEffect } from 'react';
// import FamilyTree from './mytree';


// const App = () => {

//   const [familyTreeNodes, setFamilyTreeNodes] = useState([]);

//   useEffect(() => {
//     fetch(`http://localhost:3009/api/people/family-tree/1`)
//       .then((response) => {
//         console.log(response);
//         setFamilyTreeNodes(response);
//       });
//   }, []);

//   return (
//      <div style={{height: '100%'}}>
//       {familyTreeNodes && familyTreeNodes.length > 0 &&
//         <FamilyTree nodes={familyTreeNodes} />
//       }
//      </div>
//   )
// }

// export default App;
