$(document).ready(jaksbars);

function jaksbars() {
  $( "#bars" ).submit(randomisebars);
  setInterval(function(){ $("#bars").submit() }, 1000);
}

function randomisebars( event ) {

  var $form = $(this),
    inputrhymes = $form.find("input[name='inputrhymes']").val();
    var verse = inputrhymes.split(";");
    var randomise = verse[Math.floor(Math.random() * verse.length)];
    var splitline = randomise.split("_");
    $('line1').text(splitline[0]);
    $('line2').text(splitline[1]);
    event.preventDefault();
}
function preventEnterSubmission()
{
  $('#bars').keypress(function(event) {
    if (event.which == 13) {
      event.preventDefault();
      this.value = this.value + "\n";
    }
  });
}