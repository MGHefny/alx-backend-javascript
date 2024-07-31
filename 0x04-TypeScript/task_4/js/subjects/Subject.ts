//path to "Subjects.ts"

namespace Subjects {
    export class Subject {
      teacher: Subjects.Teacher;
  
      set setTeacher(teacher: Subjects.Teacher) {
        this.teacher = teacher;
      }
    }
  }