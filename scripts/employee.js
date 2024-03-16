
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModalBtn');
const openModal = document.getElementById('openModal');
const backDrop = document.querySelector('.back__drop');
const addEmployeeForm = document.getElementById('addEmployeeForm');
const submitBtn = document.getElementById('submitBtn');


openModal.addEventListener('click', function (){
    modal.style.display = 'block';
    backDrop.style.display = 'block';
})

closeModalBtn.addEventListener('click', function(){
    modal.style.display = 'none';
    backDrop.style.display = 'none';
})

addEmployeeForm.addEventListener('submit', function(event){
    handleSubmit(event);;
})



function handleSubmit(event){
    event.preventDefault();

    submitBtn.textContent = 'submitting...';

    const data = {
        fistName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        email: document.getElementById('email').value
    };

    localStorage.setItem('firstName',data.fistName);
    localStorage.setItem('lastName', data.lastName);
    localStorage.setItem('phoneNumber',data.phoneNumber);
    localStorage.setItem('email',data.email);

    window.location.reload();





}

document.addEventListener('DOMContentLoaded', ()=>{
    fetchUsers();
})

function fetchUsers(){
    const tableRow = document.querySelectorAll('tbody tr td');
    let users = {};

    users.firstName = localStorage.getItem('firstName');
    users.lastName = localStorage.getItem('lastName');
    users.phoneNumber = localStorage.getItem('phoneNumber');
    users.email = localStorage.getItem('email');

    tableRow[0].textContent = '1';
    tableRow[1].textContent = users.firstName;
    tableRow[2].textContent = users.lastName;
    tableRow[3].textContent = users.phoneNumber;
    tableRow[4].textContent = users.email;


}
