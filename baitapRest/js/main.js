getEle = (id) => {
  return document.getElementById(id);
};

// hàm tính điểm trung bình
const tinhDiemtrungbinh = (...numbers) => {
  let average = 0;
  numbers.forEach((number) => {
    average += number / numbers.length;
  });
  return average;
};

// button tính 1
getEle("btnKhoi1").onclick = () => {
  let diemToan = getEle("inpToan").value * 1;
  let diemLy = getEle("inpLy").value * 1;
  let diemHoa = getEle("inpHoa").value * 1;
  let average = tinhDiemtrungbinh(diemToan, diemLy, diemHoa);
  getEle("tbKhoi1").innerHTML = average;
};

// button tính 2
getEle("btnKhoi2").onclick = () => {
  let diemVan = getEle("inpVan").value * 1;
  let diemSu = getEle("inpSu").value * 1;
  let diemDia = getEle("inpDia").value * 1;
  let diemEnglish = getEle("inpEnglish").value * 1;
  let average = tinhDiemtrungbinh(diemVan, diemSu, diemDia, diemEnglish);
  getEle("tbKhoi2").innerHTML = average;
};
