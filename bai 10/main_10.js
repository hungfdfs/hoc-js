let a = 99;
let b = 10;
let c = 77;
let d = 88;
a++; // tương đương với a = a + 1 ;-->100
b--; // tương đương với b = b - 1 ;-->9
++c; // tương đương với c = c + 1 ;-->78
--d; // tương đương với d = d - 1 ; --> 87
console.log(a);
console.log(b);
console.log(c);
console.log(d);

/*
Trường hợp biểu thức phức tạp thì tuân theo quy tắc sau: 
+,Quy tắc viết dấu ++, --
    a++, a-- (viết phía sau biến) => Postfix 
    ++a, --a (viết trước biến) => Prefix 
+,Ưu tiên tính toán Postfix, Prefix 
    Step 1. Prefix 
    Step 2. Các phép toán còn lại 
    Step 3. Gán giá trị cho biến ở bên trái dấu bằng 
    Step 4. Tính postfix
*/

let x = 1;
let y = 2;
let z = x++ - ++y + 1;
console.log(x); // 2
console.log(y); // 3
console.log(z); //-1
