//const myTodos = ['Buy Bread', 'Go to Gym', 'Record youtube videos']
//console.log(myTodos.indexOf('Buy Bread'));


const newTodos = [{
    title: 'Buy Bread',
    isDone: false,
}, {
    title: 'Go to Gym',
    isDone: false,
}, {
    title: 'Record youtube videos',
    isDone: true,
}]

// const index = newTodos.findIndex(function(todo, index){
//     console.log(todo);
    
//     return todo.title === 'Go to Gym'
// })
// console.log(index);


//Method 1

// const findTodo = function(myTodos, title){
//     const index = myTodos.findIndex(function(todo, index){
//         return todo.title.toLowerCase() === title.toLowerCase()
//     })
//     return myTodos[index]
// }

// let printMe = findTodo(newTodos, 'Go To gym')
// console.log(printMe);

//Method 2
const findTodo = function(myTodos, title){
    const titleReturned = myTodos.find(function(todo, index){
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return titleReturned
}

let printMe = findTodo(newTodos, 'Go To gym')
console.log(printMe);
