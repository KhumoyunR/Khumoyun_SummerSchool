class JobOpenings {
    constructor(company, department, position, quantity) {
        this.company = company
        this.department = department
        this.position = position
        this.quantity = quantity
    }

    departmentChoice() {
        return console.log(
            `You chose ${this.department} department job openings`
        )
    }

    calcQuantity() {
        return console.log(this.quantity - 1)
    }

    applyPosition() {
        console.log(`You applied to the position ${this.position}`)
    }

    companyJob() {
        console.log(`${this.company} offers job for junior specialists`)
    }
}

module.exports = JobOpenings

//new JobOpenings ('TestDevLab', 'IT', 'QA', 14).companyJob();
