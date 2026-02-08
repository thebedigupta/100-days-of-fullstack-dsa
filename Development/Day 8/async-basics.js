function delayMessage(message, delay, callback) {
  setTimeout(() => {
    console.log(message);
    callback();
  }, delay);
}

function sendMessagesInSequence() {
  delayMessage('Order Received', 2000, secondMessage);
}

function secondMessage() {
  delayMessage('Order Prepared', 2000, thirdMessage);
}

function thirdMessage() {
  delayMessage('Order Shipped !!!', 2000, finalcall);
}

function finalcall() {
  console.log(`All Steps are complete & Assignment Complete`);
}

sendMessagesInSequence();
