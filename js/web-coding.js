// section

const coingBtn = document.querySelectorAll(".pj-menu-link");
const codingMain = document.querySelectorAll(".pj-main-view");

for (let i = 0; i < coingBtn.length; i++) {
  coingBtn[i].addEventListener("click", () => {
    let codingId = coingBtn[i].dataset.id;
    console.log(codingId);

    for (let x = 0; x < codingMain.length; x++) {
      codingMain[x].classList.add("hidden");
    }
    document.getElementById(codingId).classList.remove("hidden");
  });
}
