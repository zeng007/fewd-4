
$('#lightSwitch').click(function () {
  $('body').toggleClass('dark');
});

$('img').click(function () {
  $('#lightBox').toggleClass('hidden');
  $(this).toggleClass('zoom');
});