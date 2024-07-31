export interface MajorCredits {
    credits: number;
    brand?: string;
  }
  
  export interface MinorCredits  {
    credits: number;
    brand: string;
  }
  
  export const sumMajorCredits = (subject1: MajorCredits, subject2: MajorCredits): number => {
    return subject1.credits + subject2.credits;
  }
  
  export const sumMinorCredits = (subject1: MinorCredits, subject2: MinorCredits): number => {
    return subject1.credits + subject2.credits;
  }