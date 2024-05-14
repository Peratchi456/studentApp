// src/entity/Student.ts

export class Student {
    id: number;
    name: string;
    dob: string;
    age: number;
    createdUsername: string;
    updatedUsername: string;
    subject1: string;
    mark1: number;
    subject2: string;
    mark2: number;
  
    constructor(
      id: number,
      name: string,
      dob: string,
      age: number,
      createdUsername: string,
      updatedUsername: string,
      subject1: string,
      mark1: number,
      subject2: string,
      mark2: number
    ) {
      this.id = id;
      this.name = name;
      this.dob = dob;
      this.age = age;
      this.createdUsername = createdUsername;
      this.updatedUsername = updatedUsername;
      this.subject1 = subject1;
      this.mark1 = mark1;
      this.subject2 = subject2;
      this.mark2 = mark2;
    }
  }
  