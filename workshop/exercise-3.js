// Exercise 3
// ----------

let mostPopularFood = [
  'bean burritos',
  'poke bowl',
  'chicken sliders',
  'pork baby back ribs',
  'chicken burritos',
  'chicken sandwich',
  'cauliflower rice bowl',
  'chicken and waffle sliders',
  'parmesan chicken',
  'buffalo-flavored cauliflower',
];

function alphaSort(arr) {

  // let copiedArray = [...arr].sort().forEach(function item() {
  //   let rank = mostPopularFood.indexOf(item);
  //   console.log(`${item} (${rank + 1})`);
  // });

  let copiedArray = [...arr].sort();
  for (let i = 0; i < copiedArray.length; i++) {
  console.log(`${copiedArray[i]} (${arr.indexOf(copiedArray[i])+1})`)
  };
}

alphaSort(mostPopularFood);