// De Rito Bianca 120294/9
// comisión 2
// link al video: https://youtu.be/9haL47JHAG8?si=Cblahy79TNu-WJZj

// estoy recursando esta segunda parte, el tp ya lo tenia hecho y aprobado
// pero aproveche para mejorar algunas cosas que antes no tenía
// como que por ejemplo no se me pintaba toda la figura, solo una parte
// ahora logré mejorar eso en mi codigo y entender más el tp

let figura;
let cant, cant2;
let tam, x, y;
let color1;
let color2;



function preload(){
  figura = loadImage("data/F_2.jpg"); 
}

function setup(){
  createCanvas(800, 400);
  
  
  cant = 11;
  cant2 = 28;
  tam = height;
  x = width / 2;
  color1 = color(0);
  color2 = color(255);
}

function draw(){
  
  dibujo(cant, tam, color1, color2);
  dibujo(3, 80, color1, color2);
  
  image(figura, 0, 0, 400, 400);
}
