var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var bass = new Audio("./assets/sounds/OGEV1 808 1.wav");
      bass.play();
      break;

    case "a":
      var kick = new Audio("./assets/sounds/OGEV1 Kick 1.wav");
      kick.play();
      break;

    case "s":
      var clap = new Audio("./assets/sounds/OGEV1 Clap 1.wav");
      clap.play();
      break;

    case "d":
      var hihat = new Audio("./assets/sounds/OGEV1 HiHat 1.wav");
      hihat.play();
      break;

    case "j":
      var snare = new Audio("./assets/sounds/OGEV1 Snare 1.wav");
      snare.play();
      break;

    case "k":
      var ophat = new Audio("./assets/sounds/OGEV1 OpHat 1.wav");
      ophat.play();
      break;

    case "l":
      var perc = new Audio("./assets/sounds/OGEV1 Perc 1.wav");
      perc.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
