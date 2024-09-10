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

// const age = Number(prompt(`enter your age`));
// let description;

// if (age >= 0 && age < 13) {
//     description = `child`;
// } else if (age >= 13 && age < 18) {
//     description = `teenager`;
// } else if (age >= 18 && age < 65) {
//     description = `adult`;
// } else {
//     description = `old person`
// }

// confirm(description);

const age = prompt(`enter age`);
let category;

switch (true) {
    case (age >= 0 && age <= 12):
        category = "Дитина";
        break;
    case (age >= 13 && age <= 17):
        category = "Підліток";
        break;
    case (age >= 18 && age <= 64):
        category = "Дорослий";
        break;
    case (age >= 65):
        category = "Пенсіонер";
        break;
    default:
        category = "Невірний вік";
}

console.log(category);