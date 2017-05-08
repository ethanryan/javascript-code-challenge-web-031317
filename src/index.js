$(document).ready(function(){
  console.log('document ready!');
  //addComment(string);
  submitForm();
})

// <div id='comment-list'></div>

//didn't get it working :(

function submitForm() {
  console.log('form submitted!');

  $('note-form').on('submit', function(event) {
    var userInput = $('#userInput').val(); //our text input field
    var newComment = $('<li>' + userInput + '</li>');
    //$("#comment-list").prepend(newComment); // puts newItem at top of list
    $("#comment-list").innerHTML(newComment); // puts newItem at top of list

    event.preventDefault(); //prevents form from refreshing page on submit
  })
}

// In index.js, add the needed code so
// that when we submit the form,
// a new comment text should appear
// in the div with the id of "comments".
// You may use the code that you wrote
// for part one but this is not a requirement.
// Get it to work.
