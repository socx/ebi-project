import React, { Component } from 'react';

import FamilyTree from "@balkangraph/familytree.js";

import './templates/john';
import './templates/main';


export default class FamilyTreeComponent extends Component {

    constructor(props) {
        super(props);
        this.divRef = React.createRef();
    }

    componentDidUpdate () {debugger
        this.drawTree();
    }

    componentDidMount() {
        this.drawTree();
    }

    drawTree() {
        const { nodes, selectedZoom } = this.props;debugger
        this.family = new FamilyTree (this.divRef.current , {
            nodes: nodes,
            template: "main",
            scaleInitial: selectedZoom === 0.1 ? FamilyTree.match.boundary : selectedZoom,
            mouseScrool: FamilyTree.action.none,
            nodeMenu: {
                details: { text: "Details" }
            },
            orderBy: "id",
            editForm: {
                generateElementsFromFields: false,
                elements: [
                    // { type: 'textbox', label: 'Unique Family Id', binding: 'id'},
                    { type: 'textbox', label: 'First Name', binding: 'firstname'},
                    { type: 'textbox', label: 'Middle Name', binding: 'middlename'},
                    { type: 'textbox', label: 'Last Name', binding: 'surname'},
                    { type: 'textbox', label: 'Maiden Name', binding: 'maidenname'},
                    { type: 'textbox', label: 'Gender', binding: 'gender'},
                    { type: 'textbox', label: 'Date of Birth', binding: 'bdate'},
                    { type: 'textbox', label: 'Date of Death', binding: 'dod'}     
                ],
                buttons: {
                    edit: null,
                    share: {
                        icon: FamilyTree.icon.share(24, 24, '#fff'),
                        text: 'Share'
                    },
                    pdf: {
                        icon: FamilyTree.icon.pdf(24, 24, '#fff'),
                        text: 'Save as PDF'
                    },
                    remove: null
                }
            },
            orderBy: "orderId",
            tags: {
                "single_male": {
                    template: "single_male"
                },
                "single_female": {
                    template: "single_female"
                },
                "main_female_child": {
                    template: "main_female_child"
                },
                "main_male_child": {
                    template: "main_male_child"
                },
                "family_single_female": {
                    template: "family_single_female"
                },
                "family_single_male": {
                    template: "family_single_male"
                },
            },
            nodeBinding: {
                field_relation: "relationship",
                field_name: "name",
                field_bdate: "lifetime", //or use bdate
                field_id: "id",
                img_0: "img",
              }
        });
    }

    render() {
        return (
            <div id="tree" ref={this.divRef}></div>
        );
    }
}
