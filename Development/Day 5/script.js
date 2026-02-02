// Create initial shopping list (array of objects)
const shoppingList = [
  { id: 1, item: "Milk", quantity: 2, purchased: false },
  { id: 2, item: "Bread", quantity: 1, purchased: true },
  { id: 3, item: "Eggs", quantity: 12, purchased: false }
];

// Display list
function displayList() {
  console.log("\n=== SHOPPING LIST ===");
  shoppingList.forEach((product, index) => {
    const status = product.purchased ? "✓" : "✗";
    console.log(`${index + 1}. [${status}] ${product.item} (x${product.quantity})`);
  });
}

// Test: Show initial list
displayList();

// Add new item (push)
function addItem(name, qty) {
  const newId = shoppingList.length > 0 ? Math.max(...shoppingList.map(p => p.id)) + 1 : 1;
  shoppingList.push({
    id: newId,
    item: name,
    quantity: qty,
    purchased: false
  });
  console.log(`✅ Added: ${name} (x${qty})`);
}

// Remove last item (pop)
function removeLastItem() {
  const removed = shoppingList.pop();
  if (removed) {
    console.log(`❌ Removed: ${removed.item}`);
  }
}

// Find item by name (find)
function findItem(name) {
  const found = shoppingList.find(product => product.item.toLowerCase() === name.toLowerCase());
  if (found) {
    console.log(`Found: ${found.item} (x${found.quantity}) - Purchased: ${found.purchased}`);
  } else {
    console.log(`"${name}" not found in list`);
  }
  return found;
}

// Check if item exists (includes on item names)
function hasItem(name) {
  const exists = shoppingList.some(product => product.item.toLowerCase() === name.toLowerCase());
  console.log(`List ${exists ? 'contains' : 'does not contain'} "${name}"`);
  return exists;
}

// Test your functions
addItem("Apples", 6);
addItem("Coffee", 1);
displayList();

removeLastItem();
displayList();

findItem("Milk");
findItem("Coffee");

hasItem("Bread");
hasItem("Bananas");