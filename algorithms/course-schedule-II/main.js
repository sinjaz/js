// https://leetcode.com/problems/course-schedule-ii/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
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

  //console.log(output);

  return output;
};

// findOrder(2, [[1, 0]]);
// findOrder(1, []);
findOrder(3, [[0, 1], [0, 2], [1, 2]]);