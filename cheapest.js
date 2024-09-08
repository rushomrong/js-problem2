// find the cheapest phone

// let's declare first phone objects in an array
const phones = [
  {
    name: "Samsung",
    price: 35000,
    camera: "12 MegaPixels",
    feature: "NFC supported",
    color: "Light blue",
  },
  {
    name: "Iphone",
    price: 155000,
    camera: "15 MegaPixels",
    feature: "P45 waterproof",
    color: "Chocolate",
  },
  {
    name: "Oppo",
    price: 25000,
    camera: "12 MegaPixels",
    feature: "NFC supported",
    color: "Blue",
  },
  {
    name: "Infiniti",
    price: 20000,
    camera: "12 MegaPixels",
    feature: "NFC supported",
    color: "Light blue",
  },
];

// create a function
function getCheapestPhone(phones) {
  let min = phones[0];
  for (const phone of phones) {
    if (phone.price < min.price) {
      min = phone;
    }
  }
  return min;
}

const cheap = getCheapestPhone(phones);
console.log("Cheapest mobile phone is: ", cheap);
