// const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat']


// //console.log(days[0]);

// // days.forEach(function (day, index) {
// //     console.log(`starts with ${index+1}  -- ${day}`);

// // })

// for (let index = days.length - 1; index >= 0; index--) {
//     console.log(days[index]);
  
// }

const myTodos = []

myTodos.push('Buy Bread')
myTodos.push('Record videos for youtube')
myTodos.push('Go to Gym')

myTodos.forEach(function(todo, index){
    console.log(`Your task no. ${index + 1} is: ${todo}`);
    
})