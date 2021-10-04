function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            let result = [];
            for (const key in this) {
                result.push(`${key}: ${this[key]}`)
            }
            return `${this.constructor.name} (${result.join(', ')})`
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}