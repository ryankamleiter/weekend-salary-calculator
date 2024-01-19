console.log("js loaded");

let totalMonthlySalary = 0;

function handleSubmit(event) {
    event.preventDefault();
    let firstNameElement = document.getElementById('first_name_text');
    let lastNameElement = document.getElementById('last_name_text');
    let idElement = document.getElementById('id_text');
    let jobTitleElement = document.getElementById('job_title_text');
    let annualSalaryElement = document.getElementById('annual_salary_text');
    let inputContainer = document.querySelector('tbody');

    inputContainer.innerHTML += `
    <td>${firstNameElement.value}</td>
    <td>${lastNameElement.value}</td>
    <td>${idElement.value}</td>
    <td>${jobTitleElement.value}</td>
    <td>${annualSalaryElement.value}</td>
    <td>
    <button onClick="deleteEmployee(event)">Delete</button>
    </td>
    `
    totalMonthlySalary += (Number(annualSalaryElement.value) / 12);
    console.log(totalMonthlySalary);
    let monthlySalaryContainer = document.querySelector('span');
    monthlySalaryContainer.innerHTML = `${totalMonthlySalary}`;
    console.log(annualSalaryElement.value); // gives the output of the recently added salary
    document.getElementById("myForm").reset();


    // update footer upon entry submission

}
function deleteEmployee(event) {
    event.target.parentElement.parentElement.remove();
}

// function addMonthlySalary() {
//     let monthlySalary = document.getElementById('annual_salary_text');
//     totalMonthlySalary += monthlySalary
//     console.log(totalMonthlySalary);
// }