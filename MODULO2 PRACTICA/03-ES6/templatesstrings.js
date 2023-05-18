// Basic literal string creation
console.log(`In JavaScript '\n' is a line-feed.`);

// Multiline strings
console.log(`In JavaScript this is
 not legal.`);

 // String interpolation
var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);

// Construct an HTTP request prefix is used to interpret the replacements and construction
POST`http://foo.org/bar?a=${a}&b=${b}
     Content-Type: application/json
     X-Credentials: ${credentials}
     { "foo": ${foo},
       "bar": ${bar}}`(myOnReadyStateChangeHandler);