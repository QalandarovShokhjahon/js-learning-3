# 🧠 JavaScript Day 3 — User Interaction & String Interpolation

Bu darsda men **JavaScript’da Foydalanuvchi bilan ishlash (User Interaction)** va **Interpolatsiya (String Interpolation)** bilan tanishdim.  
Har bir misolda kodlar orqali ularning ishlash tartibini sinab chiqdim.

---

## 📚 O‘rganganlarim / What I learned
  
-prompt() yordamida foydalanuvchidan ma’lumot olishni o‘rgandim.
→ I learned how to get input from the user using prompt().

-alert() bilan foydalanuvchiga xabar ko‘rsatishni bildim.
→ I learned to show messages to the user using alert().

-confirm() orqali foydalanuvchidan tasdiq (ha/yo‘q) olishni o‘rgandim.
→ I learned how to get confirmation (yes/no) from the user using confirm().

-Interpolatsiya (template literals) yordamida matn ichida o‘zgaruvchilarni qulay joylashtirishni o‘rgandim.
→ I learned how to easily insert variables into text using interpolation (template literals).

-Backtick (`) va ${} sintaksisi + bilan qo‘shishdan qulayroq ekanini bildim.
→ I discovered that using backticks and ${} is cleaner than concatenation with +.

---

## 💻 Kod namunasi / Example code

```javascript
// User Interaction
let ism = prompt('Ismingiz nima?');
let yosh = prompt('Yoshingiz nechida?');
alert('Assalomu Alekum, ' + ism + ' Siz ' + yosh + ' yoshdasiz');

// String Interpolation
const user = "Shokhjahon";
const job = "Frontend Developer";
console.log(`User name is ${user}, he is ${job}👨‍💻`);


🧩 Qisqacha nazariya / Short Theory

🔹 alert() — foydalanuvchiga xabar chiqaradi.
🔹 prompt() — foydalanuvchidan ma’lumot oladi.
🔹 confirm() — foydalanuvchidan ha/yo‘q (true/false) javobini qaytaradi.
🔹 template literals (`) — interpolatsiya uchun ishlatiladi, ${} orqali o‘zgaruvchi joylashtiriladi.
