// section

const btn = document.querySelectorAll(".contents-box");
const cBox = document.querySelectorAll(".cibp");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    let target = btn[i].dataset.id;
    console.log(target);

    for (let x = 0; x < cBox.length; x++) {
      cBox[x].classList.add("hidden");
    }
    document.getElementById(target).classList.remove("hidden");

    for (let j = 0; j < btn.length; j++) {
      btn[j].classList.remove("active");
      btn[i].classList.add("active");
    }
  });
}

// //img carousel

const container = document.querySelector(".carousel-img-box-item");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

(function addEvent() {
  prevBtn.addEventListener("click", translateContainer.bind(this, 1));
  nextBtn.addEventListener("click", translateContainer.bind(this, -1));
})();

function translateContainer(direction) {
  const selectedBtn = direction === 1 ? "prev" : "next";
  container.style.transitionDuration = "1000ms";
  container.style.transform = `translateX(${direction * (100 / 1)}%)`;
  container.ontransitionend = () => reorganizeEl(selectedBtn);
}

function reorganizeEl(selectedBtn) {
  container.removeAttribute("style");
  selectedBtn === "prev"
    ? container.insertBefore(
        container.lastElementChild,
        container.firstElementChild
      )
    : container.appendChild(container.firstElementChild);
}
