const display = document.getElementById('display');
function append(data){
    display.value+=data;
}
function answer(){
    try{
        document.getElementById("display").value = eval(display.value);
    } catch (error) {
        alert("Invalid Input!");
    }
    
}
function clr() { 
    document.getElementById("display").value = "" 
} 