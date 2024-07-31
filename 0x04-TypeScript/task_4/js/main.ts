export const cpp: Subjects.CppClass = new Subjects.CppClass();
export const java: Subjects.JavaClass = new Subjects.JavaClass();
export const react: Subjects.ReactClass = new Subjects.ReactClass();
export const cTeacher: Subjects.Teacher = {
  firstName: 'mohamed',
  lastName: 'hefny',
  experienceTeachingC: 10,
};

console.log('React');
react.setTeacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

console.log('C++');
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.setTeacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());