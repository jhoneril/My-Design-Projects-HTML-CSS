const manageUserButton = document.querySelector('.manage-user-js');
const cardUser = document.querySelector('.card-one-js');
const deleteButtons = document.querySelector('.delete-user');
// let userArrayDOM;

const userArray = [{
    id: 001,
    name: 'pine-002',
    image: 'images/pineapple.png',
    number: 'one'
}, {
    id: 002,
    name: 'coco-senpai',
    image: 'images/coco.png',
    number: 'two'
}, {
    id: 003,
    name: 'Add user',
    image: 'images/add.png',
    number: 'three'
}];

userArray.forEach((user) => {
    let userArrayDOM = `
    <div class="card-${user.number} cards delete-cards-${user.id}">
        <img src="${user.image}" alt="">
        <p>${user.name}</p>

        <div class="close-button delete-user">
            <button data-user-id="${user.id}" class="delete-user"><img src="images/close.png"></button>
        </div>
    </div>    
    `;

    document.querySelector('.card-one-js').innerHTML += userArrayDOM;
});

manageUserButton.addEventListener('click', (event)=> {
    const closeButton = document.querySelectorAll('.close-button');

    closeButton.forEach((close) => {
        close.style.display = 'block'; 
        close.classList.add('close-button-hover');


        close.addEventListener('click', (event)=> {
            const userId = event.target.getAttribute('data-user-id');
            const userIndex = userArray.findIndex(user => user.id === parseInt(userId));
            
            if(userIndex !== -1) {
                userArray.splice(userIndex, 1)
                updateDOM();
            }

        })
    });
});

function updateDOM() {
    cardUser.innerHTML = '';   

    userArray.forEach((user) => {
        let userArrayDOM = `
        <div class="card-${user.number} cards delete-cards-${user.id}">
            
        </div>    
        `;

        cardUser.innerHTML += userArrayDOM;
    })
}