// map, filter, reduce
// map() - used for creating a new array from an existing array by applying function to each element of the first array
// Q-

// map(callback fn) => callback fn = ( current value, index, arr)
const nums = [1, 2, 3, 4];
const multiplyThree = nums.map((num, i, arr) => {
  return num * 3;
});

// console.log(multiplyThree);

// filter(callback fn) => callback fn = (current value, index, arr)
// filter() - Takes the element in an array and applies a conditional check on the element, if conditional returns true then that element push into the array

const greaterThanTwo = nums.filter((num, i, arr) => {
  return num > 2;
});

// console.log(greaterThanTwo);

//reduce(callback fn, initial value) => callback fn = (accumulator, curr, index, arr)
// reduce - return single value, it performs some operations on the array and return one value
// acc = result of the previous computation
const sum = nums.reduce((acc, num, i, arr) => {
  return acc + num;
}, 0);

// console.log(sum);

let students = [
  { name: "Anjali", rollnumber: 21, marks: 52 },
  { name: "Anjali2", rollnumber: 22, marks: 65 },
  { name: "Anjali3", rollnumber: 23, marks: 34 },
  { name: "Anjali4", rollnumber: 24, marks: 91 },
];

// return only the name of the studnts,
// use map as we are returning all element just modifying the array

const names = students.map((curr, i, arr) => {
  return curr.name;
});

// console.log(names);

// Q - return only those students who scored more than 60 marks

const stuMoreThanSixty = students.filter((curr, i, arr) => {
  return curr.marks > 60;
});

// console.log(stuMoreThanSixty);

// Q- sum of marks of all the students

const sumOfMarks = students.reduce((acc, curr) => {
  return acc + curr.marks;
}, 0);

// console.log(sumOfMarks);

// Q- return only names of students who scored more than 60
// These funtions allow chaining
const answer = students.filter((stu) => stu.marks > 60).map((stu) => stu.name);
// console.log(answer);

// Q- return total marks for student with marks greater than 60 after 20 marks have been added to those who scored less than 60

const allAnswer = students
  .map((stu) => {
    if (stu.marks < 60) {
      stu.marks += 20;
    }
    return stu;
  })
  .filter((stu) => stu.marks > 60)
  .reduce((acc, stu) => acc + stu.marks, 0);
// console.log(allAnswer);

var x = 21;

var fun = function () {
  console.log(x);
  var x = 20;
};

// fun();

// Spread and rest operator
function multiply(...nums) {
  // Rest
  console.log(nums);
}

const arr = [5, 6];
// console.log(...arr); // Spread

// multiply(5,6); // or multiply(...arr)

const fn = (a, x, y, ...numbers) => {
  console.log(x, y, numbers);
};

// fn(5,6,3,7,8,9);

// Arrow funtions

// Arguments keyword
function fnArr() {
  console.log(arguments);
}

// fnArr(1,2,3);

// this keyword - arrow fn gives undefined for this, while regular fn check for parent obj

var myName = "Hi"; // global
let details = {
  myName: "Anjali",
  rc1: () => {
    console.log("Hi this is ", this.myName);
  },
  rc2: function () {
    console.log("Hi this is ", this.myName);
  },
};

// details.rc1();
// details.rc2();

// Questions

function createBase(num1) {
  return function (num2) {
    console.log(num1 + num2);
  };
}
var addSix = createBase(6);
// addSix(10);
// addSix(21);

// Block scoped vs settimeout

function fnSettimeout() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
// 0 1 2
// fnSettimeout();

//0 1 2 with closure

// for( var i=0;i<3;i++) {
//   function inner (i) {
//     setTimeout(function () {
//       console.log(i);
//     }, i*1000);
//   }
//   inner(i);
// }

// private counter

function counter() {
  var _counter = 0;

  function add(val) {
    return (_counter += val);
  }

  function retreive() {
    return "Count is " + _counter;
  }

  return {
    add,
    retreive,
  };
}

// as we cannot acces var _counter outside the function due to its scope
// so we are creating closure update its value
const callCounter = counter();
callCounter.add(5);
callCounter.add(10);
const tr = callCounter.add(2);
// console.log(callCounter.retreive());

// What is a module pattern

var Module = (function () {
  function privateMethod() {
    console.log("private");
  }
  return {
    publicMethod: function () {
      console.log("public");
    },
  };
})(); // iife
console.log(Module, typeof Module);

Module.publicMethod();

// make this run only once
let view;
function likeTheVideo() {
  view = "hi";
  console.log(view);
}

// likeTheVideo();

function likeTheVideoClosure () {
  let count = 0;
  return function () {
    if( count > 0) {
      console.log('Already called');
    } else {
      view = 'hi';
      console.log('view', view);
      count++;
    }
  }
}

const fnCalled = likeTheVideoClosure(); // this creates local var count
likeTheVideoClosure()();
likeTheVideoClosure()();
fnCalled();
fnCalled();
fnCalled();

// Lodash library already has once function