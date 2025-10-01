let DEBUG = true;  

//variable global para saber en que pantalla estoy 
let pantalla;

function setup() {
  createCanvas(640, 480);
  //valor inicial a la pantalla 
  pantalla = 0; 
}

//funciones de pantallas:
function mostrarPantallaInicio() {
  background(50,150,200);
  fill(255);
  textSize(32);
  textAlign(CENTER,CENTER);
  text("Pantalla de inicio", width/2, height/2);
}

function draw() {
  background (255, 0, 0);

  if (pantalla === 0) {
    mostrarPantallaInicio();

  } else if (pantalla == 1) {
    //falta imagen de fondo:
    //primer pantalla:
    // mostramos texto del relato: 
    push();
    fill(100,40); //gris transparente
    rect(0, height*0.55, width, height*0.4);
    fill (0,0,200);
    textSize(24);
    text("Este es el comienzo de fantástica...", 0, height*0.50, width, height*0.4);
    pop();
    
    //mostramos los botones de opciones:
    mostrarBoton("si",100,400,80,40);
    mostrarBoton("no",540,400,80,40);
   
  } else if (pantalla == 2) {
    //segunda pantalla:
    background(0,200,0);
    textSize(32);
    textAlign(CENTER,CENTER);
    fill(255);
    text("Pantalla 2", width/2, height/2);

  } else if (pantalla == 3) {
    //tercera pantalla:
    background(200,0,0);
    textSize(32);
    textAlign(CENTER,CENTER);
    fill(255);
    text("Pantalla 3", width/2, height/2);
  }
}

function mousePressed() {
  if (pantalla === 0) {
    //flujo de estado de pantalla 0 a pantalla 1 
    pantalla = 1;

  } else if (pantalla == 1) {
    //estoy en la pantalla 1
    //preguntar si hay colision con boton "si"
    if (colisionRectangular(100, 400, 80, 40)) {
      pantalla = 2; // acción botón sí
    }
    //preguntar si hay colision con boton "no"
    if (colisionRectangular(540, 400, 80, 40)) {
      pantalla = 3; // acción botón no
    }

  } else if (pantalla == 2) {
    //acciones pantalla 2
  } else if (pantalla == 3) {
    //acciones pantalla 3
  }
}



// Botón con rectMode(CENTER)
function mostrarBoton(texto_, x_, y_, ancho_, alto_) {
  push();
  rectMode(CENTER);
  fill(0, 100, 0);
  rect(x_, y_, ancho_, alto_);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(16);
  text(texto_, x_, y_);
  pop();
}

function colisionRectangular(x_, y_, ancho_, alto_) {
  if (
    mouseX > x_ - ancho_ / 2 && mouseX < x_ + ancho_ / 2 &&
    mouseY > y_ - alto_ / 2 && mouseY < y_ + alto_ / 2
  ) {
    return true;
  } else {
    return false;
  }
