let totalMonthly = 0;
let employeeArray = [];

class Employee{
    constructor(firstName, lastName, id, title, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.title = title;
    this.salary = salary;
    }
}

$( document ).ready( onReady );

function onReady(){
    $('#submitButton').on('click', appendEmployee );
    $('.remove').hide();
}

function appendEmployee(){
    //create employee object
    let newEmployee = new Employee($('#firstName').val(), $('#lastName').val(),
        $('#inputID').val(), $('#inputTitle').val(), $('#inputSalary').val()
    );
    //push employee into array
    employeeArray.push(newEmployee);
    //empty table
    $('tbody').empty();
    //add employees to table
    for(i=0;i<employeeArray.length;i++){
        $('tbody').append(
            `<tr>
                <td>`
                    +employeeArray[i].firstName+
                `</td>
                <td>`
                    +employeeArray[i].lastName+
                `</td>
                <td>`
                    +employeeArray[i].id+
                `</td>
                <td>`
                    +employeeArray[i].title+
                `</td>
                <td>`
                    +employeeArray[i].salary+
                `</td>
            </tr>`)
    }
    

    //calculate monthly salary
    calculateMonthly(newEmployee);
    //clear input fields
    clearInputFields();
    //show text boxes and button to remove employee
    $('.remove').show();
}

function calculateMonthly(employee){
    let monthlySalary = Number(employee.salary)/12
    totalMonthly += Number(monthlySalary.toFixed(2));
    $('#totalMonthly').empty();
    $('#totalMonthly').append('Total Monthly: $'+totalMonthly);
    //check that total monthly is less than $20,000
    if(totalMonthly>20000){
        $('#totalMonthly').css('background-color','red');
    }
}

function clearInputFields(){
    $('#firstName').val('');
    $('#lastName').val('');
    $('#inputID').val('');
    $('#inputTitle').val('');
    $('#inputSalary').val('');
}