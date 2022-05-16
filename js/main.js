// console.log('hello world')
// console.log(typeof 'dave')
// console.log(typeof 42)
// console.log(typeof true)


// string 
// const myVariable = 'Mathematics';


// the lenght property 
// console.log(myVariable.length)
// string method
// console.log(myVariable.charAt(0))
// console.log(myVariable.indexOf('ati'))
// console.log(myVariable.lastIndexOf('tics'))
// console.log(myVariable.slice( 3))
// console.log(myVariable.includes('mat'))
// console.log(myVariable.split('e'))
// console.log('john, dave, joe'.split('e'))


// const myNumber = 42
// const myfloat = 42.01
// const myString = '42.7'
// console.log(Number(myString) + 3)
// console.log(Number(myString) === myNumber)


// number methods 
// console.log(Number.isInteger(myfloat))
// console.log(Number.parseFloat(myString))
// console.log(myfloat.toFixed(2))


                 // Math methods and properties
    // console.log(Math.PI)
    // console.log(Math.trunc(Math.PI))
    // console.log(Math.round(3.5))
    // console.log(Math.ceil(2.5))
    // console.log(Math.floor(2.5))
    // console.log(Math.pow(5, 2))
    // console.log(Math.min(500, 200, 100))
    // console.log(Math.max(500, 200, 100))
    // console.log(Math.random())
    // console.log(Math.floor(Math.random() * 10) + 1)
    // console.log(Math.floor(Math.random() * 10) + 1)



   // if statments  //
//    let customerIsBanned = false;
//    let soup = 'chicken noodle soup'
//    let crackers = true
//    let reply
//    if (customerIsBanned) {
//        reply = 'no soup for you'
//    }else if (soup && crackers) {
//     reply = 'heres yor order ${soup} & cracker';}
//     else if (soup) {
//        reply = 'heres yor order ${soup}';
//    } else {
//        reply = 'Sorry, were out of ${soup}';
//    }
//    console.log(reply)


   // if 
//    let testScore = 59;
//    let collegeStudent = true
//    let grade;


//    if (testScore >= 90) {
//        grade = 'A';
//    } else if (testScore >= 80 ) {
//        grade = 'B'
//    } else if (testScore >= 70 ) {
//     grade = 'C'
// } else if (testScore >= 60 ) {
//     grade = 'D'
// } else {if (collegeStudent)  
// {grade = 'U'} else {grade = 'f'}}

//    console.log(grade)
   


                 // switch //
               //   switch (Math.floor(Math.random() * 3 + 1)) {
               //      case 1:
               //         console.log(1);
               //         break;

               //         case 2:
               //            console.log(2);
               //            break;

               //            case 3:
               //               console.log(3);
               //            break;
                 
               //      default:
               //         console.log('no match')
               //   }




               //   let playerOne = 'scissors';
               //   let computer = 'rock';


               //   switch (playerOne) {
               //      case computer:
               //         console.log('tie game');
               //         break;
               //         case 'rock': 
               //         if (computer === 'paper') {
               //            console.log('computer wins');
               //          } else {console.log('playeronewins');
               //          } break;
               //          case 'paper': 
               //          if (computer === 'scissors') {
               //             console.log('computer wins');
               //           } else {console.log('playeronewins');
               //           } break;
               //           default: if (computer === 'rock') {
               //             console.log('computer wins');
               //           } else {console.log('playeronewins');
               //           }
               //   }
//.

                                             // ternary //
// let testScore = 39;
// let myGrade = testScore > 89 ? 'A'
// : testScore > 79 ? 'B'
// : testScore > 69 ? 'C'
// : testScore > 59 ? 'D'
// : 'F';
// console.log(myGrade)



