// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// getWage(baseSalary, overtime, rate);
// console.log(getWage(baseSalary, overtime, rate));

// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// employee.getWage();
// employee.baseSalary = 10;
// console.log(employee.getWage());
//===================19.11.2020-practice==============\\
//===============task1=================\\
// const string = "Lorem ipsum dolor sit amet";

// const searchLiteral = function (string) {
//   const literal = "oeaiu";
//   let total = 0;
//   const wordsArr = string.split(" ");
//   const symbolsArr = literal.split("");
//   console.log(symbolsArr);
//   for (const word of wordsArr) {
//     let letters = word.split("");
//     for (const letter of letters) {
//       let symbol = literal.includes(letter);
//       if (symbol) {
//         total += 1;
//       }
//     }
//   }
//   return total;
// };
// console.log(searchLiteral(string));
//=======================================\\
//===============task1.5=================\\

// find letters glassnie 

//  const string = 'lorem spam find you uu';

// const searchLiteral = function (string, literal) {
//  // const LITERAL = 'oeaiu';
//   let total = 0;
//   const wordsArr = string.split(' ');
//   const symbolsArr = literal.split('');
//  //console.log(symbolsArr);

//   for (const word of wordsArr) {
//     let letters = word.split('');
//     for (const letter of letters) {
//       let symbol = literal.includes(letter);

//       if(symbol){
//        total+=1;
//       }
//     }
//   }
//   return total;
// };

// // console.log(searchLiteral(string));

// //вывести алфавит, вычленить глассные и
// //написать колличество 

// const searchVowels = function (string) {
//     let indexSymbol = 'a'.charCodeAt(); 
//     let alphabet = ''
//     let vowels = ''
//     // const LITERAL = 'oeaiu';
//     //97 101 105 111 117 
//    // console.log(alphabet);
//     for (let i = 0; i < 26; i += 1){
//         alphabet += String.fromCharCode(indexSymbol);
//         indexSymbol += 1;
     
//     }
//     for (let j = 0; j < alphabet.length; j += 1 ) {
//        // console.table(alphabet[j], alphabet[j].charCodeAt());
//         if (alphabet[j].charCodeAt() === 97
//             || alphabet[j].charCodeAt() === 101
//             || alphabet[j].charCodeAt() === 105
//             || alphabet[j].charCodeAt() === 111
//             || alphabet[j].charCodeAt() === 117) {
//             vowels += String.fromCharCode(alphabet[j].charCodeAt())

//         }
//     }
//     //console.log(vowels);
//     return searchLiteral(string, vowels);
    
//     //return alphabet
    
// }
// console.log(searchVowels(string)); 
//=======================================\\

//===============task2=================\\

// const writeAlphabet = function () {
//   let indexSymbol = "a".charCodeAt();
//   let alphabet = "";
//   let vowels = '';
//   // console.log(indexSymbol);
//   // 97.101.105.111.117
//   for (let i = 0; i < 26; i += 1) {
//     alphabet += String.fromCharCode(indexSymbol);
//     indexSymbol += 1;
//   }

//   for (let j = 0; j < alphabet.length; j += 1) {
//     // console.table(alphabet[j], alphabet[j].charCodeAt());
//     if (alphabet[j].charCodeAt() === 97 ||
//       alphabet[j].charCodeAt() === 101 ||
//       alphabet[j].charCodeAt() === 105 ||
//       alphabet[j].charCodeAt() === 111 ||
//       alphabet[j].charCodeAt() === 117) {
//       vowels += String.fromCharCode(alphabet[j].charCodeAt());
//     }

//   }
//   console.log(vowels);
//   return alphabet;
// };

// console.log(writeAlphabet());
//=====================================\\
