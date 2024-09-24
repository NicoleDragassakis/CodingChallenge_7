//Basic Setup

//TASK ONE
console.log ("TASK ONE") //added for better console readability
const company = {
    departments: [
        {
            departmentName: 'Engineering',
            employees: [
                {
                    name: 'Alice',
                    salary: 100000,
                    subordinates: [
                        {
                            name: 'Bob',
                            salary: 80000,
                            subordinates: [
                                {
                                    name: 'Charlie',
                                    salary: 60000,
                                    subordinates: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'David',
                    salary: 90000,
                    subordinates: []
                }
            ]
        },
        {
            departmentName: 'Sales',
            employees: [
                {
                    name: 'Eve',
                    salary: 85000,
                    subordinates: [
                        {
                            name: 'Frank',
                            salary: 70000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name: 'Grace',
                    salary: 95000,
                    subordinates: []
                }
            ]
        }
    ]
};
console.log(company);

//TASK TWO

console.log("TASK TWO"); //added for better console readability

function calculateDepartmentSalary(department) { //this function will calculate the total salary for each department
    let totalSalary = 0;

    for (let employee of department.employees) {
        totalSalary += employee.salary; //

        if (employee.subordinates > 0) {
            totalSalary += calculateDepartmentSalary({ employees: employee.subordinates });
        }
    }

    return totalSalary;
}

const totalEngDepartmentSalary = calculateDepartmentSalary(company.departments[0]);
console.log(`Total Salary for Engineering department: $${totalEngDepartmentSalary}`);

const totalSaleDepartmentSalary = calculateDepartmentSalary(company.departments[1]);
console.log(`Total Salary for Sales department: $${totalSaleDepartmentSalary}`);