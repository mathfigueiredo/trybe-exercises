'use strict';

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  return `Olá, ${order.order.delivery.deliveryPerson}. Entrega para ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`;
};

console.log(customerInfo(order));

order.name = 'Luiz Silva';
order.order.pizza = { muzzarella: { amount: 1, price: 20 }, calabresa: { amount: 1, price: 20 } };
console.log(order.order.pizza);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = 'Luiz Silva';
  order.order.pizza = { muzzarella: { amount: 1, price: 20 }, calabresa: { amount: 1, price: 20 } };
  return `Olá, ${order.name}, o total do seu pedido de ${Object.keys(order.order.pizza).join(', ')} e ${
    order.order.drinks.coke.type
  } é R$${order.order.pizza.muzzarella.price + order.order.pizza.calabresa.price + order.order.drinks.coke.price},00`;
};

console.log(orderModifier(order));
