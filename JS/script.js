let toogleIcon = document.querySelector("#toggle");
let hideIcon = document.querySelector("#hide");
hideIcon.style = "display:none";

const navButton = document.querySelector(".header__buttons");

const toggle = () => {
  toogleIcon.style = "display:none ;";
  hideIcon.style = "display:block";
  navButton.style = "display:block";
};

const hide = () => {
  toogleIcon.style = "display:block ;";
  hideIcon.style = "display:none";
  navButton.style = "display:none";
};