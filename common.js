jQuery(document).ready(function($) {
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
