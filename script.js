// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = []
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
const todosById = () =>{
    for (let i = 0; i < arrayOfTodos.length; i++){
    const filteredElement = document.createElement("li");
    filteredElement.appendChild(document.createTextNode(arrayOfTodos[i].filter(array => array.userId).title));
  }
  console.log
  list.appendChild(filteredElement)
}
const completedTodos = () =>{

}
const incompletedTodos = () => {

}