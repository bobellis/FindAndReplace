var findAndReplace = function(textToReplace, replacementText, message){
  var wordArray = message.split(" ")
  for(var i = 0; i <= wordArray.length; i++){
    if(wordArray[i] === textToReplace){
      wordArray[i] = replacementText;
    };
  }
    return wordArray.join(" ")
};
