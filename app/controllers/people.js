"use strict";

const moment = require("moment");
const { mockData } = require("../data/mock-data.js");

const baseUrl = 'http://localhost:3008';

exports.getFamilyTree = async (_, res) => {
  const familyTreeNodes = mockData;
  const familyTree = familyTreeNodes.map((ft) => ({...ft, img: `${baseUrl}/images/${ft.id}.jpg`}));
  res.status(200).json(familyTree);
};
