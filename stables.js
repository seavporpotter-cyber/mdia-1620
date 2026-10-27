

// Assignment 2 Below //

let horseOne = {
    name: "Tomato",
    nickname: "Toto",
    favoriteTreat : "crackers",
    age: 5,
    monthlyCost: 300,
    favoriteColor: "blue",
    favoriteActivity: "sleeping",
}

let horseTwo = {
    name: "Cheesecake",
    nickname: "Kiki",
    age: 5,
    favoriteTreat: "milk",
    monthlyCost: 250,
    favoriteColor: "yellow",
    favoriteActivity: "reading",
}

let horseThree = {
    name: "Mochi",
    nickname: "Chichi"
    age: 2,
    favoriteSnack: "bananas",
    monthlyCost: 400,
    favoriteColor: "pink",
    favoriteActivity: "singing",
}

// create a function called horseIntro : //

function horseIntro (horse) {
    return horse.name + " is " + horse.age + " years old 🐎 and their favorite snack is " + horse.favoriteSnack + "💚." ;
}

let introMessage = horseIntro(horseTwo);
console.log (introMessage)

// github notes: //
// git status> git add stables.js > git commit -m"name of the repo" > git push //

