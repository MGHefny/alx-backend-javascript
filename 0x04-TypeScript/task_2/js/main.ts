export interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  export interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
    
  class Director implements DirectorInterface {
    workFromHome = () : string => 'Working from home';
    getCoffeeBreak = () : string => 'Getting a coffee break';
    workDirectorTasks = () : string => 'Getting to director tasks';
  }
  
  class Teacher implements TeacherInterface {
    workFromHome = () : string => 'Cannot work from home';
    getCoffeeBreak = () : string => 'Cannot have a break';
    workTeacherTasks = () : string => 'Getting to work';
  }
  
export const createEmployee = (salary: number | string): Teacher | Director => {
    const numericSalary = Number(salary);
    if (numericSalary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  };
    
export const isDirector = (employee: Teacher | Director): boolean => {
    return employee instanceof Director;
  };
    
export const executeWork = (employee: Teacher | Director): void => {
    let work: string;
      if (employee instanceof Teacher) {
      work = employee.workTeacherTasks();
    } else {
      work = employee.workDirectorTasks();
    }
      console.log(work);
  };
  
  
  type Subjects = 'Math' | 'History';
  
  export const teachClass = (todayClass: Subjects) : string => {
    return todayClass === 'Math' ? 'Teaching Math': 'Teaching History';
  }