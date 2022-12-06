const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

// load màu lên html
const loadhtml = (data) => {
  let content = "";
  data.forEach((color) => {
    content += `<button id=${color} class="color-button ${color}"></button>`;
  });
  return content;
};

let content = loadhtml(colorList);
document.getElementById("colorContainer").innerHTML = content;

// copy màu lên house
let house = document.getElementById("house");
const change = (data) => {
  data.forEach((color) => {
    document.getElementById(color).onclick = () => {
      house.setAttribute("class", "house " + color);
    };
  });
};
change(colorList);
