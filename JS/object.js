// Объекты
// ==============================================================================
const products = [
    {
      id: "1",
      name: "milk",
      value: "Молоко",
      price: 20,
      sale: true,
      quantity: 10,
    },
    {
      id: "2",
      name: "water",
      value: "Вода",
      price: 10,
      sale: false,
      quantity: 50,
    },
    {
      id: "3",
      name: "juice",
      value: "Сок",
      price: 34,
      sale: true,
      quantity: 24,
    },
    {
      id: "4",
      name: "fruitDrink",
      value: "Морс",
      price: 32,
      sale: true,
      quantity: 25,
    },
    {
      id: "5",
      name: "milkShake",
      value: "Молочный коктейль",
      price: 37,
      sale: false,
      quantity: 37,
    },
  ];
  // 1. Создайте функцию getSaleProducts(), которая 
  //   вернет новый массив со свойством sale равным true.
  
  function getSaleProducts (array, prop) {
        const arr = [];
        for (const item of array) {
            if (item[prop]){
                arr.push(item);
            }
            
        }
        return arr;
  }
  console.log(getSaleProducts(products, 'sale'));


// function getSaleProducts (array, prop) {
//     const arr = [];
//     for (const item of array) {
//         if (item[prop] > 30 && item[prop] < 35){
//             arr.push(item);
//         }
        
//     }
//     return arr;
// }
// console.log(getSaleProducts(products, 'price'));

// function getSaleProducts (array, prop) {
//     const arr = [];
//     for (const item of array) {
//         if (item[prop] > 30){
//             arr.push(item);
//         }
        
//     }
//     return arr;
// }
// console.log(getSaleProducts(products, 'quantity'));

// 2. Создайте функцию getProductsName(), которая вернет новый массив 
// со всеми названиями продуктов на русском языке.

