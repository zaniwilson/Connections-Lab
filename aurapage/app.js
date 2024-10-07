window.addEventListener('load', function(){
    console.log("page is loaded")

    // fetch data
    this.fetch('personality_test.json')
    .then(response => response.json())
    .then(function personalityQuestion(data){
        // console.log(data)
        // display a personality question on the page from dataset
        let personalityArray = data.personality_test;
        let randomNumber = Math.floor(Math.random()*personalityArray.length)
        let questionElement = document.getElementById('personality__question');
        questionElement.innerHTML = data.personality_test[randomNumber]
    })
    .catch(error =>{
        console.log("error: " + error)
    })
})



/* change the button color when button is clicked */
$(document).ready(function() {
    var button = $('button');

    button.on('click', function(){
        button.removeClass('selected');
        $(this).addClass('selected');

        changeBackground();
    });
});


/* p5 code */
let colorsData;
let colorName = "";
let colorHex = "";
let resetButton;
let auraButton;

function preload() {
  colorsData = loadJSON("web_colors.json");
}

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  background(255);
  auraShade();

  resetButton = createButton("reset");
  resetButton.position(windowWidth/2, 950);
  resetButton.mousePressed(resetSketch);
}

function draw() {

}

function loadData(index) {
  let colorsArray = colorsData.colors; // Access the "colors" array

  if (colorsArray && colorsArray.length > 0) {
    let color = colorsArray[index]; // Access the first color object
    colorName = color.color;
    colorHex = color.hex;

    console.log("Color Name: " + name);
    console.log("Hex Code: " + hex);
  }
}

function changeBackground() {
    let randomColor = floor(random(0, colorsData.colors.length));
    loadData(randomColor);

  
  background(colorHex);
  text(colorName, width / 2, height / 2 - 20);
  text(colorHex, width / 2, height / 2 + 20);
}

function auraShade() {
  textSize(30);
  background(255);
  text("your aura shade is...", width / 2, height / 2);
}

function resetSketch() {
  colorName = "";
  colorHex = "";
  fill(0);
  auraShade();
}

