
class CommentList {
  constructor(arrayOfComments) {
    this.arrayOfComments = arrayOfComments //an empty array
  }
  render() {
    console.log(`<ul>${this.arrayOfComments}</ul>`);
    return `<ul>${this.arrayOfComments}</ul>`
  }

  addComment(string) {
    var addComment = new Comment(string);
    this.arrayOfComments.push(addComment);
  }
}

var test = new CommentList(["a", "b", "c"])
console.log(test);
//test.render()

test.addComment('this is a test')

// var test = new CommentList(["x", "y", "z"])
// test.addComment()


// create a constructor for a CommentList.
// New comment lists should initialize
// with an array of comments (this will be
//   empty to start).
//
// instances of CommentList should have a
// method called 'render' that returns a
// string of a ul. Inside of the ul, the
// comment list should include the return
// value of the render method of all of it's
// comments.
//
// instances of CommentList should have a
// method called 'addComment' that takes
// in a string. It should instantiate a
// new Comment and add it to the CommentList's
// array of comments.

//note: not sure i satisfied this last part,
//but it seems to be appending the test item to the arry
