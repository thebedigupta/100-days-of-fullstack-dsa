const shoppingList = [
  { id: 1, item: 'Milk', quantity: 2, purchased: false },
  { id: 2, item: 'Bread', quantity: 1, purchased: true },
  { id: 3, item: 'Eggs', quantity: 12, purchased: false },
];

// NEW (Day 7): Use map + destructuring
function displayListRefactored() {
  console.log('\n=== SHOPPING LIST (Refactored) ===');

  const listStrings = shoppingList.map((product, index) => {
    // DESTRUCTURE product object
    const { item, quantity, purchased } = product;
    const status = purchased ? '✓' : '✗';
    return `${index + 1}. [${status}] ${item} (x${quantity})`;
  });

  console.log(listStrings.join('\n'));
}

function getTotalItems() {
  const total = shoppingList.reduce((sum, product) => {
    return sum + product.quantity;
  }, 0);
  console.log(`Total items in cart: ${total}`);
}

function getPurchasedItems() {
  console.log('\n=== PURCHASED ITEMS ===');

  // Filter + destructuring in forEach
  const purchased = shoppingList.filter((product) => product.purchased);

  purchased.forEach(({ item, quantity }) => {
    console.log(`- ${item} (x${quantity})`);
  });
}

function getItemsByTag(tag) {
  console.log(`\n=== ITEMS WITH TAG "${tag}" ===`);

  const filtered = shoppingList.filter((product) => product.tags.includes(tag));

  const itemNames = filtered.map(({ item }) => item);
  console.log(itemNames.join(', ') || 'No items found');
}

displayListRefactored();
// getTotalItems();
// getPurchasedItems();
// getItemsByTag('groceries'); // Add "groceries" tag to some items first
