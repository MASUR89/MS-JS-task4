//    1. Arrow Function და ორი რიცხვის დაჯამება
const add = (a, b) => a + b;
console.log(add(14, 15));

// 2. დაწერე Anonymous ფუნქცია, რომელიც მიიღებს ორ რიცხვს და დააბრუნებს მათ შორის სხვაობას. მაგალითად: (function(a, b) { return a - b; })(8, 3);
const minus = (c, d) => {
    console.log(c - d);
}
minus(8, 3)

// 3. Arrow Function // დაწერე რომელიც მიიღებს ერთ რიცხვს და შეამოწმებს, არის თუ არა ის ლუწი (თუ ლუწია დააბრუნებს true);
const isEven = (num) => num %2 === 0;
console.log(isEven(22));

// 4. Callback Function და გამრავლება
function Number1(Callback) {
    const multiply = (5);
    return Callback(multiply)
}
function Number2(multiply) {
    return 6 * multiply;
}
console.log(Number1(Number2));

// 5. Arrow Function და რიცხვის დადებითობის შემოწმება
const isPositive = (num2) => num2 > 0;
console.log(isPositive(-9));

// 6. დაწერე Anonymous ფუნქცია, რომელიც მიიღებს რიცხვს და დააბრუნებს მის გაორმაგებულ მნიშვნელობას. მაგალითად: (function(n) { return n * 2; })(5);
const double = function(n) { 
    return n * 2; 
};
console.log(double(5));

// 7. დაწერე ფუნქცია, რომელიც მიიღებს რიცხვს და Callback ფუნქციას, რომელიც დააბრუნებს ამ რიცხვის გაორმაგებულ მნიშვნელობას:
function Number3(Callback) {
    const double = (11);
    return Callback(double)
}
function Number4(double) {
    return 2 * double;
}
console.log(Number3(Number4));

// 8. Arrow Function და რიცხვის ნაშთის შემოწმება
const iyofaSamze = (num3) => num3 %3 === 0;
console.log(iyofaSamze(33));

// 9. Callback Function და რიცხვის გადამოწმება
function Number5(Callback) {
    const isEven = (49);
    return Callback(isEven)
}
function Number6(isEven) {
    return isEven %2 === 0
}
console.log(Number5(Number6));

// 10. Arrow Function და რიცხვის კუბის გამოთვლა:
// Arrow Function, რომელიც მიიღებს რიცხვს და დააბრუნებს მის კუბს. მაგალითად: const cube = (num) => num * num * num;

// 11. Callback Function და მარტივი გამრავლება:
// დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და Callback ფუნქციას, რომელიც დააბრუნებს მათ ნამრავლს.

// 12. Arrow Function და რიცხვის დადებითობის შემოწმება:
// Arrow Function, რომელიც შეამოწმებს, არის თუ არა რიცხვი ნულზე მეტი. მაგალითად: const isGreaterThanZero = (num) => num > 0;

// 13. დაწერე Anonymous ფუნქცია, რომელიც მიიღებს ერთ რიცხვს და დააბრუნებს მის ნახევარს. მაგალითად: (function(n) { return n / 2; })(10);
// Callback Function და რიცხვის დამატება:

// 14. დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და Callback ფუნქციას, რომელიც შეაჯამებს ამ რიცხვებს.

// 15. Arrow Function, რომელიც მიიღებს ერთ რიცხვს და დააბრუნებს მის კვადრატს. მაგალითი: const square = (num) => num * num;