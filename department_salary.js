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

        if (employee.subordinates && employee.subordinates.length > 0) { //without the && employee.subordinates.length the outpouts are wrong by -180,000?????
            totalSalary += calculateDepartmentSalary({ employees: employee.subordinates });
        }
    }

    return totalSalary;
}

const totalEngDepartmentSalary = calculateDepartmentSalary(company.departments[0]);
console.log(`Total Salary for Engineering department: $${totalEngDepartmentSalary}`); //outputs 330,000

const totalSaleDepartmentSalary = calculateDepartmentSalary(company.departments[1]);
console.log(`Total Salary for Sales department: $${totalSaleDepartmentSalary}`); //outputs 250,000

//TASK THREE

console.log("TASK THREE");

//this function will calculate total salary for the entire copnay and sum up all slaries of all departments

function calculateCompanySalary(company){
    let totalSalary=0;

    for(let department of company.departments){
        totalSalary += calculateDepartmentSalary(department); 
    }
    return totalSalary;
}
console.log("Total Company Salary:", calculateCompanySalary(company)); // outputs 580,000