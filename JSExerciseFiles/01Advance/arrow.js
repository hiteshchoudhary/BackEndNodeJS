// const sayHello = function(name){
//     return "Hey there, " + name + " !"
// }

// console.log(sayHello('Sammy'));


const sayHello = (name) => `hey there ${name} !`


//console.log(sayHello('Sammy'));


const todos = [{
    title: 'Buy bread',
    isDone: true
}, {
    title: 'GO to gym',
    isDone: true,
}, {
    title: 'Record youtube video',
    isDone: false
}]


const thingsDone = todos.filter((todo) => todo.isDone === true)


//console.log(thingsDone);

const cameras = {
    price: 600,
    weight: 2000,
    myDes: () => {
        return `This canon camera is of ${this.price}$`
    }

}

console.log(cameras.myDes());

//THis is only for Redux people
//const func = () => ({key: 'value'});