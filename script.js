"use strict";

// JavaScript’da foydalanuvchi bilan ishlash (User Interaction) deganda — brauzer orqali foydalanuvchidan ma’lumot olish, 
// unga xabar chiqarish yoki tasdiq so‘rash jarayonlari tushuniladi.

// Alert
// alert('Hello JavaScript');

// let xabar = 'Saytimizga xush kelibsiz!';
// alert(xabar);

// let xabar = 'Bugun bayram!';
// alert(xabar);

// let vaqt = '13:00';
// alert('Bugungi uchrashuv vaqti: ' + vaqt);


// Confirm
// let joy = confirm('Shu yerdamisan?');
// alert(joy);

// let savol = confirm("Bu veb-sayt sizga yoqdimi?");
// alert(savol);

// let savol = confirm("Bu saytdan chiqmoqchimisiz?");
// alert(savol);


// Prompt
// let ism = prompt("Ismingiz nima?");
// alert("Salom, " + ism + "!");

// let userName = prompt('Iltimos ism kiriting');
// alert('Hush kelibsiz' + userName + '!');

// + - string
// console.log('Shokhjahon ' + 'Qalandarov');
// let ism = prompt('Ismingiz nima?');
// let familiya = prompt('Familiyangiz nima');
// alert(ism  + familiya)


// let a = +prompt("1-sonni kiriting.")
// let b = +prompt("2-sonni kiriting.")
// alert(a + b)

// let ism = prompt('Ismingiz nima?');
// let yosh = prompt('Yoshingiz nechida?');
// alert('Assalomu Alekum, ' + ism + ' Siz ' + yosh + ' yoshdasiz');

// let davlat = prompt('Qaysi davlatda yashaysiz?');
// alert('Siz ' + davlat + 'da yashaysiz!');

// let asistent1 = prompt('1-asistentingiz ismi?');
// let asistent2 = prompt('2-asistentingiz ismi?');
// let asistent3 = prompt('3-asistentingiz ismi?');
// alert("Bu assistentlar sizning jamoangizdagi a'zolari :" + asistent1  + asistent2  + asistent3);


// Interpolatsiya → bu backtick(``) yordamida matn ichida o‘zgaruvchi yoki ifodalarni ${} yordamida qo‘shish usuli.
const user = "Shokhjahon";
const job = "Frontend Developer";
console.log(`User name is ${user}, he is ${job}👨‍💻`);

let ism = prompt ('Ismingizni kirting!');
let kasb = prompt ('Kasbingizni kiriting!');
alert(`Salom ${ism} sizning kasbingiz ${kasb}!`)

let kanalNomi = prompt('Sevimli YouTube kanalingiz?');
alert(`https://youtube.com/@${kanalNomi}`)