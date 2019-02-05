
// on page load, copies the link HTML into the dropdown
$('.dropdown').html($('.links').html());

// on page load, create the popup
$('body').append(`
  <div id="popup-container" class="hidden">
    <div id="signup-popup">
      More info coming soon!
      <a class="button blue">OK</a>
    </div>
  </div>
`);

$('.hamburger').click(function () {
  $('.dropdown').toggleClass('expand');
});

$('#signup-popup a').click(function () {
  $('#popup-container').addClass('hidden');
});

// when user clicks on .cta, show "coming soon" popup
$('.cta').click(function (e){
  e.preventDefault();
  $('#popup-container').removeClass('hidden');
});
