// reduce(cb, initial value)

Array.prototype.myReduce = function (cb, initialValue) {
  var acc = initialValue;
  for(let i = 0; i<this.length;i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }
  return acc;
}

const nums = [1,2,3,4];
const multiplicationOfAll = nums.myReduce((acc, curr, i, arr)=>{
  return acc * curr;
}, 1);

let students = [
  { name: 'Anjali', rollnumber: 21, marks: 52},
  { name: 'Anjalianj', rollnumber: 22, marks: 62},
  { name: 'Anjalianjali', rollnumber: 23, marks: 82},
  { name: 'Anjalianjalianj', rollnumber: 24, marks: 92},
]

// return only the name of the studnts, 
// use map as we are returning all element just modifying the array

let names = students.map((curr, i, arr)=> {
  return curr.name;
});