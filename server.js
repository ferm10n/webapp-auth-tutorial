console.log("hi there!");

var x = 25;
var y = x+5;
console.log(y);

function procrastinate(){
    console.log("I'll do this tomorrow");
}
procrastinate();
procrastinate();
procrastinate();

function procrastinate2(future){
    console.log("I'll do this in "+future+" minutes");
}
procrastinate2(5);

console.log(procrastinate2);

if(5 < 0){
    console.log("bro do you even math");
} else {
    console.log("I'm probably a sane person.");
}

var sanity = false;
if(sanity == true){
    console.log("HAHA jk");
    sanity = false;
}