// filter(cb)
Array.filter(cb);
Array.prototype.myFilter = function (cb) {
  let temp = [];
  for(let i=0;i<this.length;i++) {
    if ( cb(this[i], i, this) === true ) temp.push(this[i]);
  }
  return temp;
};

const nums = [1, 2, 3, 4];
const greaterThanTwo = nums.myFilter((curr, i, arr)=>{
  return curr > 2;
})