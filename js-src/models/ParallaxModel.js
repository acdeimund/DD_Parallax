
/**
 * @fileoverview
 * Class contains functions to retrieve information about the state of the
 * screen to be used for the parallax effect on the front page.
 **/

class ParallaxModel {

  constructor() {
    // Create array for storing text-container locations.
    let boxTops = [];

    // Store the location of the window bottom for use in the parallax effect.
    let windowBottom;

    // Get the initial location of the top of the text-containers and window bottom.
    this.updateBoxTops();
    this.updateWindowBottom();
  }

  /**
   * Updates the location of the top of '.text-container' divs.
   */

  updateBoxTops() {

    // Store the origional location of the '.text-container' divs
    jQuery('.text-container').each(element => {
      this.boxTops.push(jQuery(element).offset().top);
    });
  }

  /**
   * Updates the location of the bottom of the browser window.
   */

  updateWindowBottom(){
    this.windowBottom = jQuery(window).scrollTop() + jQuery(window).height();
  }
}

export { ParallaxModel };