let toggleIcon = document.querySelector("#toggle");
let hideIcon = document.querySelector("#hide");
hideIcon.style = "display:none";

// const desktopNav = document.querySelector(".desktop--nav");
const mobileNav = document.querySelector(".mobile--nav");


const toggle = () => {
  toggleIcon.style = "display:none;";
  hideIcon.style = "display:block";
  // desktopNav.style = "display:block";
  mobileNav.style = "display: block";
};

const hide = () => {
  toggleIcon.style = "display:block;";
  hideIcon.style = "display:none";
  // desktopNav.style = "display:none";
  mobileNav.style = "display: none";
};