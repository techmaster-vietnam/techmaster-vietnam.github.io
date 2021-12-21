

// external js: isotope.pkgd.js
// init Isotope
var $grid = $('.gallery-container-image').isotope({
    itemSelector: '.gallery-image',
    layoutMode:'fitRows'
  });

  // bind filter button click
$('.gallery-filter').on('click', 'button', function() {
    var filterValue = $( this ).attr('data-type');
    filterValue = '.'+filterValue;
    $grid.isotope({ filter: filterValue });

  });
  
  // change is-checked class on buttons
$('#gallery-btn').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.active').removeClass('active');
      $( this ).addClass('active');
    });
  });
  