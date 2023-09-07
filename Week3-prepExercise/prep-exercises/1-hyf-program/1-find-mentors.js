import { modules, students, mentors, classes } from "./hyf.js";

export const possibleMentorsForModule = (moduleName) => {
  const freeMentors = mentors
    .filter((mentor) => {
      return mentor.canTeach.includes(moduleName);
    })
    .map((mentor) => {
      return mentor.name;
    });
  return freeMentors;
};

const findMentorForModule = (moduleName) => {
  const freeMentors = possibleMentorsForModule(moduleName);
  const random = Math.floor(Math.random() * freeMentors.length);
  return freeMentors[random];
};
console.log(findMentorForModule("react"));
