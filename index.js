let userInfo = new Promise((resolve, reject) => {
  fetch("./UsersInfo.json")
    .then((respond) => {
      return respond.json();
    })
    .then((data) => console.log(data))
    .catch((err) => {
      reject(err);
    });
});

let user = new Promise((resolve, reject) => {
  fetch("./Users.json")
    .then((respond) => {
      return respond.json();
    })
    .then((data) => console.log(data))
    .catch((err) => {
      reject(err);
    });
});
console.log(userInfo);

/**
 * For Scroll Sync
 */
const scrollers = document.getElementsByClassName("scroller");

const scrollerDivs = Array.prototype.filter.call(
  scrollers,
  function (testElement) {
    return testElement.nodeName === "DIV";
  }
);

function scrollAll(scrollLeft) {
  scrollerDivs.forEach(function (element, index, array) {
    element.scrollLeft = scrollLeft;
  });
}

scrollerDivs.forEach(function (element, index, array) {
  element.addEventListener("scroll", function (e) {
    scrollAll(e.target.scrollLeft);
  });
});

/**
 * End
 */
