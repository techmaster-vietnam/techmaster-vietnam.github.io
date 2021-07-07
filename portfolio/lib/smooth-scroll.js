// ------------ ------------ ------------ ------------ ------------ ------------
// Smooth Scroll - W3S  (Bỏ scroll-behavior ở trang main.css đi)
$(document).ready(function()
  {
    $("a").on('click', function(event)
      {
        if (this.hash !== "")
          {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({scrollTop: $(hash).offset().top}, 800, function()
                {
                  window.location.hash = hash;
                });
          }
      });
  });
