//Create Skeleton, class
var main = document.createElement("div");
main.className = "flexContainer";
var gridBox = document.createElement("div");
gridBox.className = "gridContainer";


//Append to Doc
document.body.appendChild(main);
main.appendChild(gridBox);


//Make grid kids
function nineBlocks() {
    var i = 0;
    while ( i < 9) {
        var gridKid = document.createElement("div");
        gridKid.className = "gridItem";
        gridBox.appendChild(gridKid);
        i++;
    }
}
console.log(nineBlocks());

//Make Inside Guts
var keyArray = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
var i = 0;
function inputText(){
    while (i <9){
       i++;
        return keyArray.shift();
    }
    
}

document.querySelectorAll(".gridItem").forEach(item => {
    item.innerHTML = inputText();
});
 

//Make Audio

var clap = new Audio("sounds/clap.wav");
var hihat = new Audio("sounds/hihat.wav");
var kick = new Audio("sounds/kick.wav");
var openhat = new Audio("sounds/openhat.wav");
var boom = new Audio("sounds/boom.wav");
var ride = new Audio("sounds/ride.wav");
var snare = new Audio("sounds/snare.wav");
var tom = new Audio("sounds/tom.wav");
var tink = new Audio("sounds/tink.wav");



//Make Keylisteners

var nodeArray = document.querySelectorAll(".gridItem");

document.addEventListener("keydown", function(event) {
        if (event.key === "a"){
            nodeArray[0].style.transform = "scale(1.3,1.3)";
            clap.play();
    }   if (event.key === "s"){
            nodeArray[1].style.transform = "scale(1.3,1.3)";
            hihat.play();
    }   if (event.key === "d"){
            nodeArray[2].style.transform = "scale(1.3,1.3)";
            kick.play();
    }   if (event.key === "f"){
            nodeArray[3].style.transform = "scale(1.3,1.3)";
            openhat.play();
    }   if (event.key === "g"){
            nodeArray[4].style.transform = "scale(1.3,1.3)";
            boom.play();
    }   if (event.key === "h"){
            nodeArray[5].style.transform = "scale(1.3,1.3)";
            ride.play();
    }   if (event.key === "j"){
            nodeArray[6].style.transform = "scale(1.3,1.3)";
            snare.play();
    }   if (event.key === "k"){
            nodeArray[7].style.transform = "scale(1.3,1.3)";
            tom.play();
    }   if (event.key === "l"){
            nodeArray[8].style.transform = "scale(1.3,1.3)";
            tink.play();
    }
    });

document.addEventListener("keyup", function(event) {
        if (event.key === "a"){
            nodeArray[0].style.transform = "scale(1,1)";
    }   if (event.key === "s"){
            nodeArray[1].style.transform = "scale(1,1)";
    }   if (event.key === "d"){
            nodeArray[2].style.transform = "scale(1,1)";
    }   if (event.key === "f"){
            nodeArray[3].style.transform = "scale(1,1)";
    }   if (event.key === "g"){
            nodeArray[4].style.transform = "scale(1,1)";
    }   if (event.key === "h"){
            nodeArray[5].style.transform = "scale(1,1)";
    }   if (event.key === "j"){
            nodeArray[6].style.transform = "scale(1,1)";
    }   if (event.key === "k"){
            nodeArray[7].style.transform = "scale(1,1)";
    }   if (event.key === "l"){
            nodeArray[8].style.transform = "scale(1,1)";
    }
    });


