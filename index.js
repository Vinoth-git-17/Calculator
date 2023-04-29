var displayOutput = document.getElementById('display')


function display(num) {
   
    displayOutput.value =  displayOutput.value + num
    
}
function allclear(){
    displayOutput.value= ""
}

function del() {
    displayOutput.value = displayOutput.value.slice(0,-1)
    
}

function calculate(){
    try{
        displayOutput.value = eval(displayOutput.value);

        
       
    }
    catch{
        displayOutput.value = "Error"
    }
    }