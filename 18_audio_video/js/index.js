
// audio
$('#audioPlay').click(function(){
  // lots of ways to do this, see the alternate solutions
  // https://stackoverflow.com/a/4647069
  $('#hai').get(0).play();
});
$('#audioPause').click(function(){
  $('#hai').get(0).pause();
});

// video
$('#videoPlay').click(function(){
  $('#bubs').get(0).play();
});
$('#videoPause').click(function(){
  $('#bubs').get(0).pause();
});
$('#videoFullScreen').click(function(){
  let vidElm = $('#bubs').get(0);

//have to make full screen
  if (vidElm.requestFullScreen) {
    vidElm.requestFullScreen();
  } else if (vidElm.webkitRequestFullScreen) {
    vidElm.webkitRequestFullScreen();
  } else if (vidElm.mozRequestFullScreen) {
    vidElm.mozRequestFullScreen();
  }

  vidElm.play();
});
