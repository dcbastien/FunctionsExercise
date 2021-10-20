// FUNCTIONS EXERCISE

//1
function spookyGhost(){
    console.log("Boo!!");
}
spookyGhost();

//2
function candy (goal){
    console.log(`${goal}`);
    console.log(`${goal}`);
    console.log(`${goal}`);
    console.log(`${goal}`);
}
candy (`Get Candy`);

//3
function werewolf(a,b) {
if (a === "FULL" && b==="MOON"){
    console.log("ARH-WOOO!");
}
else {console.log(``);}   
}
werewolf(`FULL`, `MOON`);
werewolf(`NO`, `MOON`);

4//
function halloween() {
    console.log(`October 31st`);
    
}
halloween ();

//5
function isEnoughCandy(pieces){
    if (pieces >= 31){
        return true;
    }
    else if (pieces < 31){
        return false;
    }
};
isEnoughCandy(5);
isEnoughCandy(36);

// //6
// function candyCounter(nums) {
//     const addNums = (1,2,3) => 1 + 2 + 3;

//     console.log(addNums);

    
// }

// candyCounter (nums);

//7
const hauntedMansion = function () {
    console.log(
    "Welcome, foolish mortals, to the Haunted Mansion!");
}
hauntedMansion();

//8
ghostbusters = () => "Who You Gonna Call?";

console.log(ghostbusters());

//9
// QUESTION: If a let or const variable is created/declared inside a function, loop, or conditional can the value of it be accessed outside of the function, loop, or conditional?-No 

//10
// 10. QUESTION: If a let or const variable is created/declared outside the scope of a function called change and the value of the variable is updated inside the change function, then (assuming the function has been run) could the updated value of the variable be accessed outside of the function. -YES

//11a
const costumes = [
    "Ghost", 
    "Princess", 
    "Pirate"
];

//11b
const upperCostumes = costumes.map (costumes => costumes.toUpperCase())

console.log(upperCostumes);