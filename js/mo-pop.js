const moBtn = document.querySelectorAll(".mo_btn_open");
const moBtnClose = document.querySelectorAll(".mo_btn_close");
let moBtnID;

// 팝업 열기
for (let i = 0; i < moBtn.length; i++) {
  moBtn[i].addEventListener("click", function () {
    moBtnID = moBtn[i].getAttribute("href");
    document.querySelector(moBtnID).style.display = "block";
    moBtn[i].classList.add("hidden");

    // 팝업 닫기
    for (let j = 0; j < moBtn.length; j++) {
      moBtnClose[j].addEventListener("click", function () {
        document.querySelector(moBtnID).style.display = "none";
        moBtn[i].classList.remove("hidden");
      });
    }
  });
}
