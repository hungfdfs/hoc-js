// 09. Toán tử gán
// 1. Toán Tử Gán (=) Dùng để gán giá trị cho biến.
let x = 10; // Biến x được gán giá trị 10
let y = 5; // Biến y được gán giá trị 5
let z = x + y; // Biến z được gán giá trị là tổng của x và y
console.log(x);
console.log(y);
console.log(z);

// Gán +=, -= *=, /= %= و
console.log("Kết quả gán +=, -= *=, /=, =");
let m = 10;
m += 5; // Tương đương với m = m + 5
console.log(m);

let n = 8;
n = 3; // Tương đương với n = n - 3
console.log(n);

let p = 6;
p *= 2; // Tương đương với p = p * 2;
console.log(p);

let q = 9;
q /= 3; // Tương đương với q = q / 3
console.log(q);

let r = 4;
r %= 3; // Tương đương với r = r % 3,
console.log(r);

/*
Bài tập 3 : Thực hiện các phép toán gán và in ra kết quả 
let a = 7 
a. Thực hiện phép toán gán mở rộng để tăng giá trị của a lên 3 và in ra kết quả 
Gợi ý: sử dụng toán tử += 
a +=3 
console.log("a = ", a);
b) b = 15 b -=6 
c) c = 5 c ^ * =4 
d) d =I2, d /=2 
e) e = 5 f = 2 rút gọn biểu thức e = e - (f + 1)
*/

//Bài tập
//a)
let a = 7;
a += 3; //Tương đương a = a + 3;
console.log(a);

//b)
let b = 15;
b -= 6; //Tương đương b = b - 6;
console.log(b);

//c)
let c = 5;
c *= 4; //Tương đương c = c * 4;
console.log(c);

//d)
let d = 12;
d /= 2; //Tương đương d = d / 2;
console.log(d);

//e)
let e = 5;
let f = 2;
e -= f + 1; //Tương đương e = e-(f+1);
console.log(e);
