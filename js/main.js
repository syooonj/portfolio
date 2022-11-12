const content =
  "안녕하세요. \n 함께 변화하고 성장할 준비가 되어있는 신윤정입니다.";
const text = document.querySelector(".text");
let i = 0;

function sleep(delay) {
  const start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

function typing() {
  let txt = content[i++];
  text.innerHTML += txt === "\n" ? "<br/>" : txt;
  if (i > content.length) {
    text.textContent = "";
    i = 0;
    sleep(3000);
  }
}
setInterval(typing, 200);

//스크롤 페이지 이동

window.onload = function () {
  const elm = document.querySelectorAll(".pages");
  const elmCount = elm.length;
  elm.forEach(function (item, index) {
    item.addEventListener("wheel", function (event) {
      event.preventDefault();
      let delta = 0;

      if (!event) event = window.event;
      if (event.wheelDelta) {
        delta = event.wheelDelta / 120;
        if (window.opera) delta = -delta;
      } else if (event.detail) delta = -event.detail / 3;

      let moveTop = window.scrollY;
      let elmSelector = elm[index];

      // wheel down : move to next section
      if (delta < 0) {
        if (elmSelector !== elmCount - 1) {
          try {
            moveTop =
              window.pageYOffset +
              elmSelector.nextElementSibling.getBoundingClientRect().top;
          } catch (e) {}
        }
      }
      // wheel up : move to previous section
      else {
        if (elmSelector !== 0) {
          try {
            moveTop =
              window.pageYOffset +
              elmSelector.previousElementSibling.getBoundingClientRect().top;
          } catch (e) {}
        }
      }

      window.scrollTo({ top: moveTop, left: 0, behavior: "smooth" });
    });
  });
};

//스크롤 페이지 메뉴

$(".menu-btn").click(function (e) {
  var href = $(this).attr("href");

  var targetTop = $(href).offset().top;

  /*
  // 한번에 가도록 하는 방법
  $(window).scrollTop(targetTop);
  */

  $("html").stop().animate({ scrollTop: targetTop }, 300);

  e.preventDefault();
});

function Page__updateIndicatorActive() {
  var scrollTop = $(window).scrollTop();

  // 역순으로 검색해야 편하다
  $($(".pages").get().reverse()).each(function (index, node) {
    var $node = $(this);
    var offsetTop = parseInt($node.attr("data-offset-top"));

    if (scrollTop >= offsetTop) {
      // 기존 녀석에게 활성화 풀고
      $(".menu-item > a.active").removeClass("active");
      // 해당하는 녀석에게 활성화 넣고

      var currentPageIndex = $node.index();
      $(".menu-btn").eq(currentPageIndex).addClass("active");

      $("html").attr("data-current-page-index", currentPageIndex);

      return false; // 더 이상 다른 페이지를 검사하지 않는다.
    }
  });
}

// 각 페이지의 offsetTop 속성을 업데이트
function Page__updateOffsetTop() {
  $(".pages").each(function (index, node) {
    var $page = $(node);
    var offsetTop = $page.offset().top;

    $page.attr("data-offset-top", offsetTop);
  });

  // 계산이 바뀌었으니까, 다시 상태 업데이트
  Page__updateIndicatorActive();
}

function Page__init() {
  Page__updateOffsetTop();
}

// 초기화
Page__init();

// 화면이 리사이즈 할 때 마다, offsetTop을 다시계산
$(window).resize(Page__updateOffsetTop);

// 스크롤이 될 때 마다, 인디케이터의 상태를 갱신
$(window).scroll(Page__updateIndicatorActive);

//모바일 메뉴
const moMEnu = document.querySelector(".menu-area");
const topBtn = document.querySelector(".top-btn");

let headerMoving = (direction) => {
  let currentScrollValue = document.documentElement.scrollTop; //스크롤 위치 구하기
  console.log("currentScrollValue is " + currentScrollValue); //스크롤 위치 콘솔에 출력
  if (direction === "up") {
    moMEnu.style.display = "block";
    headerUp();
  } else if (direction === "down") {
    moMEnu.style.display = "none";
    headerDown();
  }
};

function headerDown() {
  let currentScrollValue = document.documentElement.scrollTop; //스크롤 위치 구하기
  console.log("currentScrollValue is " + currentScrollValue);
  if (moMEnu.style.display === "flex") {
    return;
  } //스크롤 위치 콘솔에 출력
  else if (currentScrollValue > 664) {
    topBtn.style.display = "block";
  }
}

function headerUp() {
  let currentScrollValue = document.documentElement.scrollTop; //스크롤 위치 구하기
  console.log("currentScrollValue is " + currentScrollValue);

  if (moMEnu.style.display === "flex") {
    return;
  } //스크롤 위치 콘솔에 출력
  else if (currentScrollValue < 665) {
    moMEnu.style.display = "none";
    topBtn.style.display = "none";
  }
}

let prevScrollTop = 0;

window.onscroll = () => {
  if (window.matchMedia("(max-width: 1400px)").matches == true) {
    let nextScrollTop = window.pageYOffset || 0; // pageYOffset -> IE 8 이하 빼고 다 됨.
    if (nextScrollTop > prevScrollTop) {
      headerMoving("down");
    } else if (nextScrollTop < prevScrollTop) {
      headerMoving("up");
    }
    prevScrollTop = nextScrollTop;
  }
};
