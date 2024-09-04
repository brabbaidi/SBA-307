// Declare a global counter variable
let counter = 0;

// Create a simple function that increments the variable, and then calls itself recursively
function increment() {
  counter++;
  // Call the function recursively
  increment();
}

// Surround the initial function call in a try/catch block
try {
  // the recursive function
  increment();
} catch (e) {
  // Within the catch, log the error and the value of the counter variable
  console.log('Error:', e);
  //console.log('The value of the counter variable is:', counter); is slightly different than console.error
  console.error(e)
}
increment();