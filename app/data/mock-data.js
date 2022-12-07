const mockData = [
  { id: 1, fid: 5, mid:6,  pids: [2], relationship: "Myself", gender: "male", name: "Sola Oderinde", img: "photos/1.jpg" },
  { id: 2, fid: 7, mid:8, pids: [1], relationship: "Wife", gender: "female", name: "Adesola Oderinde", img: "photos/2.jpg" },
  { id: 3, fid: 1, mid: 2, pids: [], tags: ["main_male_child"], relationship: "Child 1", gender: "male", name: "Theo Oderinde", img: "photos/3.jpg" },
  { id: 4, fid: 1, mid: 2, pids: [], tags: ["main_female_child"], relationship: "Child 2", gender: "female", name: "Talia Oderinde", img: "photos/4.jpg" },
  { id: 5, fid: null, mid: null, pids: [6], relationship: "Father", gender: "male", name: "Emmanuel Oderinde", img: "https://cdn.balkan.app/shared/m60/1.jpg" },
  { id: 6, mid: null, fid: null, pids: [5], relationship: "Mom", gender: "female", name: "Esther Oderinde", img: "photos/6.jpg" },
  { id: 7, pids: [8], relationship: "Father in Law", gender: "male", name: "Christian Ajibola", img: "photos/7.jpg" },
  { id: 8, pids: [7], relationship: "Mother in Law", gender: "female", name: "Omolara Ajibola", img: "https://cdn.balkan.app/shared/w60/9.jpg" },
];

module.exports = { mockData };