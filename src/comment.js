// PART ONE - CONSTRUCTORS AND PROTOTYPES
// create a constructor for a Comment.
// New comments should initialize with some text.

class Comment {
  constructor(text) {
    this.text = text
  }
  render() {
    console.log(`<li>${this.text}</li>`);
    return `<li>${this.text}</li>`
  }
}

//testing:
var hi = new Comment("hello")
console.log(hi);
hi.render()
// instances of comments should have a
// prototype method called 'render' that
// returns a string of an li with that
// comment's text inside.
