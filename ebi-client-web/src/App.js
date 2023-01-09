import React, { Component } from 'react';
import FamilyTreeComponent from './FamilyTreeComponent';

import { API_ROOT, REMOTE_API_ROOT } from './constants/utils';

import './App.css';

const apiRoot = window.location.host.includes('localhost') ? API_ROOT : REMOTE_API_ROOT;

export default class AppMe extends Component {
  constructor(props) {
    super(props);
    this.state = { familyTreeNodes: [] };
  }

  componentDidMount() {
    console.log({apiRoot})
    fetch(`${apiRoot}/people/family-tree/1`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({familyTreeNodes: json});
      });
  }

  render() {
    const { familyTreeNodes } = this.state;
      return (
          <div style={{height: '100%'}}>
            {familyTreeNodes && familyTreeNodes.length &&
              <FamilyTreeComponent nodes={familyTreeNodes} />
            }
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
