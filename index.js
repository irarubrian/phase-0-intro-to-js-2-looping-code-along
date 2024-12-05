// code your solutions in this file

// Function to create thank you messages
function writeCards(names, event) {
  let messages = [];
  for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return messages;
}

// Example usage
const namesArray = ["Alice", "Bob", "Charlie"];
const eventName = "birthday";

const thankYouMessages = writeCards(namesArray, eventName);
console.log(thankYouMessages);

const numbers = [5,4.3,2,1];
for (let i = 0; i < numbers.length; i++){
  console.log(numbers[i]);
}
function countDown(number) {
  for (let i = number; i >= 0; i--) {
      console.log(i);
  }
}

// Export the function if required for testing
module.exports = { countDown };



