// Exercise 2
// ----------

const lateComers = ['Felicia', 'Charles', 'Terry'];
const earlyBirds = ['Ellen', 'Jerry', 'Jasmine'];

const printGuestOrder = (early, late) => {
  let arr = early.concat(late);
  for (let i = 0; i < arr.length; i++) {
    console.log(`${i + 1}. ${arr[i]}`)
  }
};

printGuestOrder(earlyBirds,lateComers)