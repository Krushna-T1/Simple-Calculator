
function get(val){
    document.getElementById("input").value +=val;
   
    document.getElementById("output").value =eval(document.getElementById("input").value);
   
}
function cal(){
    try{
    document.getElementById("output").value =eval(document.getElementById("input").value);
    }
    catch(error)
    {
        document.getElementById("output").value='Error';
    }
}
function clr(){
    document.getElementById("input").value = '';
    document.getElementById("output").value = '';
}
function per(){
    document.getElementById("output").value = document.getElementById("input").value/100;
    document.getElementById("input").value = document.getElementById("input").value/100 + "*";
}
function back(){
    document.getElementById("input").value =document.getElementById("input").value.slice(0,-1);
}



    
