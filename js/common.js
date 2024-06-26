// header
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
    searchEl.classList.add("focused");
    searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
    searchEl.classList.remove("focused");
    searchInputEl.setAttribute("placeholder", "");
});

const headerEl = document.querySelector("header");
window.addEventListener("scroll", function () {
    console.log(this.scrollX);
    headerEl.style.left = -this.scrollX + "px";
    // headerEl.style.left = 300 + "px";
});

// footer
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
