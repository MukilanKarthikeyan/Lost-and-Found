//next up: timer, daily tracker, accidentals, aligned images, key signatures, audio

const note_array = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
const range_low = 3;
const range_high = 5;
let total_notes = 0;
let correct = 0;

let note;
const default_bkground_color = "#2b2b2b";

//var verify = document.getElementById("indicator");
var verify = document.body;
// need some way to track which note selected
//fix images so the staff is aligned
const note_image = {
    'a' : ["base/a3.png", "base/a4.png", "trebble/a5.png", "trebble/a6.png",],
    'b' : ["base/b3.png", "base/b4.png", "trebble/b5.png", "trebble/b6.png",],
    'c' : ["base/c2.png", "base/c3.png", "base/c4.png", "trebble/c4.png", "trebble/c5.png", "trebble/c6.png",],
    'd' : ["base/d2.png", "base/d3.png", "trebble/d4.png", "trebble/d5.png",],
    'e' : ["base/e2.png", "base/e3.png", "trebble/e4.png", "trebble/e5.png",],
    'f' : ["base/f2.png", "base/f3.png", "trebble/f4.png", "trebble/f5.png",],
    'g' : ["base/g2.png", "base/g3.png", "trebble/g4.png", "trebble/g5.png",],

    'csharp' : ["base/c2sharp.png", "base/d2flat.png", ],
    'dsharp' : ["base/d2sharp.png", "base/e2flat.png", ],
    'fsharp' : ["base/f2sharp.png", "base/g2flat.png", ],
    'gsharp' : ["base/g2sharp.png", ],
    'asharp' : [],
};






function get_random_note() {
    
    const rand_index = Math.floor(Math.random() * note_array.length);
    note = note_array[rand_index];
    const possible = note_image[note];
    const rand_range = Math.floor(Math.random() * possible.length);
    const img  = possible[rand_range];
    document.getElementById('note_display').src = `./music notes/${img}`;
}

function check_note(varnote) {
    console.log(note);
    if (note == varnote) {
        correct++;
        console.log("correct! note: ${varnote}")
        document.body.style.backgroundColor = "#68BC00";
        
    } else {
        console.log('sorry, that\'s wrong')
        document.body.style.backgroundColor = "#D33115";
    }

    setTimeout(function() {
        document.body.style.background = default_bkground_color;
    
    }, 500);
    console.log(varnote); 
    get_random_note();
}
function clickC() {
    check_note('c')  
}
function clickD() {
    check_note('d')    
}
function clickE() {
    check_note('e')  
}
function clickF() {
    check_note('f')    
}
function clickG() {
    check_note('g')    
}
function clickA() {
    check_note('a')    
}
function clickB() {
    check_note('b')    
}


function clickCSharp() {
    console.log("CSharp");   
}
function clickDSharp() {
    console.log("DSharp");   
}
function clickFSharp() {
    console.log("FSharp");   
}
function clickGSharp() {
    console.log("GSharp");   
}
function clickASharp() {
    console.log("ASharp");   
}

window.onload = get_random_note;