/**
 * Beat class that keeps track of playing the audio
 * HINT: Make sure to pass in the audioSrc as parameter to create a new audio track
 * HINT: Create a play function to play the audio if called
 */
class Beat {
  constructor(audioSRC) {
    this.audio = new Audio(audioSRC);
  }
  play = () => {
    this.audio.currentTime = 0;
    this.audio.play();
  };

  //   constructor(audioSrc) {
  //     this.audio = new Audio(audioSrc);
  //   }

  //   play = () => {
  //     this.audio.currentTime = 0;
  //     this.audio.play();
  //   };
}

/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
  constructor(color, keyCode) {
    this.color = color;
    this.keyCode = keyCode;
    this.element = document.getElementById(keyCode);
    this.setButtonColorInHTML();
    this.transitionEnd();
  }
  transitionEnd = () => {
    this.element.addEventListener("transitionend", () => {
      this.deselect();
    });
  };

  /**
   * Set the button color based on color specified
   */
  setButtonColorInHTML = () => {
    this.element.style.borderColor = this.color;
  };

  /**
   * Select function to set the background color and boxShadowa
   */
  select = () => {
    this.element.style.background = "#4ee243";
    this.element.style.border = "5px solid #4ee243";
    this.element.style.boxShadow = `0px 0px 17px 0px #4ee243`;
  };

  /**
   * Deselect function to reset background color and boxShadow
   */
  deselect = () => {
    this.element.style.background = "transparent";
    this.element.style.border = `5px solid ${this.color}`;
    this.element.style.boxShadow = "none";
    this.element.style.outline = "none";
  };
}
