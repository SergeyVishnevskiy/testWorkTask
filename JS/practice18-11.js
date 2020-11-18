// const storagePrice = {
//   apple: 5,
//   orange: 10,
//   melon: 15,
//   banana: 5,
// };
// const userOrder1 = {
//   orange: 7,
//   melon: 5,
//   banana: 10,
// };
// const userOrder2 = {
//   apple: 3,
//   orange: 15,
//   melon: 10,
// };
// const calculateOrderPrice = function (userOrder, storage) {
//   let sum = 0;

//   for (let order in userOrder) {
//     // console.log(userOrder[order]);
//     // console.log(storage[order]);
//     sum += userOrder[order] * storage[order];
//   }
//   return sum;
// };
// console.log(calculateOrderPrice(userOrder1, storagePrice));
// console.log(calculateOrderPrice(userOrder2, storagePrice));

//============================================================\\

const users = [
  {
    name: "Virgil",
    age: "28",
  },
  {
    name: "Trent",
    age: "23",
  },
  {
    name: "Jordan",
    age: "25",
  },
  {
    name: "Sadio",
    age: "21",
  },
  {
    name: "Joel",
    age: "27",
    status: "qwerty",
  },
];

const setStatus = function (array, userName) {
  let copyUsers = [...array];

  for (let user of copyUsers) {
    // console.log(user);
    user.status = "player";
    //   users[2].status = "capitan";
    // user.name == "Jordan" ? (user.status = "capitan") : (user.status = "player");
    if (user.name === userName) {
      user.status = "capitan";
    }
  }
  return copyUsers;
};
setStatus();
console.log(setStatus(users, "Jordan"));

// users[0].status = "capitan";
// users[1].status = "centerDef";

// console.table(users);
