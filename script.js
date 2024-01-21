let totalMonthlySalary = 0;

function handleSubmit(event) {
    event.preventDefault();
    let firstNameElement = document.getElementById('first_name_text');
    let lastNameElement = document.getElementById('last_name_text');
    let idElement = document.getElementById('id_text');
    let jobTitleElement = document.getElementById('job_title_text');
    let annualSalaryElement = document.getElementById('annual_salary_text');
    let inputContainer = document.querySelector('tbody');

    // add cells to DOM
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
    // calculate and add total monthly salary to footer
    totalMonthlySalary += Math.round((annualSalaryElement.value) / 12);

    console.log(totalMonthlySalary);
    let monthlySalaryContainer = document.querySelector('span');
    monthlySalaryContainer.innerHTML = `${totalMonthlySalary}`;
    changeStyle();

    document.getElementById("myForm").reset();
}

function deleteEmployee(event) {
    event.target.parentElement.parentElement.remove();
}

function changeStyle() {
    if (totalMonthlySalary > 20000) {
        document.querySelector('footer').className = 'over-budget';
    }
}