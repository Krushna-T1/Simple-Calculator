let keys=["1","2","3","4","5","6","7","8","9","0","+","-","*","/"];
document.addEventListener("keyup",function getInput(e){
    console.log(e.key);
        if(e.key=="Backspace"){
            back();
            console.log(e.key);
        }
        else if(e.key=="Enter" ||e.key=="=")
        {
            cal();
            console.log(e.key);
        }else if(e.key=="%"){
            per();
        }
       keys.forEach((k)=>{
        if(e.key==k){
            get(k);
            console.log(k);
        }

       })
})
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

function botton(event){
    let key = event.key;
    document.getElementById("input").innerHTML += key;
}



    
