let totalMonthly = 0;
let employeeArray = [];

class Employee {
    constructor(firstName, lastName, id, title, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.title = title;
        this.salary = salary;
    }
}

$(document).ready(onReady);

function onReady() {
    $('#submitButton').on('click', appendEmployee);
    $('.remove').hide();
    $('#removeButton').on('click', removeEmployee);
}

function appendEmployee() {
    //create employee object
    let newEmployee = new Employee($('#firstName').val(), $('#lastName').val(),
        $('#inputID').val(), $('#inputTitle').val(), $('#inputSalary').val()
    );
    //push employee into array
    employeeArray.push(newEmployee);
    //add employees to table
    addEmployeesToTable();

    //calculate monthly salary
    calculateMonthly(newEmployee);
    //clear input fields
    clearInputFields();
    //show text boxes and button to remove employee
    $('.remove').show();
}

function addEmployeesToTable() {
    //empty table
    $('tbody').empty();
    for (i = 0; i < employeeArray.length; i++) {
        $('tbody').append(
            `<tr>
                <td>`
            + employeeArray[i].firstName +
            `</td>
                <td>`
            + employeeArray[i].lastName +
            `</td>
                <td>`
            + employeeArray[i].id +
            `</td>
                <td>`
            + employeeArray[i].title +
            `</td>
                <td>`
            + employeeArray[i].salary +
            `</td>
            </tr>`)
    }
}

function calculateMonthly(employee) {
    let monthlySalary = Number(employee.salary) / 12
    totalMonthly += Number(monthlySalary.toFixed(2));
    $('#totalMonthly').empty();
    $('#totalMonthly').append('Total Monthly: $' + totalMonthly);
    //check that total monthly is less than $20,000
    if (totalMonthly > 20000) {
        $('#totalMonthly').css('background-color', 'red');
    }
}

function clearInputFields() {
    $('#firstName').val('');
    $('#lastName').val('');
    $('#inputID').val('');
    $('#inputTitle').val('');
    $('#inputSalary').val('');
}

function removeEmployee() {
    //create employee object
    let newEmployee = new Employee($('#firstNameRemove').val(), $('#lastNameRemove').val(),
        $('#inputIDRemove').val(), $('#inputTitleRemove').val(), $('#inputSalaryRemove').val()
    );
    //search for employee in array
    let index = -1;
    for (i = 0; i < employeeArray.length; i++) {
        if (employeeArray[i].id === newEmployee.id) {
            index = i;
        }
    }
    if (index === -1) {
        console.log('That person is not in the table')
    }
    else {
        //remove employee from array
        employeeArray.splice(index, 1);
        //add employees to table
        addEmployeesToTable();

        //calculate monthly salary
        //calculateMonthly(newEmployee);
        //clear input fields
        //clearInputFields();
    }
}