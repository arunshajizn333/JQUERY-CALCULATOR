 var screen = $("#screen");

 function btnclick(value){
    screen.val(screen.val()+value);

 }
 function clearScreen(){
    screen.val("");
 }
function findResult(){
    var result=eval(screen.val());
    screen.val(result);
}

