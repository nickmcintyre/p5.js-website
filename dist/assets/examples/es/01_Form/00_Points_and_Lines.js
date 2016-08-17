/*
 * @name Puntos y líneas
 * @description Puntos y líneas pueden ser usados para dibujar geometría básica.
 * Cambia el valor de la variable 'd' para escalar la figura. Las cuatro
 * variables definen las posiciones basadas en el valor de 'd'.
 */
function setup() {

  var d = 70;
  var p1 = d;
  var p2 = p1+d;
  var p3 = p2+d;
  var p4 = p3+d;

  // Define el lienzo de 720 pixeles de ancho y 400 de alto
  createCanvas(720, 400);
  background(0);
  noSmooth();

  translate(140, 0);

  // Dibuja una caja gris
  stroke(153);
  line(p3, p3, p2, p3);
  line(p2, p3, p2, p2);
  line(p2, p2, p3, p2);
  line(p3, p2, p3, p3);

  // Dibuja puntos blancos
  stroke(255);
  point(p1, p1);
  point(p1, p3);
  point(p2, p4);
  point(p3, p1);
  point(p4, p2);
  point(p4, p4);
}