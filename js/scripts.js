var findAndReplace = function(textToReplace, replacementText, message){
  var wordArray = message.split(" ")
  for(var i = 0; i <= wordArray.length; i++){
    if(wordArray[i] === textToReplace){
      wordArray[i] = replacementText;
    };
  }
    return wordArray.join(" ")
};

$(function(){
  $("form#message-form").submit(function(event) {
    var message = $("#message").val();
    var textToReplace = $("#textToReplace").val();
    var replacementText = $("#replacementText").val();
    $("#replaced-message").text('Your new string: ' + findAndReplace(textToReplace, replacementText, message));

    $("#replaced-message").show()
    event.preventDefault();
  });

})
