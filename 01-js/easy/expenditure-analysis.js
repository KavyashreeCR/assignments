/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const totalSpentByCategory = {};

  // Iterate over each transaction
  transactions.forEach(transaction => {
    const { category, price } = transaction;

    // Check if the category exists in the object
    if (totalSpentByCategory[category]) {
      // Add the price to the existing total
      totalSpentByCategory[category] += price;
    } else {
      // Initialize the category with the current price
      totalSpentByCategory[category] = price;
    }
  });

  // Convert the object to an array of objects
  const result = Object.keys(totalSpentByCategory).map(category => ({
    category,
    totalSpent: totalSpentByCategory[category]
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;

