
$('.clickable').click(function (){
  let clicked = $(this);
  let classes = clicked.attr('class');

  if (!classes || !classes.includes('rotate')){
    clicked.addClass('rotate');
  } else if (!classes.includes('fast')){
    clicked.addClass('fast');
  } else {
    clicked.removeClass('rotate').removeClass('fast');
  }
})
