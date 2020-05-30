var database;

function setup() {
    createCanvas(800,400);
    database = firebase.database();
    textFont("zapfino");
    fill(0)
    text("MY  CANVAS",50,50);
    strokeWeight(2);
    stroke('#fae');
  }
  
  function touchMoved() {
    line(mouseX, mouseY, pmouseX, pmouseY);
    return false;
  }
  