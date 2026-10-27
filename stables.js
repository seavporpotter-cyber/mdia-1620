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
//
// This is a template for your assignments and final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// Please do not create a new file for each assignment!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. E.g.: those seen on lines 58 - 68, for example. They are usually providing directions. 
// (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

//------------------------- Seting up shop (Assignment 1) -------------------------//


let stableName = "Happy Barn";

let tomato = {
    name: "Tomato",
    age: 3,
    favoriteSnack: "crackers",
    monthlyCost: 300,
};

let cheesecake = {
    name: "Cheesecake",
    age: 5,
    favoriteSnack: "milk",
    monthlyCost: 250,
};

let mochi = {
    name: "Mochi",
    age: 2,
    favoriteSnack: "bananas",
    monthlyCost: 400,
};


console.log (`This is ${stableName}.`)
console.log (`Hello our lovely visitors ! Welcome to ${stableName}!`)
console.log (`Hello there! We are here to inform you that your payment for ${cheesecake.name} is due. The owning amount is ${(cheesecake.monthlyCost) + (cheesecake.monthlyCost * 0.2) } dollars. Please kindly make your payment by the end of this week.`) 

// Assignment 2 Below //

let horseOne = {
    name: "Tomato",
    age: 5,
    favoriteSnack : "crackers",
    monthlyCost: 300,
}

let horseTwo = {
    name: "Cheesecake",
    age: 5,
    favoriteSnack: "milk",
    monthlyCost: 250,
}

let horseThree = {
    name: "Mochi",
    age: 2,
    favoriteSnack: "bananas",
    monthlyCost: 400,
}

// create a function called horseIntro : //

function horseIntro (horse) {
    return horse.name + " is " + horse.age + " years old 🐎 and their favorite snack is " + horse.favoriteSnack + "💚." ;
}

let introMessage = horseIntro(horseTwo);
console.log (introMessage)