const mockData = [
  { id: 1, fid: 5, mid:6, pids: [2], relationship: "Myself", gender: "male", name: "Sola Oderinde", img: "photos/1.jpg" },
  { id: 2, fid: 7, mid:8, pids: [1], relationship: "Wife", gender: "female", name: "Adesola Oderinde", img: "photos/2.jpg" },
  { id: 3, fid: 1, mid: 2, pids: [], tags: ["main_male_child"], relationship: "Child 1", gender: "male", name: "Theo Oderinde", img: "photos/3.jpg" },
  { id: 4, fid: 1, mid: 2, pids: [], tags: ["main_female_child"], relationship: "Child 2", gender: "female", name: "Talia Oderinde", img: "photos/4.jpg" },
  { id: 5, fid: null, mid: null, pids: [6], relationship: "Father", gender: "male", name: "Emmanuel Oderinde", img: "https://cdn.balkan.app/shared/m60/1.jpg" },
  { id: 6, mid: null, fid: null, pids: [5], relationship: "Mom", gender: "female", name: "Esther Oderinde", img: "photos/6.jpg" },
  { id: 7, pids: [8], relationship: "Father-in-law", gender: "male", name: "Christian Ajibola", img: "photos/7.jpg" },
  { id: 8, pids: [7], relationship: "Mother-in-law", gender: "female", name: "Omolara Ajibola", img: "https://cdn.balkan.app/shared/w60/9.jpg" },
  { id: 9, fid: 5, mid:6, pids: [], relationship: "Sister", gender: "female", name: "Oluwakemi Abejide", img: "photos/9.jpg" },
  { id: 10, fid: 5, mid:6, pids: [], relationship: "Brother", gender: "male", name: "Diran Oderinde", img: "photos/10.jpg" },
  { id: 11, fid: 5, mid:6, pids: [], relationship: "Sister", gender: "female", name: "Busayo Olabode-Dada", img: "photos/11.jpg" },
  { id: 12, fid: 7, mid:8, pids: [], relationship: "Brother-in-law", gender: "male", name: "Abiola Ajibola", img: "photos/10.jpg" },
  { id: 13, fid: 7, mid:8, pids: [], relationship: "Brother-in-law", gender: "male", name: "Adeola Ajibola", img: "photos/10.jpg" },
  { id: 14, fid: 7, mid:8, pids: [], relationship: "Sister-in-law", gender: "female", name: "Sinmi Gadi", img: "photos/11.jpg" },
  { id: 15, fid: 7, mid:8, pids: [], relationship: "Brother-in-law", gender: "male", name: "Adeoye Ajibola", img: "photos/10.jpg" },
  { id: 16, fid: 7, mid:8, pids: [], relationship: "Brother-in-law", gender: "male", name: "Ademola Ajibola", img: "photos/10.jpg" },
  
];

module.exports = { mockData };