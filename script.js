// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = []
let filteredArray = []
let completedArray = []
let incompletedArray = []
const list = document.getElementById("todo-list")
console.log(list)
  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
  }

  const logTodos = () => {
    console.log()
  }

  const populateTodos = () => {
    for (let i = 0; i < arrayOfTodos.length; i++){
    const element = document.createElement("li");
    element.appendChild(document.createTextNode(arrayOfTodos[i].title));
    if(arrayOfTodos[i].completed == false){
      element.classList.add("redColor");
    }else{
      element.classList.add("purpleColor");
    }
    list.appendChild(element)
  }  
}
let userInput = 0
const todosById = () =>{
  list.innerHTML = ""
  userInput = Number(document.getElementById("user-id").value)
  filteredArray = arrayOfTodos.filter(array => array.userId == userInput)
  for (let i = 0; i < filteredArray.length; i++){
    const element = document.createElement("li");
    element.appendChild(document.createTextNode(filteredArray[i].title));
    if(arrayOfTodos[i].completed == false){
      element.classList.add("redColor");
    }else{
      element.classList.add("purpleColor");
    }
    list.appendChild(element)
}
}
const completedTodos = () =>{
  list.innerHTML = ""
  completedArray = arrayOfTodos.filter(array => array.completed == true)
  for (let i = 0; i < completedArray.length; i++){
    const element = document.createElement("li");
    element.appendChild(document.createTextNode(completedArray[i].title)); 
    element.classList.add("purpleColor");
    list.appendChild(element)
}
}
const incompletedTodos = () => {
  list.innerHTML = ""
  incompletedArray = arrayOfTodos.filter(array => array.completed == false)
  for (let i = 0; i < incompletedArray.length; i++){
    const element = document.createElement("li");
    element.appendChild(document.createTextNode(incompletedArray[i].title)); 
    element.classList.add("redColor");
    list.appendChild(element)
}
}