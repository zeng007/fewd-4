// setup read more dropdowns
$('.content-open').click(function (e){
  e.preventDefault();
  $(this).parent().hide();
  $(this).parent().siblings('.content-hidden').slideDown();
});
$('.content-close').click(function (e){
  e.preventDefault();
  $(this).parent().parent().slideUp();
  $(this).parent().parent().siblings('.content-prompt').show();
});

$('.content-hidden').hide();
