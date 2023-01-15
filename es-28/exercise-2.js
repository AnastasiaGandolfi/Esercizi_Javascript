const order = {};

if (order && order.customer && order.customer.address && !order.customer.address.city) {
  console.log('City is required');
}

const addressCity = order.customer?.address.city;
console.log(addressCity);