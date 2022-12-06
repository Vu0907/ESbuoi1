// spread operator
let str = document.getElementsByClassName("heading")[0].innerHTML;
let chars = [...str];

// tạo thẻ span
taoThespan = (chars) => {
  let content = "";
  chars.forEach((char) => {
    content += `<span>${char}</span>`;
  });
  return content;
};
// load lên html
let loadhtml = taoThespan(chars);
document.getElementsByClassName("heading")[0].innerHTML = loadhtml;
