let numberItem = 0;
document.querySelector('.btn_add').addEventListener('click', addItem);
document.querySelector('.btn_allremov').addEventListener('click', clearAllTodolist);
document.querySelector('.todolist').addEventListener('click', complited)


function addItem(e) {
    e.preventDefault();
    let work = document.querySelector('.input-line').value;
    if (work) {
        numberItem += 1
        localStorage.setItem(`input-${numberItem}`, work)
        creatItem(localStorage.getItem(`input-${numberItem}`))
        document.querySelector('.input-line').value = ''
    } else {
        alert('nothing todo item')
    }
}

function creatItem(inputText) {
    let uiItemTodolist = `<li class="todolist-main">
        <h1 class="todolist-main__detail">${inputText}</h1>
        <button class="btn btn_todolists complited todolist-main__btn__complited-${numberItem}" type="button">complite</button>
        <button class="btn btn_todolists deleted todolist-main__btn__deleted-${numberItem}" type="button">delete</button>
</li>`
    document.querySelector('.todolist').insertAdjacentHTML("beforeend", uiItemTodolist)
}

function clearAllTodolist(e) {
    e.preventDefault();
    localStorage.clear();
    numberItem = 0;
    document.querySelectorAll('.todolist-main').forEach(el => el.remove())
}

function complited(e) {
    console.log(e.target);
    if (e.target, e.target.matches('button.complited')) {
        e.target.parentElement.children[0].style.textdecoration = 'line-through'
    }
}

// textdecoration = 'line-through';