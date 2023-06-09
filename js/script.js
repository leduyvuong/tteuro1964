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



