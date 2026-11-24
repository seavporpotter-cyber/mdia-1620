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

let horseOne = {
    name: "Tomato",
    nickname: "Toto",
    favoriteTreat : "crackers",
    age: 5,
    monthlyCost: 300,
    favoriteColor: "blue",
    favoriteActivity: "sleeping",
    isHorseInside: false,
}

let horseTwo = {
    name: "Cheesecake",
    nickname: "Kiki",
    age: 5,
    favoriteTreat: "milk",
    monthlyCost: 250,
    favoriteColor: "yellow",
    favoriteActivity: "reading",
    isHorseInside: true,
}

let horseThree = {
    name: "Mochi",
    nickname: "Chichi",
    age: 2,
    favoriteTreat: "bananas",
    monthlyCost: 400,
    favoriteColor: "pink",
    favoriteActivity: "singing",
    isHorseInside: true,
}

let horseFour = {
    name: "Broski",
    nickname: "Skiki",
    age: 3,
    favoriteTreat: "broccoli",
    monthlyCost: 400,
    favoriteColor: "green",
    favoriteActivity: "cooking",
    isHorseInside: false,
}

let horses = [horseOne, horseTwo, horseThree, horseFour];

//------------------------- Day to day operations (Project) -------------------------//

// Add loop that checks to find out if a certain horse likes a particular treat. If the horse does not like the treat, log out their disatisfaction and check the next horse. Exit the loop when you find the horse that likes the treat.

let certainTreat = "bananas";
for (const horse of horses) {
    if (horse.favoriteTreat == certainTreat) {
        console.log(horse.name + " likes " + certainTreat + "!");
        break;
    }
    else {console.log (horse.name + " doesn't like "+ certainTreat + "!🥹") }
}

// Create a function references one of your unique horse properties. It should contain a conditional or a loop. Invoke it for each horse. 

function checkHorseAge (horse) {
    if (horse.age > 3 ) {
        console.log(horse.name + " is an adult!")
    }
    else {console.log (horse.name + " is just a baby!🧸")}
}

checkHorseAge(horseOne)
checkHorseAge(horseTwo)
checkHorseAge(horseThree)
checkHorseAge(horseFour)


// Morning! Create and invoke a function that moves any number horses of your choice outside. It should log out statement indicating the horses have been moved to spend time in the sun. (The function should be able to move a single horse, or multiple horses, depending on the parameters specified)

function checkHorseLocation (horses) {
    for (const horse of horses)
    if (horse.isHorseInside == true) {
        console.log(horse.name + " has been moved outside to spend time in the sun.☀️")
    }
} 

checkHorseLocation([horseTwo]);
checkHorseLocation([horseThree, horseFour]);

// Food! Create and invoke a function that feeds your horses. If the horse is outside, it should call them in, and then all horses should be fed a treat. Log the activity of the horses.

// function feedHungryHorse (horse)

// Bedtime! Update the function that lets your horses outside so that it also calls them
// in if it is getting dark. Only the horses that moved should log out a message. Invoke the function.

//------------------------- Bonus -------------------------//

// Replace the ascii art at the top of the file with art representing your stable.
// Initialize a method on your horses that moves them inside if they are outside, and
// vice versa.

