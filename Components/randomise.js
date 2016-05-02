$(document).ready(jaksbars);

function jaksbars() {
  $( "#bars" ).submit(randomisebars);
  setInterval(function(){ $("#bars").submit() }, 3000);
}

function randomisebars( event ) {

  var $form = $(this),
    inputrhymes = $form.find("textarea[name='inputrhymes']").val();
    var verse = inputrhymes.split(";");
    var randomise = verse[Math.floor(Math.random() * verse.length)];
    $('randomverse').text(randomise);
    event.preventDefault();
}
