"use strict";

const moment = require("moment");
const { mockData } = require("../data/mock-data.js");

exports.getFamilyTree = async (_, res) => {
  const familyTreeNodes = mockData;
  res.status(200).json(familyTreeNodes);
};
