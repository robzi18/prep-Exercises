import { modules, students, mentors, classes } from "./hyf.js";
import { possibleMentorsForModule } from "./1-find-mentors.js";
/**
 * We would like to have a list of everyone that is currently participating in a class.
 * This means the students, but also the mentors that are currently teaching the class.
 * The students should be self explanatory, but to find the mentors you will need to follow these steps:
 * - Check what the `currentModule` of the class is
 * - Find the mentor(s) that are `nowTeaching` that module
 * if it is active return
 * current module
 *
 * Should return the list of names and their roles. So something like:
 *
 *  [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }]
 */
const getPeopleOfClass = (className) => {
  // to find the mentor i hv to first get what the current class course is then i will find the tr
  const getCourse = className.map((currentModule) => {
    return currentModule.currentModule;
  });

  // const specificmentor = mentors
  //   .filter((el) => {
  //     if (el.nowTeaching === "javascript") {
  //       return el.name;
  //     }
  //   })
  //   .map((men) => {
  //     return men.name;
  //   });
  // console.log("sp men", specificmentor);
  // find mentor of each course
  let currentMentor = [];
  for (let i = 0; i < getCourse.length; i++) {
    // let boo = getCourse[i];
    currentMentor = mentors
      .filter((mentor) => {
        return mentor.nowTeaching === getCourse[i];
      })
      .map((mentor) => {
        return mentor.name;
      });
  }
  console.log(currentMentor);

  // console.log("current courses=>", getCourse);
};
// You can uncomment out this line to try your function
// console.log(getPeopleOfClass("class34"));

/**
 * We would like to have a complete overview of the current active classes.
 * First find the active classes, then for each get the people of that class.
 *
 * Should return an object with the class names as properties.
 * Each class name property contains an array identical to the return from `getPeopleFromClass`. So something like:
 *
 *  {
 *    class34: [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }],
 *    class35: [{ name: 'Jane', role: 'student' }, { name: 'Steve', role: 'mentor' }]
 *  }
 */
const getActiveClasses = () => {
  // TODO complete this function
  const getClasses = classes.filter((cla) => {
    return cla.active == true;
  });
  // .map(({cla}) => {
  //   return {cla.name};
  // });
  // console.log(getClasses);
  getPeopleOfClass(getClasses);
};
// You can uncomment out this line to try your function
// console.log(getActiveClasses());
getActiveClasses();
