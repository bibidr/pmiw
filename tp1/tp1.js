// De Rito Bianca 120294/9  
// comisión 2
// link al video: https://youtu.be/PEMJFiCRo6w?si=GascrheRfeaDr2aJ

let figura;
let cant, cant2;
let tam, x, y;


let color1;
let color2;

function preload() {
  figura = loadImage("F_2.jpg");
}

function setup() {
  createCanvas(800, 400);
  cant = 11;
  cant2 = 28;
  tam = height;
  x = width / 2;

  // Variables de color
  color1 = color(0);
  color2 = color(255);
}

function draw() {
 
  dibujo(cant, tam, color1, color2);
  cant = 3;
  tam = 80;
  dibujo(cant, tam, color1, color2);

  image(figura, 0, 0, 400, 400);
}
