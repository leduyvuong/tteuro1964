//<![CDATA[
let toggles = document.getElementsByClassName("toggle");
let contentDiv = document.getElementsByClassName("content");
let icons = document.getElementsByClassName("icon");

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener("click", () => {
    if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
      contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
      toggles[i].style.color = "#0084e9";
      icons[i].classList.remove("fa-plus");
      icons[i].classList.add("fa-minus");
    } else {
      contentDiv[i].style.height = "0px";
      toggles[i].style.color = "#111130";
      icons[i].classList.remove("fa-minus");
      icons[i].classList.add("fa-plus");
    }

    for (let j = 0; j < contentDiv.length; j++) {
      if (j !== i) {
        contentDiv[j].style.height = 0;
        toggles[j].style.color = "#111130";
        icons[j].classList.remove("fa-minus");
        icons[j].classList.add("fa-plus");
      }
    }
  });
}
//]]>

// function hoverOn() {
//     document.getElementById('sidebar-hidden').hidden = false
// }
// function hoverOut() {
//     document.getElementById('sidebar-hidden').hidden = true
// }
var lastActive = 5;
var max = document.getElementsByClassName("tableSection")[0].rows.length;

function load_more() {
  for (let i = 1; i < lastActive; i++) {
    document
      .getElementsByClassName("tableSection")[0]
      .rows[i].classList.add("active");
  }
}

load_more();

document.getElementById("load_more").addEventListener("click", function (e) {
  e.preventDefault();
  lastActive = lastActive + 10;
  if (lastActive >= max) {
    this.classList.add("hidden");
    document.getElementById('minus').classList.remove('hidden')
  }
  load_more();
});

document.getElementById("minus").addEventListener("click", function (e) {
  var rows = document.getElementById('table-hoadon').rows.length
  if (rows > 10) {
    rows = 10
  }

  for (let i = rows; i > 4; i--) {
    document
      .getElementById("table-hoadon")
      .rows[i].classList.remove("active");
    document
      .getElementById("table-hoadon")
      .rows[i].classList.add("hidden");

    document.getElementById('minus').classList.add('hidden')
    document.getElementById('load_more').classList.remove('hidden')
  }
});

document.getElementById("btn-back").addEventListener("click", function () {
  scroll(0, 0);
});

var price_elements = document.getElementsByClassName("price");
var total = 0;
for (let i = 0; i < price_elements.length; i++) {
  total =
    total + parseInt(document.getElementsByClassName("price")[0].dataset.price);
}
document.getElementById("total_amount").innerText = total;

document.getElementById("total").innerText =
  parseInt(document.getElementById("total_amount").textContent) +
  parseInt(document.getElementById("vat").textContent);