// let playerOne = 'paper'
// let computer = 'rock'
// let result = playerOne === computer ? 'Tie game'
// : playerOne === 'rock' && computer === 'paper' ? 
// 'computer wins'
// : playerOne === 'paper' && computer === 'scissors'?
// 'Computer wins'
// : playerOne === 'scissors' && computer && 'rock' ? 
// 'Computer wins'
// : 'palyer one wins'
// console.log(result)

                                 // ternary //


                                 // input /
      // alert('hello world')

   //   let  myBoolean = confirm('Ok === True\nCancel === False')
   //   console.log(myBoolean)

   // let Name = prompt('please enter your name')
   // if (Name) {
   //    console.log(Name.length);
   //    console.log(Name.trim().length);
   //    console.log(Name.trim());
   // } else {
   //    console.log('you didnt enter your name')
   // }
   
   //.
    // game //
   //   let playGame = confirm('shall we play rock, paper or scissors ? ')
   //   if (playGame) {
   //    let playerChoice = prompt('please enter rock, paper or scissors');
   //    if (playerChoice ) {
   //   let playerOne = playerChoice.trim().toLowerCase();
   //   if (playerOne === 'rock'  || playerOne || 'paper'  || playerOne || 'scissors') {
   //   let computerChoice = Math.floor(Math.random() * 3 + 1)
   //   let computer = computerChoice === 1 ? 'rock'
   //   : computerChoice === 2 ? 'paper'
   //   : 'scissors';
    
   //   var result =
   //   playerOne === computer
   //   ? 'Tie game'
   //   : playerOne === 'rock' && playerOne === 'paper'
   //   ? 'playerOne ${playerOne}\nComputer : ${computer} \nComputerwins!'
   //   : playerOne === 'paper' && playerOne === 'scissors'
   //   ? 'playerOne ${playerOne}\nComputer : ${computer} \nComputerwins!'
   //   : playerOne === 'scissors' && playerOne === 'rock'
   //   ? 'playerOne ${playerOne}\nComputer : ${computer} \nComputerwins!'
   //   : 'playerOne: ${playerOne}\nComputer: ${computer} \nplayerOnewins!';
   //   alert(result);
   //   let playAgain = confirm('play again?');
   //   playAgain ? location.reload() :alert('ok thanks for playing')
   //   } else {
   //      alert('you didnt enter rock paaper or scissors')
   //   }
   //    } else {
   //       alert('i guest you changed your mind, maybe next time')
   //    }
   //   } else  {
   //      alert('ok maybe next time')
   //   }
      //.

                       // loops //
      //  let myNumber = 0
      //  while (myNumber < 50) {
      //     console.log(myNumber)
      //    //  myNumber = myNumber + 1 // longer version //
      //    // myNumber++ //shorten version //
      //    myNumber += 2
      //    }

// let Name = 'dave'
//        for (let i = 0; i <= Name.length; i++)
//        {console.log(Name.charAt(i))}


      //  for (let i = 1; i <= 5; i++ ) {
      //     console.log(i)
      //  }

//   let  Name = 'dave'
//  let counter = 0;
//  let myLetter;
//  while (counter <= 3) {
//     myLetter = Name[counter];
//     console.log(myLetter)
//     if (counter === 1) {
//       counter += 2; continue
//    }
//    if (myLetter === 'v') break;
//     counter++;
//  }
//  console.log(counter)

                                  // functions //
   //  function sum(num1, num2) {
   //     if (num2 === undefined) {
   //        return num1 + num1
   //     }
   //   return num1 + num2
   //  }

 //  console.log(sum(2, 10))


   
//  function getUSerNameFromEmail   (email)   {
//     return email.slice(0, email.indexOf('@'));
//     };
    

//     console.log(getUSerNameFromEmail('player one@SomeRandomEmail.com'))

    


//     const getUSerNameFromEmai = function  (email)   {
//       return email.slice(0, email.indexOf('@'));
//       };
      
  
//       console.log(getUSerNameFromEmai('player one@SomeRandomEmail.com'))



// const toProperCase = (Name) => {
//    return Name.charAt().toUpperCase() + Name.slice(1).toLowerCase();}


//    console.log(toProperCase('september'))


                          // var let const //
   

         //     let y = 2

         // function myFunction() {
         //    const qw = 5;
         //    console.log(y)
         //    {
         //       let y = 4;
         //       console.log(y)
         //    }
         // }


         // myFunction()



         // var function scope //
         // const block scope //

        
// Untagged, these create strings:


// let Name = `Ryan`;

// console.log(`Hi my name is ${Name}`);


// var string = 'this is a string';

// console.log(`Insert a string here: ${string}`); 

// console.log('insert a string here: this is a string')


                                     // arrays //
