
let text1 = prompt("Введіть текст для першого поля:");
let text2 = prompt("Введіть текст для другого поля:");


if (text1 && text2) {
    console.log("Обидва поля заповнені");

} else {
    console.log("Не всі поля заповнені");

}


let num1 = Number(prompt("Введіть перше число:"));
let num2 = Number(prompt("Введіть друге число:"));

if (num1 + num2 > 10) {
  console.log("Сума більша за 10");
} else {
  console.log("Сума менша або дорівнює 10");
}


let text = prompt("Введіть текст:");


if (text && text.includes("JavaScript")) {
  console.log("Текст містить слово JavaScript");
} else {
  console.log("Текст не містить слово JavaScript");
}

let number = Number(prompt("Введіть число:"));

if (number > 10 && number < 20) {
  console.log("Число входить в діапазон від 10 до 20");
} else {
  console.log("Число не входить в діапазон від 10 до 20");
}


let name = prompt("Введіть ваше ім'я:");
let email = prompt("Введіть ваш email:");
let password = prompt("Введіть ваш пароль:");



let isNameValid = name && name.length >= 3;
let isEmailValid = email && email.includes("@") && email.includes(".", email.indexOf("@"));
let isPasswordValid = password && password.length >= 6;

if (isNameValid && isEmailValid && isPasswordValid) {
  console.log("Перенаправлення на іншу сторінку");
} else {
  console.log("Помилка: неправильне заповнення");
}