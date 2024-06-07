const btn = document.getElementById('btn');
btn.onclick = function () {
  const name = prompt('Enter your full name.');
  document.getElementById('name').innerText = name;
}


// variable
const pi = 3.142;
let username = 'priscyk';
let age = 101;
let present = false;



// objects
const person = { 
    username: 'priscyk',
    age: 101,
    present: false,
    child: {
        name:'Mickey Mouse',
        friend:{
            name:'Biggie',
        }
    }
}

console.log(person.username);

// change
person.age = 105;
console.log(person);



// Arrays
const  bottle1 = {
    size: 'large',
    color:'yellow',
  }
  
  
  
  const bottle2 = {
    size:'small',
    color: 'blue',
  }
  
  
  const bottles = [bottle1, bottle2,]
  bottles.push(bottle1);
  bottles.push(bottle2);
  bottles;
  bottles[0].size;
  
  
  const date = new Date ();
  date.getDay();
  
  //if/Else
// const age = 18;
  if (age >= 18) {
    'You are true';
  } else{
    'You are false';
  }
  
  //For/Loop (position of loop exp 1; position 2 where it ends;position 3 the kind if steps they will take. i++ increment operator/ i)
  for(let i = 0; i <= 5; i+=2) {
    console.log('We did it!',i);
  }
  

//   // Arrays
// const  bottle1 = {
//   size: 'large',
//   color:'yellow',
// }



// const bottle2 = {
//   size:'small',
//   color: 'blue',
// }


// const bottles = [bottle1, bottle2,]
// bottles.push(bottle1);
// bottles.push(bottle2);
// bottles;
// bottles[0].size;


// const date = new Date ();
// date.getDay();

// //if/Else
// const age = 18;
// if (age >= 18) {
//   'You are true';
// } else{
//   'You are false';
// }

// //For/Loop (position of loop exp 1; position 2 where it ends;position 3 the kind if steps they will take. i++ increment operator/ i)
// for(let i = 0; i <= 5; i+=2) {
//   console.log('We did it!',i);
// }

// //function
// //defining a function

// function login(username, password){
//   //validate the username and password
//   if (username =='annice' && password == '1234'){
//     return 'user is logged in';
//   } else{
//     return 'invalid username or password';
//   }
// }

// //invoking a function
// login('annice');

// //Baic Arithmetic operations
// 11+12;
// 1+0.5;
// 43-12;
// 45/7;
// 5*3;
// 14%3;

// Math.floor(45/25);
// 45%24;
// Math.random()*1000
// Math.max(34,32,37);
// 2*(3+4)-5/2;


// //the use of Num()
// Number('2')+2


// //strings in JavaScript
// //concatenation
// const firstname = 'Priscilla';
// const lastname = 'King';
// firstname +  ' ' +  lastname;


// //Template Literal
// '${firstname}  ${lastname}';

// let fullName = 'priscilla king'

// fullName.length
// fullName.toUpperCase()
// fullName.toLowerCase()
// fullName.charAt(5)
// fullName.charAt(7)
// fullName.slice(6,11)
// fullName.split('')
// fullName.replace('priscilla','king')
// fullName.indexOf('illa')

// //string conversion
// Number('3.243')
// parseInt('3.243')
// parseFloat('3.243')
// let amount = 1800
// console.log('GHS${amount}')
// amount.toString()