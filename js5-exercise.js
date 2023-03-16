// Exercise #1
// Part 1
// let consumer = ['Sofia', 'David', 'Juan']
// consumer.push('Sara', 'Augustin')
// consumer.shift()
// consumer.splice(0, 1, 'Renata')
// consumer.push('Elena')
// console.log(consumer)

// Exercise #2
// let i = 0
// for (let i = 1; i <= 5; i++) {

//     let result = ''
//     for(let j = 1; j <= i; j++) {
//         result += '*'
//     }
//     console.log(result)
//   }

// Exercise #3
// 3.1
// let i 
// xValue = (n) => {
//   for ( i = n; i >= 0; i-=.5) {
//   console.log(`xValue: ${i} `) 
// }
// }
// xValue(8)

// 3.2
// oddNumber = (n) => {
//   for (let i = 1; i <= n; i += 2) {
//       console.log(i);
//     }
// }
// oddNumber(100)

// 3.3
// let i 
// printSquare = (n) => {
//   for ( i = 0; i <= n; i++) {
//   console.log(`[${i}]`) 
//   }
// }
// printSquare(8)

// 3.4

sumNumber = (n) => {
      let j = 0;
      let i = 1;
      while (i < n) {
        j += i;
        i++;
      }
      console.log(`first number: ${i}, sum number : ${j} `)
    }
  sumNumber(60)