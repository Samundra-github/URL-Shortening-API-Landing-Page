let toogleIcon = document.querySelector("#toggle");
let hideIcon = document.querySelector("#hide");
hideIcon.style = "display:none";

const meueButton = document.querySelector(".header--buttons");

const toggle = () => {
  toogleIcon.style = "display:none ;";
  hideIcon.style = "display:block";
  meueButton.style = "display:block";
};

const hide = () => {
  toogleIcon.style = "display:block ;";
  hideIcon.style = "display:none";
  meueButton.style = "display:none";
};