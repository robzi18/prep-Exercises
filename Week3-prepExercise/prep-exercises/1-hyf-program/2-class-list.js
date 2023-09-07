import { modules, students, mentors, classes } from "./hyf.js";

/**
 * We would like to have a list of everyone that is currently participating in a class.
 * This means the students, but also the mentors that are currently teaching the class.
 *
 * The students should be self explanatory, but to find the mentors you will need to follow these steps:
 * - Check what the `currentModule` of the class is
 * - Find the mentor(s) that are `nowTeaching` that module
 *
 * Should return the list of names and their roles. So something like:
 *
 *  [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }]
 */
const getPeopleOfClass = (className) => {
  // TODO complete this function

  // const getCourse = classes.find((cla) => {
  //   return cla.name === className;
  // }).currentModule;
  const getCourse = classes
    .filter((cla) => {
      return cla.name === className;
    })
    .map((cla) => cla.currentModule);

  // const getStudent = students.find((stu) => {
  //   return stu.class === className;
  // }).name;
  const getStudent = students
    .filter((stu) => {
      return stu.class === className;
    })
    .map((stu) => stu.name);
  console.log(getStudent, typeof getStudent);

  // const getMentor = mentors.find((mentor) => {
  //   return mentor.nowTeaching === getCourse;
  // }).name;
  const getMentor = mentors
    .filter((mentor) => {
      return mentor.nowTeaching === getCourse;
    })
    .map((men) => men.name);
  return [
    { name: getStudent[0], role: "student", course: getCourse[0] },
    { name: getMentor[0], role: "mentor", course: getCourse[0] },
  ];
  // const Students = getStudent.map((student) => {
  //   return { name: student.name, role: "student", course: getCourse };
  // });
  // const Mentors = getMentor.map((mentor) => {
  //   return { name: mentor.name, role: "mentor", course: getCourse };
  // });

  // return Studentstudentss.concat(Mntorss);
};
// You can uncomment out this line to try your function
// console.log(getPeopleOfClass("class35"));

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
  const getClasses = classes
    .filter((cla) => {
      return cla.active == true;
    })
    .map((active) => {
      return active.name;
    });

  // ['class34',"class35","class36"]
  const classList = {};
  console.log(classList);
  for (let x of getClasses) {
    const peopleofClass = getPeopleOfClass(x);
    classList[x] = getPeopleOfClass(x);
  }
  return classList;
};
// You can uncomment out this line to try your function
console.log(getActiveClasses());
