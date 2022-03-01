// Object

// Вспоминаем создание объекта в JS

// const circle = {
//     radius: 1,
//     position:  {
//         x: 1,
//         y: 2
//     },
//     draw: function (){
//         console.log(`Drawing circle`);
//     }
// }
// circle.draw()

//Как вы думаете, что нужно сделать чтобы создать круг как указано выше только с радиусом больше?

//    Идея создания второго объекта меняя только значение радиуса будет плохой


// const circle = {
//     radius: 1,
//     draw: function () {
//         console.log("Drawing circle");
//     },
// };
//
// const circle2 = {
//     radius: 2,
//     draw: function () {
//         console.log("Drawing circle2");
//     },
// };
//
// circle.draw();
// circle2.draw();


// - **Factory function**

// Factory function для создания объектов


// function createCircle (radius) {
//     return {
//       radius: radius,
//         draw: function (){
//             console.log(`Drawing circle...${this.radius}`)
//         }
//     }
// }
//
// let circle1 = createCircle(1);
// circle1.draw()
//
// let circle2 = createCircle(2);
// circle2.draw()


// - **Constructor function**

//Создание объекта через функцию конструктор
//
// function Circle(radius){
//     this.radius = radius;
//     this.draw = ()=>{
//         console.log(`Drawing...${this.radius}`);
//     }
// }
//
// let circle1 = new Circle(1);
// circle1.draw()
// let circle2 = new Circle(2);
// circle2.draw()

// - **Class**

// **Что такое класс?**

// В объектно-ориентированном программировании класс – это расширяемый шаблон кода для создания объектов, который устанавливает в них начальные значения (свойства) и реализацию поведения (методы).

    // Создание объектов через Class


// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//     }
//     draw(){
//         console.log(`Drawing...${this.radius}`)
//     }
//
// }
//
// let circle = new Circle(1);
// circle.draw()
// let circle1 = new Circle(2);
// circle1.draw()



/*- **Насследование**

    Класс может наследовать от другого класса.*/


// class User {
//     constructor(name, age) {
//        this.name = name;
//        this.age = age;
//     }
//     sayName(){
//         console.log(`Hello! My name is ${this.name}`);
//     }
//     sayAge(){
//         console.log(`I am ${this.age}`)
//     }
// }
//
// let user1 = new User('Bektursun', 23);
// user1.sayName();
// user1.sayAge()
//
// class Admin extends User {
// constructor(name, age, userRole) {
//     super(name,age);
//     this.userRole = userRole;
// }
//  SayRole() {
//     console.log(`I am ${this.userRole} in this group.`)
// }
// }
//
// let admin = new Admin('Bektursun', 23, 'Admin');
// admin.sayName();
// admin.sayAge()
// admin.SayRole()


//Переопределение методов и свойств
//
//
// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     sayName() {
//         document.write(` Hello my name is ${this.name} `);
//     }
//
//     sayAge() {
//         document.write(` I am ${this.age} `);
//     }
// }
//
// class Admin extends User {
//     constructor(name, age, userRole) {
//         super(name, age);
//         this.userRole = userRole;
//     }
//     sayHello(){
//         super.sayName();
//         document.write(` Super hero of This site`)
//     }
//     seyAge(){
//         super.sayAge();
//         document.write(` I am Younger than you.`)
//     }
//     sayRole(){
//         document.write(` I am ${this.userRole} in your group. So I can remove you and add you.`)
//     }
// }
//
// let admin1 = new Admin('Bektursun', 23, 'admin');
// admin1.sayHello();
// admin1.seyAge()
// admin1.sayRole()


// Особенности копирования значения переменных

// let x = { order: 20 };
// let y = x;
//
// x.order = 50;
//
// console.log(x);
// console.log(y);
//
// let x = 10;
// let y = x;
//
// x = 20;
//
// console.log(x);
// console.log(y);



//exercise
//
//
// class Restaurant {
//     name;
//     type;
//     served = 0;
//     constructor(name, type,sum ) {
//         this.name = name;
//         this.type = type;
//         this.served = 0;
//
//     }
//     sayName(){
//         console.log(`This restaurant is ${this.name}.`);
//     }
//     sayType(){
//         console.log(`This restaurant is ${this.type}.`);
//     }
//     sayAbout(){
//         console.log(`Open`)
//     }
//    serve(){
//        ++this.served;
//        console.log(this.served)
//     }
//     setServed(newServed){
//         console.log(this.served += newServed);
//     }
//     showTotalServed(){
//         console.log(this.served);
//     }
// }
//
// let theRestaurant = new Restaurant('Pales', 'Ghost Restaurant',);
//
// theRestaurant.sayName();
// theRestaurant.sayType();
// theRestaurant.sayAbout();
// theRestaurant.serve();
// theRestaurant.setServed();
// theRestaurant.showTotalServed();
// theRestaurant.showTotalServed();



// class User {
//     constructor(firstName, lastName,age,profession,) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     describeUser(){
//         console.log(`My name is ${this.firstName}. My surname is ${this.lastName}.`);
//     }
//     greetUser(){
//         console.log(`What's up guis? How about you?`);
//     }
// }
//
// let user1 = new User('Bektursun', 'Baimamatov',);
// user1.describeUser()
// user1.greetUser()

// class Cars{
//     constructor(mark, issue, power, color) {
//         this.mark = mark;
//         this.issue = issue;
//         this.power = power;
//         this.color = color;
//     }
//     sayMark(){
//         console.log(`This machine is ${this.mark}.`);
//     }
//     sayIssue(){
//         console.log(`${this.mark} is produced by Mercedes-Benz in ${this.issue} years.`);
//     }
//     sayPower(){
//         console.log(`${this.mark}'s power is ${this.power}.`);
//     }
//     sayColor() {
//         console.log(`${this.mark}'s color is ${this.color}. `);
//     }
// }
//
// class ElectroCars extends Cars {
//     constructor(mark, issue, power, color, volume) {
//         super(mark, issue, power, color);
//         this.volume = volume;
//     }
//     sayVolume(){
//         console.log(`${this.mark}'s volume of engine is ${this.volume}.`);
//     }
// }
//
// let electroCar = new ElectroCars('S-Class', 2019, 600, 'blue', 5320);
//
// electroCar.sayMark();
// electroCar.sayIssue();
// electroCar.sayPower();
// electroCar.sayColor();
// electroCar.sayVolume();

// class Restaurant {
//     name;
//     cusineType;
//     isOpen;
//     served = 0;
//
//     constructor(name, cusineType) {
//         this.name = name,
//             this.cusineType = cusineType;
//     }
//
//     showInfo() {
//         document.write(`
//         Ресторан: ${this.name}<br>
//         Тип кухни: ${this.cusineType}<br>
//         `);
//     }
//
//     setStatus(status) {
//         this.isOpen = status;
//     }
//
//     showStatus() {
//         if (this.isOpen) {
//             document.write(`Open <br>`);
//         } else {
//             document.write(`Closed <br>`);
//         }
//     }
//
//     serve() {
//         return this.served++;
//     }
//
//     setServed(numberOfServed){
//         this.served += numberOfServed;
//     }
//
//     showTotalServed(){
//         document.write(`Total served: ${this.served}<br>`);
//     }
// }
//
// const supara = new Restaurant('Supara', 'kyrgyz');
//
// supara.showInfo();
// supara.setStatus(false);
// supara.showStatus();
// supara.serve();
// supara.showTotalServed();
// supara.serve();
// supara.showTotalServed();
// supara.setServed(15);
// supara.showTotalServed();
