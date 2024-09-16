// identify and select button
let button = document.getElementById('button');
let hiddenSection = document.getElementById("hiddenSection")
console.log(button);

// initally hide the recipe section
hiddenSection.style.display = "none";

//listen for button click and display cookie recipe
button.addEventListener("click", function(){
    hiddenSection.style.display = "block";
    console.log("button clicked")
})