const main = document.querySelector(".container__principal");
const progresBar = document.querySelector(".progresBar");

let animationProgres = () => {
  let progres = -main.getBoundingClientRect().top;

  let progresWidth =
    (progres /
      (main.getBoundingClientRect().height -
        document.documentElement.clientHeight)) *
    100;

  let values = Math.floor(progresWidth);
  console.log(values);

  progresBar.style.width = `${values}%`;

  if (values < 0) {
    progresBar.style.width = 0;
  }
};

window.addEventListener("scroll", animationProgres);
