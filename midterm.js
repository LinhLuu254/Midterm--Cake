const cakes =[
    {
        cakeName: "Lemon-Ice",
        calories: 120,
        price: 3.5,
    },
    {
        cakeName: "Choco-Truffle",
        calories: 230,
        price: 5,
    },
    {
        cakeName: "Vanilla-Truffle",
        calories: 220,
        price: 4.5,
    },
    {
        cakeName: "Orange-Zet",
        calories: 230,
        price: 5,
    },
    {
        cakeName: "Penut-Butter",
        calories: 320,
        price: 4.5,
    },
    {
        cakeName: "Oreo-Truffle",
        calories: 330,
        price: 5.5,
    },
    {
        cakeName: "Carrot Cake",
        calories: 240,
        price: 3.5,
    },
    {
        cakeName: "Apple Pie",
        calories: 260,
        price: 5.5,
    },
    {
        cakeName: "Beer Cake",
        calories: 320,
        price: 6,
    },
    {
        cakeName: "Brownie",
        calories: 210,
        price: 3.5,
    },
];

const showInfo = () =>{
    let task = document.querySelector("#task").value;

    switch (task) {
        case "C":
            createCake();
            break;

        case "R":
            readCake();
            break;

        case "U":
        
            updateCake();
            break;

        case "D":
            
            deleteCake();
            break;
    }
}; 


const listCakes = () =>{
    let cakesList = document.querySelector(".cakesList");
    let allcakesList = `<ol>`;
    cakes.forEach((cake) => {
        allcakesList += `<li> ${cake.cakeName}</li>`;
    });
    allcakesList += `</ol>`;
    
    cakesList.innerHTML = allcakesList;

}
const createCake = () =>{
    let name = prompt ("Enter the cake's name:");
    let cals = prompt ("Cake's calories: ");
    let price = prompt ("Cake's price: ")

    cakes.push({
        cakeName: name,
        calories: parseFloat(cals),
        price: parseFloat(price),
    });

    listCakes();
    console.log(cakes);
}

const readCake = () =>{
    let respone = prompt ("Which cake do you want to view?: ");
    let display = " "

    cakes.find((cake) => {
        if (cake.cakeName == respone)
        display = `${cake.cakeName} has ${cake.calories} calories. Price: $${cake.price}.`

        let cakeDisplay = document.querySelector(".selectedTask");
        cakeDisplay.innerHTML = display;
    }) ;    

}

const updateCake = () => {
    let response = prompt("Enter the cake that you want to upgarde:")
    let name = prompt ("Enter the new cake's name:");
    let cals = prompt ("New cake's calories: ");
    let price = prompt ("New cake's price: ")

    let index = cakes.findIndex((cake) => cake.cakeName === response)
    cakes[index] = {
        cakeName: name,
        calories: parseFloat(cals),
        price: parseFloat(price),
    }

    listCakes();   
};

const deleteCake = () =>{
    let response = prompt("Enter the cake that you want to delete:")

    let index = cakes.findIndex((cake) => cake.cakeName === response)
    
    let deleteCake = cakes.splice(index,1)

    listCakes(); 

    console.log (deleteCake);

}

let cakesList = listCakes();
let button = showInfo();

