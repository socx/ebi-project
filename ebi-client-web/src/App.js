import React, { Component } from 'react';

import FamilyTreeComponent from './FamilyTreeComponent';
import DemoModalComponent from './components/DemoModalComponent';
import NavigationComponent from './components/NavigationComponent';
import BirthDayToasterComponent from './components/AnniversaryToasterComponent'; 

import {
  ANNIVERSARY_FIELD_BIRTHDAY,
  ANNIVERSARY_FIELD_WEDDING,
  API_ROOT,
  REMOTE_API_ROOT
} from './constants/utils';
import { getAnniversaryCelebrantsByMonth } from './utils/utils';

import './App.css';

const apiRoot = window.location.host.includes('localhost') ? API_ROOT : REMOTE_API_ROOT;

export default class AppMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anniversaryCelebrants: [],
      birthdayCelebrants:[],
      isAnniversaryToasterVisible: false,
      isBirthdayToasterVisible: false,
      isDemoModalVisible: false,
      familyTreeNodes: [],
      selectedZoom: 1,
    };
    this.selectedZoomChanged = this.selectedZoomChanged.bind(this);
    this.setIsDemoModalVisible = this.setIsDemoModalVisible.bind(this);
  }

  selectedZoomChanged(value) {
    const selectedZoom = Number(value);
    this.setState({...this.state, selectedZoom});
  }

  setIsDemoModalVisible(value) {
    const isDemoModalVisible = Boolean(value);
    this.setState({...this.state, isDemoModalVisible});
  }

  setIsBirthdayToasterVisible(value) {
    const isBirthdayToasterVisible = Boolean(value);
    this.setState({...this.state, isBirthdayToasterVisible});
  }

  setIsAnniversaryToasterVisible(value) {
    const isAnniversaryToasterVisible = Boolean(value);
    this.setState({...this.state, isAnniversaryToasterVisible});
  }

  componentDidMount() {
    fetch(`${apiRoot}/people/family-tree/1`)
      .then((response) => response.json())
      .then((json) => {
        const familyTreeNodes = json;
        const birthdayCelebrants = getAnniversaryCelebrantsByMonth(json, ANNIVERSARY_FIELD_BIRTHDAY);
        const isBirthdayToasterVisible = birthdayCelebrants.length > 0;
        const anniversaryCelebrants = getAnniversaryCelebrantsByMonth(json, ANNIVERSARY_FIELD_WEDDING);
        const isAnniversaryToasterVisible = anniversaryCelebrants.length > 0;
        this.setState({
          anniversaryCelebrants,
          birthdayCelebrants,
          familyTreeNodes,
          isAnniversaryToasterVisible,
          isBirthdayToasterVisible
        });
      });
  }

  render() {
    const {
      anniversaryCelebrants,
      birthdayCelebrants,
      isAnniversaryToasterVisible,
      isBirthdayToasterVisible,
      isDemoModalVisible,
      familyTreeNodes,
      selectedZoom
    } = this.state;

    return (
      <>
        <NavigationComponent
          data-testid='navigation-component'
          setIsDemoModalVisible={this.setIsDemoModalVisible}
          selectedZoomChanged={this.selectedZoomChanged}
        />

        <div className="flex-container">
          <h1 className="text-center text-light" data-testid='page-title'>Family Tree</h1>
        </div>
        <div style={{height: '100%'}}>
          {familyTreeNodes && familyTreeNodes.length &&
            <FamilyTreeComponent nodes={familyTreeNodes} selectedZoom={selectedZoom} />
          }
        </div>
        <DemoModalComponent
          backdrop="static"
          fullscreen={true}
          keyboard={false}
          show={isDemoModalVisible}
          onHide={() => this.setIsDemoModalVisible(false)}
        />
        {birthdayCelebrants && birthdayCelebrants.length &&
           <BirthDayToasterComponent
           isAnniversaryToasterVisible={isAnniversaryToasterVisible}
           isBirthdayToasterVisible={isBirthdayToasterVisible}
           birthdayCelebrants={birthdayCelebrants}
           anniversaryCelebrants={anniversaryCelebrants}
           setIsAnniversaryToasterVisible={() => this.setIsAnniversaryToasterVisible(false)}
           setIsBirthdayToasterVisible={() => this.setIsBirthdayToasterVisible(false)}
         />
        }
       
      </>
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
