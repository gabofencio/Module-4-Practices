const products = [
    { name: "Sweater", price: 60, category: "Clothing" },
    { name: "Laptop", price: 1000, category: "Electronics" },
    { name: "Book", price: 20, category: "Education" },
    { name: "Hat", price: 30, category: "Clothing" },
    { name: "Tablet", price: 600, category: "Electronics" },
    { name: "Headphones", price: 100, category: "Electronics" },
    { name: "Electric Bass", price: 800, category: "Musical Instruments" },
    { name: "Guitar", price: 500, category: "Musical Instruments" },
    { name: "Drum Sticks", price: 50, category: "Musical Instruments" }
];

const sortedProducts = products.sort((a, b) => a.name.localeCompare(b.name));
const specificPriceProducts = products.filter(product => product.price < 100);
const productsByName = products.map(product => product.name);
const musicalInstrumentsAvailability = products.some(product=>product.category === "Musical Instruments");
const foodAvailability = products.some(product=>product.category === "Food");
const totalPrice = products.reduce((total,product)=>total+product.price,0);
const nameValidator = products.every(product=> product.hasOwnProperty("name"));

console.log("Sorted Products:", sortedProducts);
console.log("Products with Price less than 100:", specificPriceProducts);
console.log("Product Names:", productsByName);
console.log("Is there any Musical Instrument?", musicalInstrumentsAvailability);
console.log("Is there any Food?", foodAvailability);
console.log("Total Price:", totalPrice);
console.log("Do all products have a name?", nameValidator);


export default sortedProducts;