/**
 * Handles parallax effect on front page.
 * 
 * Note: document.ready does not allow pictures to load.
 * Since the position of the .text-container divs rely
 * on that, we use the .on("load") function instead.
 **/ 

jQuery(window).on("load", function () { // Allows pictures to load

  // Create array for storing text-container locations
  var boxTops = [];

  //store the bottom of the veiwport
  var docViewBottom =
    jQuery(window).scrollTop() + jQuery(window).height();

  // Store the origional location of the text-container divs
  jQuery('.text-container').each(function (index, e) {
    boxTops.push(jQuery(this).offset().top);
  });

  // The magic! Fires every time the window is scrolled
  jQuery(window).scroll(function () {
    // Set width to trigger parallax effect
    if (window.matchMedia("(min-width: 768px)").matches) {
      var multiplier = .6;
      // Set the speed at which the boxes scroll for break-points
      if (window.matchMedia("(min-width: 576px)").matches) {
        var multiplier = .6;
      } else if (window.matchMedia("(min-width: 768px)").matches) {
        var multiplier = .6;
      } else if (window.matchMedia("(min-width: 960px)").matches) {
        var multiplier = .6;
      } else if (window.matchMedia("(min-width: 1200px)").matches) {
        var multiplier = .6;
      }

      // Find the bottom of the screen
      var wScroll = jQuery(this).scrollTop();
      var currentBottom = docViewBottom + wScroll;

      // Iterate through the text containers
      jQuery('.text-container').each(function (index, object) {

        // If the container is on screen, start the parallax
        if (currentBottom > boxTops[index]) {
          // Determine how much parallax we want.
          var scrollAmount = (currentBottom - boxTops[index]) * multiplier;
          // Make it happen!
          jQuery(object).css({
            'transform': 'translate(0px, -' + scrollAmount + 'px)'
          }); // Ends .css transformations
        } // Ends if 
      }); // Ends .each
    }// Ends the size check
  }); // Ends .scroll
}); // Ends .on(load)