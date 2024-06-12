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
  
/////////
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
const age = 18;
if (age >= 18) {
  'You are true';
} else{
  'You are false';
}

//For/Loop (position of loop exp 1; position 2 where it ends;position 3 the kind if steps they will take. i++ increment operator/ i)
for(let i = 0; i <= 5; i+=2) {
  console.log('We did it!',i);
}

//function
//defining a function

function login(username, password){
  //validate the username and password
  if (username =='annice' && password == '1234'){
    return 'user is logged in';
  } else{
    return 'invalid username or password';
  }
}

//invoking a function
login('annice');

//Basic Arithmetic operations
11+12;
1+0.5;
43-12;
45/7;
5*3;
14%3;

Math.floor(45/25);
45%24;
Math.random()*1000
Math.max(34,32,37);
2*(3+4)-5/2;


//the use of Num()
Number('2')+2


//strings in JavaScript
//concatenation
const firstname = 'Priscilla';
const lastname = 'King';
firstname +  ' ' +  lastname;


//Template Literal
'${firstname}  ${lastname}';

let fullName = 'priscilla king'

fullName.length
fullName.toUpperCase()
fullName.toLowerCase()
fullName.charAt(5)
fullName.charAt(7)
fullName.slice(6,11)
fullName.split('')
fullName.replace('priscilla','king')
fullName.indexOf('illa')

//string conversion
Number('3.243')
parseInt('3.243')
parseFloat('3.243')
let amount = 1800
console.log('GHS${amount}')
amount.toString()


//Write a function that will add a participant to our Google Classroom

// My Trial code
// function add(newuser, password){
//   if (newuser == 'Joe' && password == '5678')
//     {
//       return 'Signed up';
//     } else {
//       return 'return to log in';
//     }
// }

// add('Joe');

//He declared a push to add to the existing data but I didnt
// if (email === undefined || email === null) is equal to (!email) ! means not


const participants = [];
function addParticipant(email) {
  //Check if email was provided
   if (!email){
     return 'No email provided'
   }
  //check if email is valid
  if (!email.includes('@')) {
    return 'Invalid email provided';
  }
  //Add email to participant
  participants.push(email); 
  return 'Participant added';
}
addParticipant('kingpriscy@gmail.com');
addParticipant('kingpriscy@gmail.com');
addParticipant();
participants;

//Arrays in JavaScript
const users =[
  {
  username: 'priscyk',
  password:'1234',
  email:'priscyking3@gmail.com'
},
{
  username: 'Carlk',
  password:'0000',
  email:'carlk@gmail.com'
}
];
users;


//Write a function that will take a user with firstname,lastname and return fullname;

//class code
// function fullName(user){
//   return user.firstname + ' ' + user.lastname;
//   //return `${user.firstname} ${user.lastname}`;
// }

// const user = {
//   firstname: 'Priscilla',
//   lastname: 'King'
// }
// fullName(user);



//class code
// function fullName(user){
//   return {
//     ...user,
//    fullName: `${user.firstname} ${user.lastname}`
//   }
//   }


// const user = {
//   firstname: 'Priscilla',
//   lastname: 'King'
// }
// fullName(user);


// //Array map
// const users = [
//   { firstname: 'Michael', lastname:'Hammond'},
//   { firstname: 'Simon', lastname:'Kissi'},
//   { firstname: 'Segoe', lastname:'Sherif'},
//   { firstname: 'Nat', lastname:'Kumi'},
//   { firstname: 'Seth', lastname:'Ham'},
//   { firstname: 'Naana', lastname:'Mond'},
// ]
// users.map(fullName)






//Square of numbers
function square(number){
  return number ** 2;
}
square(6);

const numbers = [9, 8, 7, 6];
numbers.map(square);


//Array filter
function isEven(number) {
  return number % 2 === 0;
  }
isEven(6);
numbers.filter(isEven);


function isOdd(number) {
  return number % 3 === 0;
}
isOdd(9)
numbers.filter(isOdd);







//Write a function that will allow a user to reset their password
const user ={
  email:'mickeymond@yahoo.com',
  password: '1234',
}

//p-try
// function reset(password){ 
//   if (!password.includes('1234')){
//     return 'reset password';
//   } else {
//     return 'valid'
//   }
// }
//  reset('');


//class attempt-1
// function resetPassword(email, newPassword){
//   //Update password with new one
//   user.password = newPassword;
//     // return 'Password reset successful'
//   }
// resetPassword();
// user;
// // newPassword;



function resetPassword(email, newPassword){
  ///check if email and new password was provided
  if (!email || !newPassword){
    return "Email or prassword not provided"; 
  }
  
  //Check if provided email is correct
  if(email === user.email){
      //Update password with new one
  user.password = newPassword;
    return "Password reset successful";
  }
  if (email !== user.email){
    return "Invalid email";
  }
}

user;
resetPassword("mickeymond@outlook.com");
user;


