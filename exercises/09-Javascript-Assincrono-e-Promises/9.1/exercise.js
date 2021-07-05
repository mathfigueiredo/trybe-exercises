// 1
// const getPlanet = () => {
//   setTimeout(() => {
//     const mars = {
//       name: 'Mars',
//       distanceFromSun: {
//         value: 227900000,
//         measurementUnit: 'kilometers',
//       },
//     };
//     console.log('Returned planet: ', mars);
//   }, 4000);
// };

// getPlanet(); // imprime Marte depois de 4 segundos

// 2
// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// // crie a função sendMarsTemperature abaixo
// const sendMarsTemperature = () => {
//   const temp = getMarsTemperature();
//   const delay = messageDelay();
//   setTimeout(() => {
//     console.log(`Mars temperature is: ${temp} degree Celsius`);
//   }, delay);
// };

// sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

// 3
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9) / 5 + 32;
const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) =>
  console.log(
    `Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`
  );

const tempInCelsius = (temperature) => {
  console.log(`Mars temperature is: ${temperature} degree Celsius`);
};
// definição da função sendMarsTemperature...
const sendMarsTemperature = (callback) => {
  const temperature = getMarsTemperature();
  const delay = messageDelay();
  setTimeout(() => callback(temperature), delay);
};

sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo
