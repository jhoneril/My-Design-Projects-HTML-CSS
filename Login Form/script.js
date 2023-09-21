const formIcon = document.querySelector('.form-icon');
const formIconClick = document.querySelector('.form-icon-clicked');
const inputField = document.getElementById('input');

document.addEventListener('click', (event)=> {
    
    if(event.target.className === 'fa-regular fa-eye'){
        formIconClick.style.display = 'block';
        formIcon.style.display = 'none';

        asteriskInput();
    } else if (event.target.className === 'fa-regular fa-eye-slash') {
        formIconClick.style.display = 'none';
        formIcon.style.display = 'block';
    }

});

function asteriskInput() {
    inputField.addEventListener('input', (event)=> {
        const inputValue = event.target.value;
        const asteriskString = '*'.repeat(inputValue.length);
        inputField.value = asteriskString;
    });
}
