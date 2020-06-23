# 2.6.2 - JS - Object Methods

---

## Situation

You have an object that you need to iterate over.

```js
// Example - I need to display just the names in a list
const friendsAge = { Rahul: 32, Marianne: 60, Chaim: 14, Abdul: 35 };
```

---

## [Object.keys()](https://www.geeksforgeeks.org/object-keys-javascript/)

```js
const friendsAge = { Rahul: 32, Marianne: 60, Chaim: 14, Abdul: 35 };

const friendsList = Object.keys(friendsAge);
console.log(friendList);
// Output a list of my friends' names: ['Rahul', 'Marianne', etc]
```

---

## [Object.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

```js
const friendsAge = { Rahul: 32, Marianne: 60, Chaim: 14, Abdul: 35 };

// Get the AVERAGE age amongst my friends

const calcAverage = (obj) => {
  let total = 0;
  const values = Object.values(friendsAge);
  values.forEach(age => {
    total += age;
  });
  return total / values.length;
}
calcAverage(friendsAge);

```