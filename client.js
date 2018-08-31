let totalMonthly = 0;

$( document ).ready( onReady );

function onReady(){
    $('#submitButton').on('click', appendEmployee );
}

function appendEmployee(){
    console.log('button works!');
    
    $('tbody').append(
    `<tr>
        <td>`
            +$('#firstName').val()+
        `</td>
        <td>`
            +$('#lastName').val()+
        `</td>
        <td>`
            +$('#inputID').val()+
        `</td>
        <td>`
            +$('#inputTitle').val()+
        `</td>
        <td>`
            +$('#inputSalary').val()+
        `</td>
    </tr>`)
    
    let monthlySalary = Number($('#inputSalary').val())/12
    totalMonthly += Number(monthlySalary.toFixed(2));
    $('#totalMonthly').empty();
    $('#totalMonthly').append('Total Monthly: $'+totalMonthly);
}