// const myArray = [] // array //
//    // add elements to array //
//    myArray[0] = 'Dave';
//    myArray[1] = 1001;
//    myArray[2] = false;
  

   // console.log(myArray) // refer to aaray //
   // console.log(myArray.length)                  // lenght property //
   // console.log(myArray[2])
   // console.log(myArray[myArray.length - 1])

   // myArray.push = ('school')
   // console.log(myArray)

   // const newLenght = myArray.unshift(42);
   // console.log(newLenght)

   // const firstItem = myArray.shift();
   // console.log(firstItem)

   // delete myArray[1]
   // console.log(myArray)
   
   // const lastItem = myArray.pop()
   // console.log(lastItem)


//    const myArrayA = ['A', 'B', 'C']
//   const myArrayB = ['D', 'E', 'F']
  
//    //      const myArray = myArrays.slice()  
//    //      console.log(myArray)
   
//    //  myArray.reverse()
//    //  console.log(myArray)


//    //  const newString = myArray.join()
//    //  console.log(newString)

//    //  const newArray = newString.split(',')
//    //  console.log(newArray)


//    // const myArray = myArrayB.concat(myArrayA) // pirveli varianti //
//    // const myArray = [...myArrayB, ...myArrayA]  // meore varianti //
//    console.log(myArray)


// const equipShelfA = ['baseball', 'football', 'volleyball']
// const equipShelfB = ['basketball', 'golf ball', 'tennis balls']

// const clothesShelfA = ['tank tops', 't-shirts', 'jerseys']
// const clothesShelfB = ['sweat tops', 'sweat pants', 'hoodies']

// console.log(equipShelfA[1])
// console.log(clothesShelfB[0])

// const equipDept = [equipShelfA, equipShelfB]
// const clothesDept = [clothesShelfA, clothesShelfB]

// console.log(equipDept[0][1])
// console.log(clothesDept[1][0])

// const sportsStore = [equipDept, clothesDept]
// console.log(sportsStore[0][0][1])
// console.log(sportsStore[1][1][0])

     // arrays // .
                              // OBJECTS //
   
//    const myObject = { name: 'dave'}
//    console.log(myObject.name)
//    const anotherObj = {
//       alive: true,
//       answer: 42,
//       hobbies: ['eat', 'sleep', 'code'],
//       beverage: {
//          morning: 'cofee',
//          afternoon: 'iced Tea'
//       },
// action: function() {
//    return 'hello world'
// }
//    }
//    console.log(anotherObj.action())


   // const vehicle = {
   //    wheels: 4,
   //    engine: function() {
   //       return 'vroooom';
   //    }
   // }


   // const truck = Object.create(vehicle)
   // truck.doors = 2
   // console.log(truck)
   // console.log(truck.wheels) // inheritence
   // console.log(truck.engine())
   // const car = Object.create(vehicle)
   // car.doors = 4
   // car.engine = function () {
   //    return 'whoooosh'
   // }
   // console.log(car.engine())
   // console.log(car.wheels)
   // const tesla = Object.create(car)
   // console.log(tesla.wheels)
   
   // tesla.engine = function() {
   //    return 'shhhhhh'
   // }
   // console.log(tesla.engine())


   // const band = {
   //    vocals: 'Robert Plant',
   //    guitar: 'Jimmy Page',
   //    bass: "John Paul Jones",
   //    drum: 'Jon Bonham'
   // }
    
   // delete band.drum
   // console.log(band.hasOwnProperty('vocals'))
   // console.log(Object.keys(band))
   // console.log(Object.values(band))



// const {guitar: JP, bass: JPJ, vocals} = band  // destructuring objects //
// console.log(JP)
// console.log(JPJ)
// console.log(vocals)

// function sings({vocals})  {return '${vocals} sings'};
// console.log(sings(band))
                         // objects . //

                         // classes //
   
      // class Pizza {
      //    constructor(pizzaType, pizzaSize) {
      //       // this.type = pizzaType;
      //        this.size = pizzaSize;
      //        this.crust = 'original';
      //       //  this.topping = []
      //    }
      //    getCrust() {
      //       return this.crust;
      //    }
      //    setCrust(pizzaCrust) {
      //       this.crust = pizzaCrust
      //    }
      //    // getToppings() {
      //    //    return this.topping;
      //    // }
      //    // setToppings(topping) {
      //    // this.topping.push(topping)
      //    // }
      //    // bake() {
            // console.log(`Baking a  ${this.size} ${this.crust} ${this.type} crust pizza`);
      //    // }
      // }


