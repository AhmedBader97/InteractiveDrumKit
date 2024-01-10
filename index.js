var numberOfDrumButtons = document.querySelectorAll(".drum").length;
const stick = document.querySelector(".stick");
const button = document.querySelector(".w");
const buttonRect = button.getBoundingClientRect();
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    KeyChosen(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    stickAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function (e) {
  KeyChosen(e.key);
  buttonAnimation(e.key);
});

function KeyChosen(key) {
  switch (key) {
    case "w":
      stick.style.transform = `translate(${buttonRect.left - 700}px, ${
        buttonRect.top - 350
      }px)rotate(-20deg)`;

      setTimeout(() => {
        stick.style.transform += " rotate(20deg)";
      }, 1000);

      setTimeout(() => {
        stick.style.transform += " rotate(-20deg)";
      }, 500);
      var audioW = new Audio("./sounds/tom-1.mp3");
      setTimeout(() => {
        audioW.play();
      }, 1300);

      break;

    case "a":
      stick.style.transform = `translate(${buttonRect.left - 500}px, ${
        buttonRect.top - 350
      }px)rotate(-20deg)`;

      setTimeout(() => {
        stick.style.transform += " rotate(20deg)";
      }, 1000);

      setTimeout(() => {
        stick.style.transform += " rotate(-20deg)";
      }, 500);
      var audioW = new Audio("./sounds/tom-2.mp3");
      setTimeout(() => {
        audioW.play();
      }, 1300);
      break;

    case "s":
      stick.style.transform = `translate(${buttonRect.left - 350}px, ${
        buttonRect.top - 350
      }px)rotate(-20deg)`;

      setTimeout(() => {
        stick.style.transform += " rotate(20deg)";
      }, 1000);

      setTimeout(() => {
        stick.style.transform += " rotate(-20deg)";
      }, 500);
      var audioW = new Audio("./sounds/tom-3.mp3");
      setTimeout(() => {
        audioW.play();
      }, 1300);
      break;

    case "d":
      stick.style.transform = `translate(${buttonRect.left - 350}px, ${
        buttonRect.top - 350
      }px)rotate(200deg)`;

      setTimeout(() => {
        stick.style.transform += " rotate(30deg)";
      }, 750);
      setTimeout(() => {
        stick.style.transform += " rotate(-30deg)";
      }, 1000);

      var audioW = new Audio("./sounds/tom-4.mp3");
      setTimeout(() => {
        audioW.play();
      }, 1300);
      break;

    case "j":
      stick.style.transform = `translate(${buttonRect.left - 200}px, ${
        buttonRect.top - 350
      }px)rotate(200deg)`;

      setTimeout(() => {
        stick.style.transform += " rotate(30deg)";
      }, 750);
      setTimeout(() => {
        stick.style.transform += " rotate(-30deg)";
      }, 1000);

      var audioW = new Audio("./sounds/snare.mp3");
      setTimeout(() => {
        audioW.play();
      }, 1300);
      break;

    case "k":
      stick.style.transform = `translate(${buttonRect.left - 50}px, ${
        buttonRect.top - 350
      }px)rotate(200deg)`;

      setTimeout(() => {
        stick.style.transform += " rotate(30deg)";
      }, 750);
      setTimeout(() => {
        stick.style.transform += " rotate(-30deg)";
      }, 1000);

      var audioW = new Audio("./sounds/crash.mp3");
      setTimeout(() => {
        audioW.play();
      }, 1300);
      break;

    case "l":
      stick.style.transform = `translate(${buttonRect.left - -111}px, ${
        buttonRect.top - 350
      }px)rotate(200deg)`;

      setTimeout(() => {
        stick.style.transform += " rotate(30deg)";
      }, 750);
      setTimeout(() => {
        stick.style.transform += " rotate(-30deg)";
      }, 1000);

      var audioW = new Audio("./sounds/kick-bass.mp3");
      setTimeout(() => {
        audioW.play();
      }, 1300);
      break;

    default:
      console.log("Invalid buttonInnerHTML");
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
