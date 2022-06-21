  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];

for (let num of nums) {
  results.push(num * 2);
}
console.log(results);


//------**** Using map() ****---------\\




//Asked to try myself & solve the issue or coming up with the right one:
// It works!
// const number = nums.map(num => {
//   return nums;
// })

//Solution and code structure from the lecture: 
//____________________________________________________________
// const multByTwo = function (num) {
// // The callback function is usually 
// // just passed into the parentheses on the fly,
// //  without being assigned to a variable first. 
//   return num * 2;
// }
// const mapResults = nums.map(multByTwo);
// console.log(mapResults);

// Simplified w/ map()

// The lecturer's solution or code:

const simplfied = nums.map(function (num) { return num * 2})
console.log(simplfied);

// Simplfied w/ map() + arrow function
const arrow = nums.map(num => num * 2);
console.log(arrow)

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

// My code before the teacher showed his solution: 
const studentsWithIds = students.map((student) => {
  return [student.id, student.name];
})
console.log(studentsWithIds)
// Result: [ [ 1, 'Mark' ], [ 2, 'Ariel' ], [ 3, 'Jason' ] ]

//______________________________________________________________//
// The teacher's solution but with some adjustments from my behalf:  

const studentsWithIds2 = students.map(student => [student.name, student.id]);
console.log(studentsWithIds2);
// Result 2: [ [ 'Mark', 1 ], [ 'Ariel', 2 ], [ 'Jason', 3 ] ]