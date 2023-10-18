let currentDisplay=document.getElementById("display");
let delButton=document.getElementById('del-button');
let resetButton=document.getElementById("reset-button");
let equalButton=document.getElementById("equals-button");
let generalButton=document.querySelectorAll(".generalButton");

let reset=()=>{
    currentDisplay.innerHTML="";
}

let deleteFunction=()=>{
    let string=currentDisplay.innerHTML;
    currentDisplay.innerHTML=string.slice(0, -1);
    
}

let calculate=()=>{
    if(currentDisplay.innerHTML!=''){
        currentDisplay.innerHTML=eval(currentDisplay.innerHTML); 
    }
}

let buttonPress=(buttonCharacter)=>{
    let currString=currentDisplay.innerHTML;
    if (currString === '' && (buttonCharacter === '+' || buttonCharacter === '*' || buttonCharacter === '/' || buttonCharacter === '.')) {
        if (buttonCharacter === '.') {
            currentDisplay.innerHTML = '0.';
        } else {
            alert("The first character can't be an operator");
        }
    } else {
        let lastCharacter=currString[currString.length-1];
        console.log(lastCharacter);
        if((lastCharacter==='+'||lastCharacter==='/'||lastCharacter=='*'||lastCharacter=='-'||lastCharacter=='.')&&(buttonCharacter === '+' || buttonCharacter === '*' || buttonCharacter === '/' || buttonCharacter === '.' || buttonCharacter==='-')){
            alert('Two consecutive characters can\'t be speacial character');
        }
        else{
            currentDisplay.innerHTML = currString + buttonCharacter;
        }
        
    }  
}

delButton.addEventListener("click",deleteFunction);
resetButton.addEventListener("click",reset);
equalButton.addEventListener("click",calculate);

generalButton.forEach(element => {
    element.addEventListener("click", () => {
        if(element.innerHTML=='x'){
            buttonPress('*');}
        else{
            buttonPress(element.innerHTML);
        }
        
    });
});