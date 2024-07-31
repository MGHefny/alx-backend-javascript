//path to "Teacher.ts"
//path to "Subjects.ts"

namespace Subjects {
    export interface Teacher {
      experienceTeachingC?: number;
    }
  
    export class ReactClass extends Subject {
        getRequirements(): string {
          return 'Here is the list of requirements for ReactClass';
        }
    
        getAvailableTeacher(): string {
          return this.teacher?.experienceTeachingC ? `Available Teacher: ${this.teacher}` : 'No available teacher';
        }
      }
  }