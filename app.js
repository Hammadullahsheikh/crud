const username = document.querySelector('#username')
const age = document.querySelector('#age')
const email = document.querySelector('#email')
const para =document.querySelector('#para')
const arr = []

function rendorTodo() {
    para.innerHTML = ''
    for (let i = 0; i < arr.length; i++) {
        para.innerHTML = `
        <li> ${arr[i]}
        <button onclick="deleteTodo(${i})">deleteTodo</button>
        <button onclick="editTodo(${i})">editTodo</button>
        </li>
        `
    }
    
}

function addTodo() {
    arr.push(`${username.value} ${age.value} ${email.value}`)
    rendorTodo()
    username.value = ''
    age.value = ''
    email.value = ''
    
}
function deleteTodo(index) {
    arr.splice(index ,1)
    rendorTodo()
}
function editTodo(index) {
    const newVal = prompt('add new value')
    arr.splice(index , 1 , newVal)
    rendorTodo()
}