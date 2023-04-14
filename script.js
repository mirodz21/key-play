let beats = {
  65: {
    beat: new Beat("./assets/sfx/boink.mp3"),
    button: new Button("#e07b39", 65),
  },
  83: {
    beat: new Beat("./assets/sfx/TOINK.mp3"),
    button: new Button("#e07b39", 83),
  },
  68: {
    beat: new Beat("./assets/sfx/KIDS YEY.mp3"),
    button: new Button("#e07b39", 68),
  },
  70: {
    beat: new Beat("./assets/sfx/boxing-bell.mp3"),
    button: new Button("#e07b39", 70),
  },
  71: {
    beat: new Beat("./assets/sfx/camera-click.mp3"),
    button: new Button("#e07b39", 71),
  },
  72: {
    beat: new Beat("./assets/sfx/COMICAL LAUGH.mp3"),
    button: new Button("#e07b39", 72),
  },
  74: {
    beat: new Beat("./assets/sfx/Doorbell.mp3"),
    button: new Button("#e07b39", 74),
  },
  75: {
    beat: new Beat("./assets/sfx/AWW.mp3"),
    button: new Button("#e07b39", 75),
  },
  76: {
    beat: new Beat("./assets/sfx/Whip Impacts.mp3"),
    button: new Button("#e07b39", 76),
  },
};

/**
 * Function to play the beat upon a press of key
 * HINT: use the keyCode
 */
triggerBeat = (event) => {
  const key = event.keyCode;
  if (key in beats) {
    let keyPress = beats[key];
    keyPress.beat.play();
    keyPress.button.select();
  }
};

reply_click = (id) => {
  if (id in beats) {
    let btnPress = beats[id];
    btnPress.beat.play();
    btnPress.button.select();
  }
};
document.addEventListener("keydown", triggerBeat);
/**
 * Keydown listener to fire triggerBeat function
 * HINT: Log the keyCode of the key
 */
