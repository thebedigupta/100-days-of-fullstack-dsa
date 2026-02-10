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

async function sendMessagesAsync() {
  try {
    await delay('Order Prepared', 2000);
    await delay('Order Shipped', 2000);
    await delay('Order Recived', 2000);
  } catch (error) {
    console.error('Error Message :', error.message);
  } finally {
    return 'Cleanup Always Runs';
  }
}

// Call it
sendMessagesAsync().then((msg) => console.log(msg));
