const JobOpenings = require('./JobOpenings')
const Person = require('./Person')

let student = new Person('Max', 'Olevkin', 23, 'Student', false)
let anotherStudent = new Person('Bob', 'Marley', 30, 'Taxi driver', true)

let qaEngineer = new JobOpenings('TestDevLab', 'IT', 'QA engineer', 5)
let frontendDeveloper = new JobOpenings(
    'Magebit',
    'IT',
    'Frontend Developer',
    3
)

student.introduce()
anotherStudent.introduce()
qaEngineer.companyJob()
frontendDeveloper.departmentChoice()
qaEngineer.applyPosition()
