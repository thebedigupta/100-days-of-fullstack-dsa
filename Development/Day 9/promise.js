function delay(message, ms, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error('Step Failed'));
      } else {
        console.log(message);
        resolve();
      }
    }, ms);
  });
}

function sendMessagesPromise() {
  delay('Order received', 2000)
    .then(() => delay('Order Prepared', 2000))
    .then(() => delay('Order Shipped', 2000))
    .catch((err) => console.error('Error caught :', err.message))
    .finally(() => console.log('All Complete '));
}

sendMessagesPromise();
