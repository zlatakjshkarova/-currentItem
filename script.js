const myBtn = document.querySelector('#myBtn');
const nameInput = document.querySelector("#name")

const list = document.querySelector('#list');
const model = document.querySelector("#model");

const cenle = document.querySelector("#cenle");
const delButModel = document.querySelector("#del");

let currentItem;




myBtn.addEventListener('click', Task);

function Task() {
    if (nameInput.value !== "") {

        const newItem = document.createElement("li");

        newItem.classList.add('item');

        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'удалить'
        newItem.innerHTML = `<span>${nameInput.value}</span>`;
        newItem.appendChild(deleteButton)
        list.appendChild(newItem);

        nameInput.value = '';





        deleteButton.addEventListener('click', () => {
            currentItem = newItem;

            model.style.display = 'flex';

        })


    } else {
        alert('Заполните поле');
    }


}

delButModel.addEventListener('click', () => {
    if (currentItem) {
        list.removeChild(currentItem);
        model.style.display = 'none';
        currentItem = null;
    }

})




cenle.addEventListener('click', () => {

    model.style.display = 'none';
    currentItem = null;


})





//Math.floor-округлить до целого в меньшую сторону
//Math.random()-
//Math.random()*(max-min + 1)+ min - формула нахождение случайного числа



//Math.random()*(max-min + 1)+min
//Найти случайное числo 1 от 10
//Math.random()*10+1
//Math.random()*11
//Math.random()*9+2;




