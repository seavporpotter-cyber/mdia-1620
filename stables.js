// Welcome!
//
//                                                  #    #
//                                             %%% ##   ##
//                                          %%%%% ###%🎀###
//                                         %%%%% ### %%% #
//                                       %%%%%% ### %%% ###
//                                        %%%% ## %% #######
//                                       %%%%% # %% #@#####
//                                     %%%%%% # % #########
//                                    %%%%% ##### #########
//                          ###        %% ####### #########
//                 %%% ############    ########### ########
//              %%%% ############################### #######
//            %%%%% ################################## ######
//          %%%%%% #################################### #C###
//         %%%🌸%% #####################################  ###
//         %%%%% #######################################
//        %%%%%% ############### BEANS ##################
//     % %%%%%%% ############### BEANS ##################
//      %%%%%%%%% ############## BEANS ##################
//     %%%%%%%%%% ########################################
//  %%% %%%%%%%%   ###### ################################
//    %%%%%%%%      ###### #################### ##########
// % %%%🌸%%%%        ####### ########### ###### ##########
//  %%%%%%%%%         #######  ########### ###### ########
// %%%%%%%%%%          ##### ###  ######### ####### ######
//  %%%%%%%%%%          #### ##               ####### ####
//  %🌸%%%%%%%%%           ## #                  ##### ###
//   %%  %% % %%         # ##                      ## ###
//     %   %    %        # ###                      # ###
//                        # ###                     ## ###
//                        # ###                     ## ###
//                        # ####                   #### ##
//                       ### ###                  ##### ###
//                      ####  ###                 ####   ##
//                     #####   ###                 ##    ##
//                    #####    ####                      ###
//                     ##        ###                     ###
//                                ####                     ##
//                                 ####                    ###
//                                                         ####
//                                                          ##

// Assignment 2 Below //

// Put each horse in objects //

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
    nickname: "Chichi",
    age: 2,
    favoriteTreat: "bananas",
    monthlyCost: 400,
    favoriteColor: "pink",
    favoriteActivity: "singing",
}

// create a function called horseIntro : //

function horseIntro (horse) {
    return horse.name + " is " + horse.age + " years old 🐎 and their favorite snack is " + horse.favoriteTreat + "💚." ;
}

let introMessage = horseIntro(horseTwo);
console.log (introMessage)

// Store the horses you've just created in a "horses" array //
let horse = [horseOne, horseTwo, horseThree];
console.log (horse[1]);

// Create a variable that stores an object literal of your new horse, and add it to your "horses" variable. //

let newHorse = {
    name: "KitKat",
    nickname: "Katty",
    age: 6,
    favoriteTreat: "Chocolate bars",
    monthlyCost: 500,
    favoriteColor: "orange",
    favoriteActivity: "sky gazing",
}

horse = [horseOne, horseTwo, horseThree, newHorse];

// a boolean that allows you to check if your horse is hungry or not //

let isHorseHungry = true; 
if (isHorseHungry) {
    console.log (" yes! The horse is hungry!");
}

// Create a function that logs out how much will an individual horse will owe if rent is paid late //


function latePayment (horse) {
    return "Hello! we would like to inform you that your payment for " + horse.name + " or " + horse.nickname + " is due. Your owning amount is " + (( horse.monthlyCost * 0.2) + (horse.monthlyCost)) + " . Please make your payment by the end of this month."
}

let paymentMessage = latePayment(horseTwo);
console.log (paymentMessage);

function getHorseNickname (horse) {
    return horse.name + " 's nickname is " + horse.nickname + "!🩷"
}

// Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out the return value outside of the function //

let horseNickname = getHorseNickname(horseOne);
console.log (horseNickname);


// github notes: //
// git status> git add stables.js > git commit -m"name of the repo" > git push //

