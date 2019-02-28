// CODE here for your Lambda Classes

//BASE class

class Person {
    constructor(attributes) {
      this.name = attributes.name;
      this.age = attributes.age;
      this.location = attributes.location;
      this.gender= attributes.gender;
    }
    // Methods
    speak() {
      return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
  }

  // INSTRUCTOR

class Instructor extends Person {
    constructor (instrArttr){
        super(instrArttr);
        this.specialty = instrArttr.specialty;
        this.favLanguage = instrArttr.favLanguage;
        this.catchPhrase = instrArttr.catchPhrase;
    }
    // Methods
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

// STUDENT

class Student extends Person {
    constructor (studentAttr) {
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
    }
    // Methods 
    listsSubjects() {
        this.favSubjects.forEach(function(element){
            console.log(element);
        });
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return`${this.name} has began sprint challenge on ${subject}`;
    }
}

// PROJECT MANAGER

class ProjectManager extends Instructor {
    constructor(pmAttr) {
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }
    //Methods
    standUp (channel) {
        return `${this.name} announces to ${channel} standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}


// instructor obj

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    specialty: 'Front-end',
    favLanguage: 'JavaScript',
    catchPhrase: `Don't forget the homies`
  });

  const josh = new Instructor({
    name: 'Josh',
    location: 'PaloAlto',
    age: 32,
    gender: 'male',
    specialty: 'Front-end',
    favLanguage: 'CSS',
    catchPhrase: `Read TK`
  });

  const mark = new Instructor({
    name: 'Mark',
    location: 'SF',
    age: 38,
    gender: 'male',
    specialty: 'Fullstack',
    favLanguage: 'TypeScript',
    catchPhrase: `Read MDN`
  });

/// student obj

  const oliver = new Student({
    name: 'Oliver',
    location: 'NY',
    age: 21,
    gender: 'male',
    previousBackground: 'Python',
    className: 'web1',
    favSubjects: ['Html', 'CSS', 'JavaScript']
  });

  const emily = new Student({
    name: 'Emily',
    location: 'Colorado',
    age: 25,
    gender: 'female',
    previousBackground: 'Swift',
    className: 'web1',
    favSubjects: ['Swift', 'Kotlin', 'Go']
  });


  // pm obj

  const george = new ProjectManager({
    name: 'George',
    location: 'LA',
    age: 30,
    gender: 'male',
    gradClassName: 'CS2',
    favInstructor: 'Fred'
  });


  const amy = new ProjectManager({
    name: 'Amy',
    location: 'Utah',
    age: 28,
    gender: 'female',
    gradClassName: 'CS1',
    favInstructor: 'Josh'
  });


console.log(fred.speak());
console.log(amy.speak());

console.log(fred.grade(emily, "JS1"));

console.log(fred.demo('JS3'));

console.log(oliver.sprintChallenge("HTML"));

console.log(amy.debugsCode(emily, 'JS'));


