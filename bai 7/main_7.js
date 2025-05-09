//7. các cách xuất dữ liệu với biến của JavaScript
let soA = 25;
let soB = 5;
// Cách 1:
console.log("Căn bậc hai của " + soA + " là: " + soB);
// Cách 2:
console.log("Căn bậc hai của", soA, "là:", soB);
// Cách 3:
console.log(`Căn bậc hai của ${soA} là: ${soB}`);
// Cách 4:
console.log(`Căn bậc hai của %s là: %s`, soA, soB);

// luyện tập
let a = 4,
  b = 3,
  kq = a * b;

// xuất kết quả ra màn hình console theo 4 cách đã
// Cách 1:
console.log("Ket qua cua " + a + " nhân với " + b + " bằng: " + kq);
// Cách 2:
console.log("Ket qua cua", a, "nhân với", b, "bằng:", kq);
// Cách 3:
console.log(`Ket qua cua ${a} nhân với ${b} bằng: ${kq}`);
// Cách 4:
console.log(`Ket qua cua %s nhân với %s bằng: %s`, a, b, kq);
