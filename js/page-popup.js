const target = document.querySelectorAll(".btn_open");
const btnPopClose = document.querySelectorAll(".btn_close");
let targetID;

const bodyArea = document.querySelector("body");
let scrollPosition = 0;

// 팝업 열기
for (let i = 0; i < target.length; i++) {
  target[i].addEventListener("click", function () {
    targetID = target[i].getAttribute("href");
    document.querySelector(targetID).style.display = "block";

    scrollPosition = window.pageYOffset;
    bodyArea.style.overflow = "hidden";
    bodyArea.style.position = "fixed";
    bodyArea.style.top = `-${scrollPosition}px`;
    bodyArea.style.width = "100%";
  });
}

// 팝업 닫기
for (let j = 0; j < target.length; j++) {
  btnPopClose[j].addEventListener("click", function () {
    document.querySelector(targetID).style.display = "none";

    bodyArea.style.removeProperty("overflow");
    bodyArea.style.removeProperty("position");
    bodyArea.style.removeProperty("top");
    bodyArea.style.removeProperty("width");
    window.scrollTo(0, scrollPosition);
  });
}