// const myPizza = new Pizza('pepperoni', 'small')
// // myPizza.type = 'supreme'
// myPizza.setCrust('thin');
// myPizza.bake()
// myPizza.setToppings('sausage')
// myPizza.setToppings('olives')
// console.log(myPizza.getToppings())



// class Pizza {
//    crust = 'original';
//    #sauce = 'traditional';
//    #size;
//    constructor(pizzaSize) {
     
//        this.#size = pizzaSize;
      
      
//    }
//    getCrust() {
//       return this.crust;
//    }
//    setCrust(pizzaCrust) {
//       this.crust = pizzaCrust
//    }
//   HereYouGo() {
//      console.log(`here is your  ${this.crust}  ${this.#sauce} sauce  ${this.#size} pizza`)
//   }
// }

// const myPizza = new Pizza('large')
// myPizza.HereYouGo()




// class SpecialtyPizza extends Pizza {
// constructor(pizzaSize) {
//    super(pizzaSize);
//    this.type = 'the Works'
// }
// slice() {
   // console.log( `Our ${this.type}  ${this.size} pizza has 8 slices`) 
// }
// }


// const  mySpecialty = new SpecialtyPizza('Medium')
// mySpecialty.slice()




// factory function (classes)
//   function pizzaFactory(pizzaSize) {
//   const crust = 'original'
//   const size = pizzaSize
//   return {
   //   bake: () => console.log(`baking a  ${size} ${crust} crust pizza`)}
//   }


//   const myPizza = pizzaFactory('small')
//   myPizza.bake();


     // classes . //

                              // json //
      
//       const myObj = {
//          Name: 'dave',
//          hobbies: ['eat', 'sleep', 'code'],
//         hello: function() {
//            console.log('hello')
//         }
//       }


// console.log(myObj)
// console.log(myObj.Name)
// myObj.hello()
// console.log(typeof myObj)



//  const sendJSON = JSON.stringify(myObj)
//  console.log(sendJSON)
//  console.log(typeof sendJSON)
//  console.log(sendJSON.Name)

//  const receiveJSON = JSON.parse(sendJSON)
//  console.log(receiveJSON)
//  console.log(typeof receiveJSON)

    // JSON .//
                           // error handling //
//       'use strict'
//       // const variable = 'Dave'
//       // console.log(variable)

//            const makeError = () => {
//               let i = 1
//               while (i <= 5) {
//                try {
//                   if (i % 2 !== 0) {
//                      throw new Error('odd number')
//                   }
//                   console.log('even number')
//                     } catch(err) {
//                       console.error(err.stack)
//                         }  finally {
//                            console.log('....finaly');
//                            i++;
//                         }
//                      }   
//               }
             
//  makeError()


//  function customeError() {
//   this.message = message
//   this.name = 'customError'
//   this.stack = (`${this.name} ${this.message} `)

//  }
                     // error handling .//

                                         // refactoring code //
      // Your First Interactive Game
// let playGame = confirm("Shall we play rock, paper, or scissors?");
// if (playGame) {
//   //play
//   let playerChoice = prompt("Please enter rock, paper, or scissors.");
//   if (playerChoice) {
//     let playerOne = playerChoice.trim().toLowerCase();
//     if (
//       playerOne === "rock" ||
//       playerOne === "paper" ||
//       playerOne === "scissors"
//     ) {
//       let computerChoice = Math.floor(Math.random() * 3 + 1);
//       let computer =
//         computerChoice === 1
//           ? "rock"
//           : computerChoice === 2
//           ? "paper"
//           : "scissors";

//       let result =
//         playerOne === computer
//           ? "Tie game!"
//           : playerOne === "rock" && computer === "paper"
//           ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//           : playerOne === "paper" && computer === "scissors"
//           ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//           : playerOne === "scissors" && computer === "rock"
//           ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//           : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
//       alert(result);
//       let playAgain = confirm("Play Again?");
//       playAgain ? location.reload() : alert("Ok, thanks for playing.");
//     } else {
//       alert("You didn't enter rock, paper, or scissors.");
//     }
//   } else {
//     alert("I guess you changed your mind. Maybe next time.");
//   }
// } else {
//   alert("Ok, maybe next time.");
// }

   // . //


   // Rock, Paper, Scissors: Refactored with While Loop and an Array
