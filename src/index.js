$(document).ready(function(){
  console.log('document ready!');
  //addComment(string);
  submitForm();
})

// <div id='comment-list'></div>

//didn't get it working :(

function submitForm() {

  $('#note-form').on('submit', function(event) {
    debugger
    //need #note-form above

    //need event.preventDefault() at the top of this function, not at the bottom
    // event.preventDefault(); //prevents form from refreshing page on submit

    console.log('form submitted!');

    //need this ID to match the ID i gave this in the html page!
    var userInput = $('#user-input').val(); //our text input field
    var newComment = $('<li>' + userInput + '</li>');

    $("#comment-list").prepend(newComment); // puts newItem at top of list

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
