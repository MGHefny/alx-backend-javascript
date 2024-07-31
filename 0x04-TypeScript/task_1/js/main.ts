export interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [propName: string]: any,
  }
  
  export interface Directors extends Teacher {
    numberOfReports: number,
  }
  
  const techData = (firstName:string, lastName:string) : string => `${firstName.charAt(0)}. ${lastName}`;
  
  class stdClass {
    firstName: string;
    lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework = () : string => 'Currently working';
  
    displayName = () : string => this.firstName;
  }
  
  export interface stdConstructor {
    (firstName: string, lastName: string): stdClass;
  }
  
  const std = new stdClass("mohamed", "hefny");
  console.log(std.displayName())
  console.log(std.workOnHomework())