// let playGame = confirm("Shall we play rock, paper, or scissors?");
// if (playGame) {
//   //play
//   while (playGame) {
//     const playerChoice = prompt("Please enter rock, paper, or scissors.");
//     if (playerChoice || playerChoice === "") {
//       const playerOne = playerChoice.trim().toLowerCase();
//       if (
//         playerOne === "rock" ||
//         playerOne === "paper" ||
//         playerOne === "scissors"
//       ) {
//         const computerChoice = Math.floor(Math.random() * 3);
//         const rpsArray = ["rock", "paper", "scissors"];
//         const computer = rpsArray[computerChoice];

//         const result =
//           playerOne === computer
//             ? "Tie game!"
//             : playerOne === "rock" && computer === "paper"
//             ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//             : playerOne === "paper" && computer === "scissors"
//             ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//             : playerOne === "scissors" && computer === "rock"
//             ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//             : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
//         alert(result);
//         playGame = confirm("Play Again?");
//         if (!playGame) alert("Ok, thanks for playing.");
//         continue;
//       } else {
//         alert("You didn't enter rock, paper, or scissors.");
//         continue;
//       }
//     } else {
//       alert("I guess you changed your mind. Maybe next time.");
//       break;
//     }
//   }
// } else {
//   alert("Ok, maybe next time.");
// }

  // . //

        // Rock, Paper, Scissors: Refactored with Functions
// const initGame = () => {
//    const startGame = confirm("Shall we play rock, paper, or scissors?");
//    startGame ? playGame() : alert("Ok, maybe next time.");
//  };
 
//  // Game flow function
//  const playGame = () => {
//    while (true) {
//      let playerChoice = getPlayerChoice();
//      playerChoice = formatPlayerChoice(playerChoice);
//      if (playerChoice === "") {
//        invalidChoice();
//        continue;
//      }
//      if (!playerChoice) {
//        decidedNotToPlay();
//        break;
//      }
//      playerChoice = evaluatePlayerChoice(playerChoice);
//      if (!playerChoice) {
//        invalidChoice();
//        continue;
//      }
//      const computerChoice = getComputerChoice();
//      const result = determineWinner(playerChoice, computerChoice);
//      displayResult(result);
//      if (askToPlayAgain()) {
//        continue;
//      } else {
//        thanksForPlaying();
//        break;
//      }
//    }
//  };
 
//  const getPlayerChoice = () => {
//    return prompt("Please enter rock, paper, or scissors.");
//  };
 
//  const formatPlayerChoice = (playerChoice) => {
//    if (playerChoice || playerChoice === "") {
//      return playerChoice.trim().toLowerCase();
//    } else {
//      return false;
//    }
//  };
 
//  const decidedNotToPlay = () => {
//    alert("I guess you changed your mind. Maybe next time.");
//  };
 
//  const evaluatePlayerChoice = (playerChoice) => {
//    if (
//      playerChoice === "rock" ||
//      playerChoice === "paper" ||
//      playerChoice === "scissors"
//    ) {
//      return playerChoice;
//    } else {
//      return false;
//    }
//  };
 
//  const invalidChoice = () => {
//    alert("You didn't enter rock, paper, or scissors.");
//  };
 
//  const getComputerChoice = () => {
//    const randomNumber = Math.floor(Math.random() * 3);
//    const rpsArray = ["rock", "paper", "scissors"];
//    return rpsArray[randomNumber];
//  };
 
//  const determineWinner = (player, computer) => {
//    const winner =
//      player === computer
//        ? "Tie game!"
//        : player === "rock" && computer === "paper"
//        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
//        : player === "paper" && computer === "scissors"
//        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
//        : player === "scissors" && computer === "rock"
//        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
//        : `playerOne: ${player}\nComputer: ${computer}\nplayerOne wins!`;
 
//    return winner;
//  };
 
//  const displayResult = (result) => {
//    alert(result);
//  };
 
//  const askToPlayAgain = () => {
//    return confirm("Play Again?");
//  };
 
//  const thanksForPlaying = () => {
//    alert("Ok, thanks for playing.");
//  };
 
//  initGame();

                    // . //