// Exercise 7
// ----------

let foodPairings = {
  burgers: 'beer',
  fish: 'white wine',
  beef: 'red wine',
  strawberries: 'cream',
};

// createRecommendations function
function createRecommendations(pairings) {
  return Object.keys(pairings).map((food) => {
    return `With ${food}, it is best to have ${pairings[food]}.`;
  });
};

// printRecommendations function
function printRecommendations(pair) {
  pair.forEach((recommendation) => {
    console.log(`- ${recommendation}`);
  });
};

// function call (done)
printRecommendations(createRecommendations(foodPairings));
