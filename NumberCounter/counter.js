// here is a variable where we can store the value of the counter

let value = 0

// set the header to the initial value

//document.querySelector('#value').innerHTML = value.toString()
changeHeader(); 

// 1. add a handler for the `subtract` button

document.querySelector("#subtract").onclick = function() {
value--;
//document.querySelector('#value').innerHTML = value.toString()
changeHeader();

}

// 2. add a handler for the `add` button

document.querySelector("#add").onclick = function(){
value++;
//document.querySelector('#value').innerHTML = value.toString()
changeHeader();

}

// 3. "DRY" your code out by making a function

//Function comes with the name "Function" first. Then comes the name of the function you call it like "changeHeader" Then comes the parentheses and the brackets. In order to delare it, you would put the name and the parentheses like "changeHeader." 
function changeHeader () {

    document.querySelector('#value').innerHTML = value.toString()

}
