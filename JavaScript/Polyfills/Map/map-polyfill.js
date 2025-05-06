// prototype is adding myMap fn to the methods of this array in our current js file

Array.map((curr, index, arr)=>{});
Array.prototype.myMap = function (cb) {
  let temp = [];
  for( let i=0; i<this.length;i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
}

const nums = [1,2,3,4];
const multipyTwo = nums.myMap((num, i, arr)=>{
  return num*2;
});