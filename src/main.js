import { englishToPigLatin } from "./pigLatin.js";


$(document).ready(function() {
  $("#translator").submit(function(event) {
    event.preventDefault();
});

  $(function() {
      $("#again-btn").hide();
      $("#translate-btn").click(function() {
        var englishWord = $("input#word").val();
        var translatedWord = englishToPigLatin(englishWord);
        $("#english").append(englishWord);
        $("#pig-latin").append(translatedWord);
        $("#word").hide();
        $("#translate-btn").hide();
        $("#instructions").hide();
        $("#again-btn").show();
        $("#translation").show();
        return false;
    });
    $("#again-btn").click(function() {
      location.reload();
    });
  });
});
