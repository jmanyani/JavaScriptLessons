const mySymbol = Symbol("")

const techMillionaire={
    name:"Jatin",
    "full Name":"Jatin Manyani",
     age:26,
     [mySymbol]:"dream@1998",
     location:"Chicago",
     email:"jmanyani@depaul.edu",
     isLoggedIN:true,
     lastLoggedIN:["Tuesday"]
}
console.log(techMillionaire)
console.log(techMillionaire.email)
console.log(techMillionaire["location"])
console.log(techMillionaire["full Name"])
console.log(techMillionaire[mySymbol])
techMillionaire.email="manyanijatin@gmail.com"
// Object.freeze(techMillionaire);
techMillionaire.email="jmanyani@depaul.edu"
console.log(techMillionaire)

// Define the method outside the object
techMillionaire.greeting_from_jatin = function () {
    console.log(`Hello from ${this["full Name"]}`);
};

// Call the method
techMillionaire.greeting_from_jatin();