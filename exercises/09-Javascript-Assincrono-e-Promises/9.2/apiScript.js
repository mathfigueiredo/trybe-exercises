// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => {
      const jokeContainer = document.getElementById('jokeContainer');
      jokeContainer.textContent = data.joke;
    });
};

window.onload = () => fetchJoke();

const nova = new Promise((resolve, reject) => {
  const arr = [];
  for (let i = 1; i <= 10; i++) {
    const number = Math.floor(Math.random() * 51);
    arr.push(number);
  }

  const squared = arr.map((x) => x * x);
  const squaredSum = squared.reduce((acc, cur) => acc + cur, 0);

  if (squaredSum < 8000) {
    return resolve(squaredSum);
  }
  return reject(squaredSum);
});

nova
  .then((num) => {
    console.log(`ALL RIGHT! The sum is ${num}`);
    const arr = [2, 3, 5, 10];
    const divided = arr.map((x) => num / x);
    console.log(divided);
    return divided;
  })
  .then((array) => {
    const sum = array.reduce((acc, cur) => acc + cur, 0);
    console.log(`Sum of elements: ${sum}`);
    return sum;
  })
  .catch((num) => console.log(`OOPS! The sum is ${num}`));
