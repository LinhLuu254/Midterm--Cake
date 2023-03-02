const cakes =[
    {
        cakeName: "Lemon Ice",
        calories: 120,
        price: 3.5,
        pic: "images\\Lemon.jpg"
    },
    {
        cakeName: "Choco Truffle",
        calories: 230,
        price: 5,
        pic: "images\\Choco.jpg"
    },
    {
        cakeName: "Vanilla Truffle",
        calories: 220,
        price: 4.5,
        pic: "images\\Vanilla.jpg"
    },
    {
        cakeName: "Orange Zest",
        calories: 230,
        price: 5,
        pic: "images\\Orange.jpg"
    },
    {
        cakeName: "Peanut Butter",
        calories: 320,
        price: 4.5,
        pic: "images\\Peanut-Butter.jpg"
    },
    {
        cakeName: "Oreo Truffle",
        calories: 330,
        price: 5.5,
        pic: "images\\oreo-truffles.jpg"
    },
    {
        cakeName: "Carrot Cake",
        calories: 240,
        price: 3.5,
        pic: "images\\Carrot.jpg"
    },
    {
        cakeName: "Apple Pie",
        calories: 260,
        price: 5.5,
        pic: "images\\Apple-Pie.jpg"
    },
    {
        cakeName: "Beer Cake",
        calories: 320,
        price: 6,
        pic: "images\\Beer_Cake.jpg"
    },
    {
        cakeName: "Brownie",
        calories: 210,
        price: 3.5,
        pic: "images\\brownie.jpg"
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
    let allcakesList = `<ul>`;
    
    cakes.forEach((cake) => {
        allcakesList += `<li> ${cake.cakeName}</li><br>`;
          
    });
    allcakesList += `</ul>`;
    
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
        pic: "cake-decorations.jpg"
    });

    listCakes();
    console.log(cakes);
}

const readCake = () =>{
    let response = prompt("Enter the cake that you want to view:")

    let index = cakes.findIndex((cake) => cake.cakeName === response)

        display = `${cakes[index].cakeName} has ${cakes[index].calories} calories. Price: $${cakes[index].price}!`
        
        let cakeDisplay = document.querySelector(".selectedTask");
        cakeDisplay.innerHTML = display;

        let cakePic = document.querySelector(".cakesPic");
        // set the image
        cakePic.src = cakes[index].pic;
    

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
        pic: "cake-decorations.jpg"
    }

    listCakes();
    console.log(cakes);  
};

const deleteCake = () =>{
    let response = prompt("Enter the cake that you want to delete:")

    let index = cakes.findIndex((cake) => cake.cakeName === response)
    
    let deleteCake = cakes.splice(index,1)

    listCakes(); 

    console.log (deleteCake);
    console.log(cakes);

}

let cakesList = listCakes();
let button = showInfo();

