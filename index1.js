//  task 1

// const day = Number(prompt(`enter num from 1 to 7`));
// let dayName;

// switch (day) {
//     case 1:
//       dayName = "Понеділок";
//       console.log("Вибрано день:", dayName);
//       break;
//     case 2:
//       dayName = "Вівторок";
//       console.log("Вибрано день:", dayName);
//       break;
//     case 3:
//       dayName = "Середа";
//       console.log("Вибрано день:", dayName);
//       break;
//     case 4:
//       dayName = "Четвер";
//       console.log("Вибрано день:", dayName);
//       break;
//     case 5:
//       dayName = "П'ятниця";
//       console.log("Вибрано день:", dayName);
//       break;
//     case 6:
//       dayName = "Субота";
//       console.log("Вибрано день:", dayName);
//       break;
//     case 7:
//       dayName = "Неділя";
//       console.log("Вибрано день:", dayName);
//       break;
//     default:
//       dayName = "Невірний номер дня";
//       console.log(dayName);
//   }
  
//   console.log("Назва дня:", dayName);

//   task 2

// const season = Number(prompt(`enter num from 1 to 12`));
// let thisSeason;

// switch (season) {
//     case 1:
//         thisSeason = `summer`;
//         break;
//     case 2:
//         thisSeason = `summer`;
//         break;
//     case 3:
//         thisSeason = `summer`;
//         break;
//     case 4:
//         thisSeason = `autumn`;
//         break;
//     case 5:
//         thisSeason = `autumn`;
//         break;
//     case 6:
//         thisSeason = `autumn`;
//         break;
//     case 7:
//         thisSeason = `winter`;
//         break;
//     case 8:
//         thisSeason = `winter`;
//         break;
//     case 9:
//         thisSeason = `winter`;
//         break;
//     case 10:
//         thisSeason = `spring`;
//         break;
//     case 11:
//         thisSeason = `spring`;
//         break;
//     case 12:
//         thisSeason = `spring`;
//         break;
//     default:
// }

// confirm(thisSeason);

// task 3

// const age = prompt(`enter age`);
// let category;

// switch (true) {
//     case (age >= 0 && age <= 12):
//         category = "Дитина";
//         break;
//     case (age >= 13 && age <= 17):
//         category = "Підліток";
//         break;
//     case (age >= 18 && age <= 64):
//         category = "Дорослий";
//         break;
//     case (age >= 65):
//         category = "Пенсіонер";
//         break;
//     default:
//         category = "Невірний вік";
// }

// console.log(category);

// task 4


// const numOne = parseInt(prompt(`enter first number`));
// let x = prompt(`enter * or / or + or -`);
// const numTwo  = parseInt(prompt(`enter second number`));
// let y;
// // y = numOne * numTwo;

// switch (x) {
//     case x = `*`:
//         y = numOne * numTwo;
//         break;
//         case x = `/`:
//             y = numOne / numTwo;
//             break;
//             case x = `+`:
//                 y = numOne + numTwo;
//                 break;
//                 case x = `-`:
//                     y = numOne - numTwo;
//         break;
//         default:
            
// }
        
// console.log(y);


// task 5

// const season = Number(prompt(`enter num from 1 to 12`));
// let thisSeason;

// switch (season) {
//     case 1:
//         thisSeason = `January`;
//         break;
//     case 2:
//         thisSeason = `February`;
//         break;
//     case 3:
//         thisSeason = `March`;
//         break;
//     case 4:
//         thisSeason = `April`;
//         break;
//     case 5:
//         thisSeason = `May`;
//         break;
//     case 6:
//         thisSeason = `june`;
//         break;
//     case 7:
//         thisSeason = `July`;
//         break;
//     case 8:
//         thisSeason = `August`;
//         break;
//     case 9:
//         thisSeason = `September`;
//         break;
//     case 10:
//         thisSeason = `October`;
//         break;
//     case 11:
//         thisSeason = `November`;
//         break;
//     case 12:
//         thisSeason = `December`;
//         break;
//     default:
// }

// confirm(thisSeason);

// task 6

const personal = prompt(`enter how good we were, відмінно or добре or задовільно`);
let teaMoney = 'відмінно';

switch (true) {
    case personal = `відмінно`:
        teaMoney = `you have to pay 20% of all price to teaMoney`;
        break;
        case personal = `добре`:
            teaMoney = `you have to pay 15% of all price to teaMoney`;
            break;
            case personal = `задовільно`:
                teaMoney = `you have to pay 10% of all price to teaMoney`;
                break;
                default:
                    
                }
                console.log(teaMoney);

