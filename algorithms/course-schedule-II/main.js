// https://leetcode.com/problems/course-schedule-ii/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  // Create a hash map (COURSES) of course: prereqs by
    // Looping as many times as there are courses (numCourses)
    // If the course index exists in COURSES, increment it by 1
    // If the course index does not exist in COURSES, create it as a key and set it to 1

  // Once we have a hash map of COURSES, loop through the courses from 0 to n-1
    // Does each course have dependencies?
    // No - Add it to the output array
    // Yes - do all its dependencies exist in output array?
      // No - recursively apply the same thing to its dependencies
      // Yes - Add it to the output array

  let courses = {};
  let output = [];
  let inProgress = [];
  let broke = false;
  if (prerequisites.length === 0) {
    for (let i  = 0; i < numCourses; i++) {
      output.push(i);
    }
    return output;
  }


  for (let i = 0; i < prerequisites.length; i++) {
    let currentCourse = prerequisites[i][1];
    let currentPrereq = prerequisites[i][0];
    if (courses[currentCourse] === undefined) {
      courses[currentCourse] = [];
    }

    if (courses[currentPrereq] === undefined) {
      courses[currentPrereq] = [];
    }

    courses[currentCourse].push(currentPrereq);
  }

  for (let i = 0; i < numCourses; i++) {
    if (courses[i] === undefined) {
      courses[i] = [];
    }
  }

  for (let key in courses) {
    checkForDependencies(key);
  }

  function checkForDependencies(key) {
    let currentPrereqs = courses[key];
    inProgress.push(parseInt(key, 10));
    if (inProgress.indexOf(currentPrereqs[0]) === -1) {
      while (currentPrereqs.length > 0) {
        checkForDependencies(currentPrereqs[0].toString());
        currentPrereqs.splice(0, 1);
      }

      inProgress.splice(inProgress.indexOf(key), 1);
      let f = parseInt(key, 10);
      if (output.indexOf(f) === -1) {
        output.unshift(f);
      }
    } else {
      broke = true;
      output = [];
    }
  }

  if (output.length < numCourses) {
    return [];
  }

  return output;
};

// let output = findOrder(2, [[0, 1]]);
// let output = findOrder(2, []);
// let output = findOrder(3, [[0, 2], [1, 2], [0, 1]]);
// let output = findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]);
// let output = findOrder(2, [[0, 1], [1, 0]]);
// let output = findOrder(3, [[1, 0]]);
let output = findOrder(3, [[1, 0], [2, 0], [0, 1]]);
console.log(output);








/*

// Loop through prerequisits
// Create a hash map <COURSE>, mapping { course: prerequisits }
// Create a hash map <PREREQ>, mapping { prerquist: courses }
// Find courses without prereqs by
// looping from 0 to n-1 and checking each index in the hash map and seeing if there is an array. If undefined, there are no prereqs
// For each course without a prereq, add it to the beginning of the list of the output
// Loop over each course in the output array and append its dependant to the output array and keep going until no more items in the output array

let prereqs = {};
let courses = {};
for (let i = 0; i < prerequisites.length; i++) {
  prereqs[prerequisites[i][1]] ?
    prereqs[prerequisites[i][1]].push(prerequisites[i][0]) :
    prereqs[prerequisites[i][1]] = [prerequisites[i][0]];

  courses[prerequisites[i][0]] ?
    courses[prerequisites[i][0]].push(prerequisites[i][1]) :
    courses[prerequisites[i][0]] = [prerequisites[i][1]];
}

console.log('prereqs', prereqs);
console.log('courses', courses);

let output = [];
let theRest = [];
for (let i = 0; i < numCourses; i++) {
  if (courses[i] === undefined) {

    if (prereqs[i] !== undefined) {
      output.push(i);
    }

    if (prereqs[i] === undefined) {
      theRest.push(i);
    }
  }
}

let j = 0;
while (j < output.length) {
  let course = output[j];
  let n = prereqs[course];
  console.log(course, n)
  if (n) {
    output = output.concat(n);
  }
  j++;
}

output = output.concat(theRest);

output = output.filter((item, position) => {
  return output.indexOf(item) === position;
});

return output;

*/