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
  
//   function getSaleProducts (array, prop) {
//         const arr = [];
//         for (const item of array) {
//             if (item[prop]){
//                 arr.push(item);
//             }
            
//         }
//         return arr;
//   }
//   console.log(getSaleProducts(products, 'sale'));


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

//===============================================================\\

// 2. Создайте функцию getProductsName(), которая вернет новый массив 
// со всеми названиями продуктов на русском языке.

// function getProductsName(array, ) {
//     const arr = [];
//     for (const item of array){
//         // console.log(item);
//         arr.push(item.value);
//     }

//     return arr;
// }
// console.log(getProductsName(products));
//===============================================================\\

// 3. Создайте функцию getTotalQuantity(), 
// которая вернет общую сумму всех товаров на складе (свойство quantity).

// function getTotalQuantity (array) {
//     let sum = 0;
//     for (const item of array) {
//         sum += item.quantity;
//         // console.log('item :>> ', item);
//     }
//     return sum
// }
// const result = getTotalQuantity(products);
// console.log(result);
//===============================================================\\

// 4. Создайте функцию getProductById(), 
// которая будет возвращать продукт по id.