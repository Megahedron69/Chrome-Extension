let myleads = [];

const inputel = document.getElementById("input-el");
const inputbtn = document.getElementById("input-btn");
const delbtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("least");
const tabbtn = document.getElementById("tab-btn");

let leadsfromlocal = JSON.parse(localStorage.getItem("myleads"));
console.log("hello");
console.log(leadsfromlocal);
if (leadsfromlocal) {
  myleads = leadsfromlocal;
  renderleads();
}

tabbtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myleads.push(tabs[0].url);
    localStorage.setItem("myleads", JSON.stringify(myleads));
    renderleads();
  });
});

inputbtn.addEventListener("click", function () {
  myleads.push(inputel.value);
  inputel.value = "";
  localStorage.setItem("myleads", JSON.stringify(myleads));
  renderleads();
  console.log(localStorage.getItem("myleads"));
});

delbtn.addEventListener("click", function () {
  console.log("clicked");
  localStorage.clear();
  myleads = [];
  renderleads();
});

function renderleads() {
  let listItems = "";
  for (let i = 0; i < myleads.length; i++) {
    listItems += `<li class='list-group-item'><a href=' ${myleads[i]} ' target='_blank' class='oran'> ${myleads[i]} </a></li>`;
  }
  ulEl.innerHTML = listItems;
}
