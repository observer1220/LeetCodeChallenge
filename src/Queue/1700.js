/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  let counter = 0;

  while (students.length > 0 && students.length > counter) {
    if (students[0] !== sandwiches[0]) {
      let nMatch = students.shift()
      students.push(nMatch)
      counter++
    } else {
      students.shift()
      sandwiches.shift()
      counter = 0
    }
  }

  // console.log('students', students);
  // console.log('sandwiches', sandwiches);
  // console.log('students.length', students.length);
  // console.log('counter', counter);
  return students.length
};

var students = [1, 1, 1, 0, 0, 1]
var sandwiches = [1, 0, 0, 0, 1, 1]

countStudents(students, sandwiches)

/**
 * Input: students = [1, 1, 0, 0], sandwiches = [0, 1, 0, 1]
 * Output: 0
 * Explanation:
  - Front student leaves the top sandwich and returns to the end of the line making students = [1,0,0,1].
  - Front student leaves the top sandwich and returns to the end of the line making students = [0,0,1,1].
  - Front student takes the top sandwich and leaves the line making students = [0,1,1] and sandwiches = [1,0,1].
  - Front student leaves the top sandwich and returns to the end of the line making students = [1,1,0].
  - Front student takes the top sandwich and leaves the line making students = [1,0] and sandwiches = [0,1].
  - Front student leaves the top sandwich and returns to the end of the line making students = [0,1].
  - Front student takes the top sandwich and leaves the line making students = [1] and sandwiches = [1].
  - Front student takes the top sandwich and leaves the line making students = [] and sandwiches = [].
    Hence all students are able to eat.
 *
 * Input: students = [1, 1, 1, 0, 0, 1], sandwiches = [1, 0, 0, 0, 1, 1]
 * Output: 3
 * */