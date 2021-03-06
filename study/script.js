'use strict';

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

//=====CLASSLIST=====

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// console.log(btns[1].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

if (btns[1].classList.contains('red')) {
    // console.log('red');
}

//=====EVENTLISTENER=====

btns[0].addEventListener('click', () => {
    btns[1].classList.toggle('red');
});

//-----good example-----
wrapper.addEventListener('click', (event) => {
    // console.dir(event.target);
    if (event.target && event.target.tagName == 'BUTTON') {
        // console.log('Hello');
    }
});

//-----bad example-----
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        // console.log('Hello');
    });
});

//-----top example-----
wrapper.addEventListener('click', (event) => {
    // console.dir(event.target);
    if (event.target && event.target.matches('button.red')) {
        // console.log('Hello');
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

//=====ARRAY METHODS=====

//-----forEach-----
const numbers = [1, 2, 3, 4, 5];
// const result = numbers.forEach(item => console.log(item));

//-----filter-----
const names = ['Anton', 'Ira', 'Alexander', 'Nikolai'];
const shortNames = names.filter(name => name.length < 6);
// console.log(shortNames);

//-----map-----
const names1 = ['ANTON', 'IrA', 'AleXander', 'NikOLai'];
const result1 = names1.map(item => item.toLowerCase());
// console.log(result1);

//-----every/some-----
const names2 = ['Anton', 'Ira', 'Alexander', 'Nikolai', 5];
// console.log(names2.some(item => typeof(item) === 'number'));
// console.log(names2.every(item => typeof(item) === 'number'));

//-----reduce-----
const arr2 = [1, 2, 3, 4, 5];
const result2 = arr2.reduce((sum, current) => sum + current);
// console.log(result2);

const arr3 = [1, 2, 3, 4, 5];
const result3 = arr3.reduce((sum, current) => sum + current, 1000);
// console.log(result3);

const names4 = ['Anton', 'Ira', 'Alexander', 'Nikolai'];
const result4 = names4.reduce((sum, current) => `${sum}, ${current}`);
// console.log(result4);

//-----example-----
const obj = {
    anton: 'person',
    ira: 'person',
    den: 'dog',
    markys: 'cat'
};
const newArr = Object.entries(obj)
.filter(item => item[1] === 'person')
.map(item => item[0]);
// console.log(newArr);

//=====LOCALSTORAGE=====

// localStorage.setItem('test', 'test');
// console.log(localStorage.getItem('test'));
// localStorage.removeItem('');
// localStorage.clear();

const person = {
    Name: 'Anton',
    Age: 21
};
// localStorage.setItem('Anton', JSON.stringify(person));
// console.log(JSON.parse(localStorage.getItem('Anton')));

//=====REGULAR EXPRESSIONS=====

//new RegExp('pattern', 'flags');
// /pattern/flags
// pattern: . - берем все элементы, \. - экранируем, берем точку, \d - цифры, \w - все слова/буквы, \s - пробелы
//\D - не числа, \W, \S - не буква, не пробел
// flags: i - вне зависимости от регистра, g - несколько вхождений, m - многострочный режим

// const ans = prompt('Введите имя');

const reg = /n/i;

// console.log(reg.test(ans)); //вернет true/false есть/нет совпадений
// console.log(ans.search(reg));

//=====ENCAPSULATION=====

// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function() {
//         console.log(`Имя пользователя: ${this.name}, возраст: ${userAge}`);
//     };

//     this.getAge = function() {
//         return userAge;
//     };

//     this.setAge = function(age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log('Недопустимое значение');
//         }
//     };
// }
// class User {
//     constructor(name, age) {
//         this.name = name;
//         this._age = age;
//     }

//     #surname = 'Petrychenko';

//     say = () => {
//         console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._age}`);
//     }
//     set age(age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             this._age = age;
//         } else {
//             console.log('Недопустимое значение!');
//         }
//     }

//     get age() {
//         return this._age;
//     }

//     set surname(surname) {
//         this.#surname = surname;
//     }

//     get surname() {
//         return this.#surname;
//     }
// }

// const ivan = new User('Ivan', 27);

// // console.log(ivan.getAge());
// // ivan.setAge(23);
// // console.log(ivan.getAge());
// ivan.surname = 'haha'
// console.log(ivan.surname);
// ivan.say();

//=====TRY CATCH=====

// try {
//     console.log('normal');
//     console.log(a);
//     console.log('result');
// } catch(error) {
//     console.log(error);
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// } finally {
//     console.log('End');
// }

// console.log('Still normal');

//=====FUNCTION GENERATOR=====

// function* count(n) {
//     for (let i = 0; i < n; i++) {
//         yield i;
//     } 
// }

// for (let i of count(7)) {
//     console.log(i);
// }