jQuery(document).ready(function($) {
    
    
      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    
    
    
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
    
  }); 


  var flags = document.getElementsByClassName('flag_link');


  Array.prototype.forEach.call(flags, function(e){
    e.addEventListener('click', function(){
      var lang = e.getAttribute('data-lang'); 
      var languageSelect = document.querySelector("select.goog-te-combo");
      languageSelect.value = lang; 
      languageSelect.dispatchEvent(new Event("change"));

    }); 
  });
