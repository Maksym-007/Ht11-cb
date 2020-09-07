// const runner = {
//   $$runnerId: null,
//   $$tasks: [],
//   setSpeed: function (speed) {
//     this.stop();
//     this.start(speed);
//   },
//   add: function (task) {
//     this.$$tasks.push(task);
//   },
//   start: function (speed) {
//     var _this = this;
//     this.$$runnerId = setTimeout(function callback() {
//       _this.$$tasks.forEach(function (cb) {
//       cb() // Here
//       })
//       _this.$$runnerId = setTimeout(callback, speed);
//     }, speed);
//   },
//   stop: function () {
//     clearTimeout(this.$$runnerId);
//   }

// }
// runner.setSpeed(2000);

// runner.add(function () {
//   const task = 'hello world';
//   console.log(task);
// });


let array = [0, 2, 3, 4, 5, 6];
const newMap = (fnc, arr) => {
  let someArr = [];
  for (let i = 0; i < arr.length; i++)
    someArr[i] = fnc(array[i]);
  return someArr;
};
let cb = (i) => i * 2;

let newArray = newMap(cb, array);
console.log(newArray);



