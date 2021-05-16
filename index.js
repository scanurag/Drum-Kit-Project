// Adding event listeners for click on drums
function addingEventListenerToClick(){

    let drums = document.querySelectorAll(".drum"); //array
    let numDrums = drums.length; //7

    for (let i=0;i<numDrums;i++){
        let which_drum = drums[i].innerText;
        drums[i].addEventListener("click",function(){ 
            playSound(which_drum); }  //playSound(this.innerText) also works;
        );
    }
}

// Adding event listeners for pressing keys on keyboard
function addingEventListenerToKeys(){
    document.addEventListener("keypress", function(event){ 
            playSound(event.key); } 
        );
}

//function to play sound accroding to drum clicked/pressed
function playSound(which_drum){

    if (which_drum === "w"){
        let a = new Audio("./sounds/tom-1.mp3");
        a.play();
    }

    else if (which_drum === "a"){
        let a = new Audio("./sounds/tom-2.mp3");
        a.play();
    }

    else if (which_drum === "s"){
        let a = new Audio("./sounds/tom-3.mp3");
        a.play();
    }

    else if (which_drum === "d"){
        let a = new Audio("./sounds/tom-4.mp3");
        a.play();
    }

    else if (which_drum === "j"){
        let a = new Audio("./sounds/snare.mp3");
        a.play();
    }

    else if (which_drum === "k"){
        let a = new Audio("./sounds/crash.mp3");
        a.play();
    }

    else if (which_drum === "l"){
        let a = new Audio("./sounds/kick-bass.mp3");
        a.play();
    }
}

addingEventListenerToClick();
addingEventListenerToKeys();
