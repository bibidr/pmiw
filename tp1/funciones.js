function dibujo(cant, tam, aron1, aron2) {
  let distancia = 14.5;

  // El for principal dibuja los cuadrados
  for (let i = 0; i < cant; i++) {
    rectMode(CENTER);
    if (esPar(i)) {
      fill(aron1);
    } else {
      fill(aron2);
    }

    rect(600, height / 2, tam - i * 29, tam - i * 29);

    // El siguiente for dibuja la cruz
    for (let k = 0; k < cant; k++) {
      rectMode(CORNER);
      if (esPar(k)) {
        fill(aron2);
      } else {
        fill(aron1);
      }
      rect(width / 2 + k * distancia, 160, 15, 79);
      rect(785 - k * distancia, 160, 15, 79);
      rect(560, 0 + k * distancia, 79, 15);
      rect(560, 385 - k * distancia, 79, 15);
    }
  }
}

function esPar(numero) {
  return numero % 2 === 0;
}

function keyPressed() {
  if (key === ' ') {
    colores();
  }

  if (key === 'r') {
    reinicio();
  }
}

function colores() {
  color1 = color(random(255), random(255), random(255));
  color2 = color(random(255), random(255), random(255));
}

function reinicio() {
  color1 = color(0);
  color2 = color(255);
}
