export const calculateCost = function(storage) {
  let rate = 0;
  if (storage <= 10) {
    rate = 4;
  } else if (storage <= 100) {
    rate = 2;
  } else {
    rate = 1;
  }

  // Stripe expects users to provide the price in pennies; hence the *100
  return rate * storage * 100;
};