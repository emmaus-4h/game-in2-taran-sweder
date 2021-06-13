/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* 14 april tips van gee
* 1: zorg dat speler getekend wordt op plek x
*2 : test door aanpassen van spelerX en spelerY
*3: pas spelerX en spelerY aan bij toetsindruk
*/


/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library
   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */




/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;

var spelStatus = SPELEN;

const AFKOELTIMERSTART = 20;
const AFKOELTIMERBEGIN = 60;
var afkoeltimer = 0;


const KEY_SPACE = 32;
const KEY_SHIFT = 16;



var spelerX = 800; // x-positie van speler
var spelerY = 580; // y-positie van speler


var vijandX = 350;   // x-positie van vijand
var vijandY = 350;   // y-positie van vijand

var dijandX = 500;   // x-positie van vijand
var dijandY = 400;   // y-positie van vijand

var veiandX = 850;   // x-positie van vijand
var veiandY = 200;   // y-positie van vijand

var gijandX = 80;   // x-positie van vijand
var gijandY = 500;  // y-positie van vijand
             
var monster1X=500; // x-positie van vijand
var monster1Y=290 // y-positie van vijand

var monster2X=500; // x-positie van vijand
var monster2Y=100 // y-positie van vijand

var monster3X=850; // x-positie van vijand
var monster3Y=150 // y-positie van vijand

var monster4X=80; // x-positie van vijand
var monster4Y=100 // y-positie van vijand

var monster5X=80; // x-positie van vijand
var monster5Y=570  // y-positie van vijand

var kogelX = 300;    // x-positie van kogel
var kogelY = 200;    // y-positie van kogel




var kogelsY = [];
var kogelsX = [];




var score1X = 0; // aantal behaalde punten





/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */
var tekenVeld = function () {
  fill("black");
  rect(20, 20, width - 2 * 20, height - 2 * 20);
};


/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenVijand = function(x, y) {//rij 1
fill("orange")
rect(x,y, 5,5)
rect(x+10,y, 5,5)
rect(x+15,y, 5,5)
rect(x+20,y, 5,5)
rect(x+30,y, 5,5)

//rij 2
rect(x+5,y+5, 5,5)
rect(x+25,y+5, 5,5)
rect(x+15,y+5, 5,5)

//rij 3
rect(x+10,y+10, 5,5)
rect(x+20,y+10, 5,5)

//rij 4
rect(x+10,y+15, 5,5)
rect(x+5,y+15, 5,5)
rect(x+15,y+15, 5,5)
rect(x+20,y+15, 5,5)
rect(x+25,y+15, 5,5)

//rij 5
rect(x,y+20, 5,5)
rect(x+15,y+20, 5,5)
rect(x+30,y+20, 5,5)

//rij 6
rect(x,y+25, 5,5)
rect(x+10,y+25, 5,5)
rect(x+20,y+25, 5,5)
rect(x+30,y+25, 5,5)

//rij 7
rect(x+10,y+30, 5,5)
rect(x+20,y+30, 5,5)

//rij 8
rect(x+10,y+35, 5,5)
rect(x+20,y+35, 5,5)

fill("white")
rect(x+10,y+5, 5,5)
rect(x+20,y+5, 5,5)
  
fill("red") 
rect(x+15,y+10, 5,5)
};
 

var tekenDijand = function(x, y) {
//rij 1
fill("red")
rect(x,y, 5,5)
rect(x+10,y, 5,5)
rect(x+15,y, 5,5)
rect(x+20,y, 5,5)
rect(x+30,y, 5,5)

//rij 2
rect(x+5,y+5, 5,5)
rect(x+25,y+5, 5,5)
rect(x+15,y+5, 5,5)

//rij 3
rect(x+10,y+10, 5,5)
rect(x+20,y+10, 5,5)

//rij 4
rect(x+10,y+15, 5,5)
rect(x+5,y+15, 5,5)
rect(x+15,y+15, 5,5)
rect(x+20,y+15, 5,5)
rect(x+25,y+15, 5,5)

//rij 5
rect(x,y+20, 5,5)
rect(x+15,y+20, 5,5)
rect(x+30,y+20, 5,5)

//rij 6
rect(x,y+25, 5,5)
rect(x+10,y+25, 5,5)
rect(x+20,y+25, 5,5)
rect(x+30,y+25, 5,5)

//rij 7
rect(x+10,y+30, 5,5)
rect(x+20,y+30, 5,5)

//rij 8
rect(x+10,y+35, 5,5)
rect(x+20,y+35, 5,5)

fill("white")
rect(x+10,y+5, 5,5)
rect(x+20,y+5, 5,5)
  
fill("red") 
rect(x+15,y+10, 5,5)
};
 

var tekenVeiand = function(x, y) {
    
//rij 1
fill("pink")
rect(x+20,y+20, 5,5)
rect(x+1,y, 5,5)
rect(x+15,y, 5,5)
rect(x+20,y, 5,5)
rect(x+30,y, 5,5)

//rij 2
rect(x+5,y+5, 5,5)
rect(x+25,y+5, 5,5)
rect(x+15,y+5, 5,5)

//rij 3
rect(x+10,y+10, 5,5)
rect(x+20,y+10, 5,5)

//rij 4
rect(x+10,y+15, 5,5)
rect(x+5,y+15, 5,5)
rect(x+15,y+15, 5,5)
rect(x+20,y+15, 5,5)
rect(x+25,y+15, 5,5)

//rij 5
rect(x,y+20, 5,5)
rect(x+15,y+20, 5,5)
rect(x+30,y+20, 5,5)

//rij 6
rect(x,y+25, 5,5)
rect(x+10,y+25, 5,5)
rect(x+20,y+25, 5,5)
rect(x+30,y+25, 5,5)

//rij 7
rect(x+10,y+30, 5,5)
rect(x+20,y+30, 5,5)

//rij 8
rect(x+10,y+35, 5,5)
rect(x+20,y+35, 5,5)

fill("white")
rect(x+10,y+5, 5,5)
rect(x+20,y+5, 5,5)
  
fill("red") 
rect(x+15,y+10, 5,5)
};
 
var tekenGijand = function(x, y) {
//rij 1
fill("green")
rect(x,y, 5,5)
rect(x+10,y, 5,5)
rect(x+15,y, 5,5)
rect(x+20,y, 5,5)
rect(x+30,y, 5,5)

//rij 2
rect(x+5,y+5, 5,5)
rect(x+25,y+5, 5,5)
rect(x+15,y+5, 5,5)

//rij 3
rect(x+10,y+10, 5,5)
rect(x+20,y+10, 5,5)

//rij 4
rect(x+10,y+15, 5,5)
rect(x+5,y+15, 5,5)
rect(x+15,y+15, 5,5)
rect(x+20,y+15, 5,5)
rect(x+25,y+15, 5,5)

//rij 5
rect(x,y+20, 5,5)
rect(x+15,y+20, 5,5)
rect(x+30,y+20, 5,5)

//rij 6
rect(x,y+25, 5,5)
rect(x+10,y+25, 5,5)
rect(x+20,y+25, 5,5)
rect(x+30,y+25, 5,5)

//rij 7
rect(x+10,y+30, 5,5)
rect(x+20,y+30, 5,5)

//rij 8
rect(x+10,y+35, 5,5)
rect(x+20,y+35, 5,5)

fill("white")
rect(x+10,y+5, 5,5)
rect(x+20,y+5, 5,5)
  
fill("red") 
rect(x+15,y+10, 5,5)
};

 var tekenVijand = function(x, y) {
    
//rij 1
fill("orange")
rect(x,y, 5,5)
rect(x+10,y, 5,5)
rect(x+15,y, 5,5)
rect(x+20,y, 5,5)
rect(x+30,y, 5,5)

//rij 2
rect(x+5,y+5, 5,5)
rect(x+25,y+5, 5,5)
rect(x+15,y+5, 5,5)

//rij 3
rect(x+10,y+10, 5,5)
rect(x+20,y+10, 5,5)

//rij 4
rect(x+10,y+15, 5,5)
rect(x+5,y+15, 5,5)
rect(x+15,y+15, 5,5)
rect(x+20,y+15, 5,5)
rect(x+25,y+15, 5,5)

//rij 5
rect(x,y+20, 5,5)
rect(x+15,y+20, 5,5)
rect(x+30,y+20, 5,5)

//rij 6
rect(x,y+25, 5,5)
rect(x+10,y+25, 5,5)
rect(x+20,y+25, 5,5)
rect(x+30,y+25, 5,5)

//rij 7
rect(x+10,y+30, 5,5)
rect(x+20,y+30, 5,5)

//rij 8
rect(x+10,y+35, 5,5)
rect(x+20,y+35, 5,5)

fill("white")
rect(x+10,y+5, 5,5)
rect(x+20,y+5, 5,5)
  
fill("red") 
rect(x+15,y+10, 5,5)
};
 

var tekenDijand = function(x, y) {
//rij 1
fill("red")
rect(x,y, 5,5)
rect(x+10,y, 5,5)
rect(x+15,y, 5,5)
rect(x+20,y, 5,5)
rect(x+30,y, 5,5)

//rij 2
rect(x+5,y+5, 5,5)
rect(x+25,y+5, 5,5)
rect(x+15,y+5, 5,5)

//rij 3
rect(x+10,y+10, 5,5)
rect(x+20,y+10, 5,5)

//rij 4
rect(x+10,y+15, 5,5)
rect(x+5,y+15, 5,5)
rect(x+15,y+15, 5,5)
rect(x+20,y+15, 5,5)
rect(x+25,y+15, 5,5)

//rij 5
rect(x,y+20, 5,5)
rect(x+15,y+20, 5,5)
rect(x+30,y+20, 5,5)

//rij 6
rect(x,y+25, 5,5)
rect(x+10,y+25, 5,5)
rect(x+20,y+25, 5,5)
rect(x+30,y+25, 5,5)

//rij 7
rect(x+10,y+30, 5,5)
rect(x+20,y+30, 5,5)

//rij 8
rect(x+10,y+35, 5,5)
rect(x+20,y+35, 5,5)

fill("white")
rect(x+10,y+5, 5,5)
rect(x+20,y+5, 5,5)
  
fill("red") 
rect(x+15,y+10, 5,5)
};
 var tekenVijand = function(x, y) {
    
//rij 1
fill("orange")
rect(x,y, 5,5)
rect(x+10,y, 5,5)
rect(x+15,y, 5,5)
rect(x+20,y, 5,5)
rect(x+30,y, 5,5)

//rij 2
rect(x+5,y+5, 5,5)
rect(x+25,y+5, 5,5)
rect(x+15,y+5, 5,5)

//rij 3
rect(x+10,y+10, 5,5)
rect(x+20,y+10, 5,5)

//rij 4
rect(x+10,y+15, 5,5)
rect(x+5,y+15, 5,5)
rect(x+15,y+15, 5,5)
rect(x+20,y+15, 5,5)
rect(x+25,y+15, 5,5)

//rij 5
rect(x,y+20, 5,5)
rect(x+15,y+20, 5,5)
rect(x+30,y+20, 5,5)

//rij 6
rect(x,y+25, 5,5)
rect(x+10,y+25, 5,5)
rect(x+20,y+25, 5,5)
rect(x+30,y+25, 5,5)

//rij 7
rect(x+10,y+30, 5,5)
rect(x+20,y+30, 5,5)

//rij 8
rect(x+10,y+35, 5,5)
rect(x+20,y+35, 5,5)

fill("white")
rect(x+10,y+5, 5,5)
rect(x+20,y+5, 5,5)
  
fill("red") 
rect(x+15,y+10, 5,5)
};
 

var tekenDijand = function(x, y) {
//rij 1
fill("red")
rect(x,y, 5,5)
rect(x+10,y, 5,5)
rect(x+15,y, 5,5)
rect(x+20,y, 5,5)
rect(x+30,y, 5,5)

//rij 2
rect(x+5,y+5, 5,5)
rect(x+25,y+5, 5,5)
rect(x+15,y+5, 5,5)

//rij 3
rect(x+10,y+10, 5,5)
rect(x+20,y+10, 5,5)

//rij 4
rect(x+10,y+15, 5,5)
rect(x+5,y+15, 5,5)
rect(x+15,y+15, 5,5)
rect(x+20,y+15, 5,5)
rect(x+25,y+15, 5,5)

//rij 5
rect(x,y+20, 5,5)
rect(x+15,y+20, 5,5)
rect(x+30,y+20, 5,5)

//rij 6
rect(x,y+25, 5,5)
rect(x+10,y+25, 5,5)
rect(x+20,y+25, 5,5)
rect(x+30,y+25, 5,5)

//rij 7
rect(x+10,y+30, 5,5)
rect(x+20,y+30, 5,5)

//rij 8
rect(x+10,y+35, 5,5)
rect(x+20,y+35, 5,5)

fill("white")
rect(x+10,y+5, 5,5)
rect(x+20,y+5, 5,5)
  
fill("red") 
rect(x+15,y+10, 5,5)
};
 var tekenVijand = function(x, y) {
    
//rij 1
fill("orange")
rect(x,y, 5,5)
rect(x+10,y, 5,5)
rect(x+15,y, 5,5)
rect(x+20,y, 5,5)
rect(x+30,y, 5,5)

//rij 2
rect(x+5,y+5, 5,5)
rect(x+25,y+5, 5,5)
rect(x+15,y+5, 5,5)

//rij 3
rect(x+10,y+10, 5,5)
rect(x+20,y+10, 5,5)

//rij 4
rect(x+10,y+15, 5,5)
rect(x+5,y+15, 5,5)
rect(x+15,y+15, 5,5)
rect(x+20,y+15, 5,5)
rect(x+25,y+15, 5,5)

//rij 5
rect(x,y+20, 5,5)
rect(x+15,y+20, 5,5)
rect(x+30,y+20, 5,5)

//rij 6
rect(x,y+25, 5,5)
rect(x+10,y+25, 5,5)
rect(x+20,y+25, 5,5)
rect(x+30,y+25, 5,5)

//rij 7
rect(x+10,y+30, 5,5)
rect(x+20,y+30, 5,5)

//rij 8
rect(x+10,y+35, 5,5)
rect(x+20,y+35, 5,5)

fill("white")
rect(x+10,y+5, 5,5)
rect(x+20,y+5, 5,5)
  
fill("red") 
rect(x+15,y+10, 5,5)
};
 

var tekenMonster1 = function(x, y) {
//rij 1
fill("white")
rect(x,y, 5,5)
rect(x+10,y, 5,5)
rect(x+15,y, 5,5)
rect(x+20,y, 5,5)
rect(x+30,y, 5,5)

//rij 2
rect(x+5,y+5, 5,5)
rect(x+25,y+5, 5,5)
rect(x+15,y+5, 5,5)

//rij 3
rect(x+10,y+10, 5,5)
rect(x+20,y+10, 5,5)

//rij 4
rect(x+10,y+15, 5,5)
rect(x+5,y+15, 5,5)
rect(x+15,y+15, 5,5)
rect(x+20,y+15, 5,5)
rect(x+25,y+15, 5,5)

//rij 5
rect(x,y+20, 5,5)
rect(x+15,y+20, 5,5)
rect(x+30,y+20, 5,5)

//rij 6
rect(x,y+25, 5,5)
rect(x+10,y+25, 5,5)
rect(x+20,y+25, 5,5)
rect(x+30,y+25, 5,5)

//rij 7
rect(x+10,y+30, 5,5)
rect(x+20,y+30, 5,5)

//rij 8
rect(x+10,y+35, 5,5)
rect(x+20,y+35, 5,5)

fill("white")
rect(x+10,y+5, 5,5)
rect(x+20,y+5, 5,5)
  
fill("red") 
rect(x+15,y+10, 5,5)
};
 var tekenMonster2= function(x, y) {
    
//rij 1
fill("orange")
rect(x,y, 5,5)
rect(x+10,y, 5,5)
rect(x+15,y, 5,5)
rect(x+20,y, 5,5)
rect(x+30,y, 5,5)

//rij 2
rect(x+5,y+5, 5,5)
rect(x+25,y+5, 5,5)
rect(x+15,y+5, 5,5)

//rij 3
rect(x+10,y+10, 5,5)
rect(x+20,y+10, 5,5)

//rij 4
rect(x+10,y+15, 5,5)
rect(x+5,y+15, 5,5)
rect(x+15,y+15, 5,5)
rect(x+20,y+15, 5,5)
rect(x+25,y+15, 5,5)

//rij 5
rect(x,y+20, 5,5)
rect(x+15,y+20, 5,5)
rect(x+30,y+20, 5,5)

//rij 6
rect(x,y+25, 5,5)
rect(x+10,y+25, 5,5)
rect(x+20,y+25, 5,5)
rect(x+30,y+25, 5,5)

//rij 7
rect(x+10,y+30, 5,5)
rect(x+20,y+30, 5,5)

//rij 8
rect(x+10,y+35, 5,5)
rect(x+20,y+35, 5,5)

fill("white")
rect(x+10,y+5, 5,5)
rect(x+20,y+5, 5,5)
  
fill("red") 
rect(x+15,y+10, 5,5)
};
 

var tekenMonster3 = function(x, y) {
//rij 1
fill("yellow")
rect(x,y, 5,5)
rect(x+10,y, 5,5)
rect(x+15,y, 5,5)
rect(x+20,y, 5,5)
rect(x+30,y, 5,5)

//rij 2
rect(x+5,y+5, 5,5)
rect(x+25,y+5, 5,5)
rect(x+15,y+5, 5,5)

//rij 3
rect(x+10,y+10, 5,5)
rect(x+20,y+10, 5,5)

//rij 4
rect(x+10,y+15, 5,5)
rect(x+5,y+15, 5,5)
rect(x+15,y+15, 5,5)
rect(x+20,y+15, 5,5)
rect(x+25,y+15, 5,5)

//rij 5
rect(x,y+20, 5,5)
rect(x+15,y+20, 5,5)
rect(x+30,y+20, 5,5)

//rij 6
rect(x,y+25, 5,5)
rect(x+10,y+25, 5,5)
rect(x+20,y+25, 5,5)
rect(x+30,y+25, 5,5)

//rij 7
rect(x+10,y+30, 5,5)
rect(x+20,y+30, 5,5)

//rij 8
rect(x+10,y+35, 5,5)
rect(x+20,y+35, 5,5)

fill("white")
rect(x+10,y+5, 5,5)
rect(x+20,y+5, 5,5)
  
fill("red") 
rect(x+15,y+10, 5,5)
};
 var tekenMonster4 = function(x, y) {
    
//rij 1
fill("blue")
rect(x,y, 5,5)
rect(x+10,y, 5,5)
rect(x+15,y, 5,5)
rect(x+20,y, 5,5)
rect(x+30,y, 5,5)

//rij 2
rect(x+5,y+5, 5,5)
rect(x+25,y+5, 5,5)
rect(x+15,y+5, 5,5)

//rij 3
rect(x+10,y+10, 5,5)
rect(x+20,y+10, 5,5)

//rij 4
rect(x+10,y+15, 5,5)
rect(x+5,y+15, 5,5)
rect(x+15,y+15, 5,5)
rect(x+20,y+15, 5,5)
rect(x+25,y+15, 5,5)

//rij 5
rect(x,y+20, 5,5)
rect(x+15,y+20, 5,5)
rect(x+30,y+20, 5,5)

//rij 6
rect(x,y+25, 5,5)
rect(x+10,y+25, 5,5)
rect(x+20,y+25, 5,5)
rect(x+30,y+25, 5,5)

//rij 7
rect(x+10,y+30, 5,5)
rect(x+20,y+30, 5,5)

//rij 8
rect(x+10,y+35, 5,5)
rect(x+20,y+35, 5,5)

fill("white")
rect(x+10,y+5, 5,5)
rect(x+20,y+5, 5,5)
  
fill("red") 
rect(x+15,y+10, 5,5)
};
 

var tekenMonster5 = function(x, y) {
//rij 1
fill("red")
rect(x,y, 5,5)
rect(x+10,y, 5,5)
rect(x+15,y, 5,5)
rect(x+20,y, 5,5)
rect(x+30,y, 5,5)

//rij 2
rect(x+5,y+5, 5,5)
rect(x+25,y+5, 5,5)
rect(x+15,y+5, 5,5)

//rij 3
rect(x+10,y+10, 5,5)
rect(x+20,y+10, 5,5)

//rij 4
rect(x+10,y+15, 5,5)
rect(x+5,y+15, 5,5)
rect(x+15,y+15, 5,5)
rect(x+20,y+15, 5,5)
rect(x+25,y+15, 5,5)

//rij 5
rect(x,y+20, 5,5)
rect(x+15,y+20, 5,5)
rect(x+30,y+20, 5,5)

//rij 6
rect(x,y+25, 5,5)
rect(x+10,y+25, 5,5)
rect(x+20,y+25, 5,5)
rect(x+30,y+25, 5,5)

//rij 7
rect(x+10,y+30, 5,5)
rect(x+20,y+30, 5,5)

//rij 8
rect(x+10,y+35, 5,5)
rect(x+20,y+35, 5,5)

fill("white")
rect(x+10,y+5, 5,5)
rect(x+20,y+5, 5,5)
  
fill("red") 
rect(x+15,y+10, 5,5)
};
 


  
 




/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenKogel = function(x, y) {
  fill("lightgreen");
  rect(x + 55,y - 45,8,25);


};




/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenSpeler = function(x, y) {//rij 1
fill("white");
rect(x+20,y-5,80,25);
rect(x+39,y-24,38,20);
}





/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var beweegVijand = function() {
  vijandX = vijandX +random(10);
 vijandY= vijandY +random(1);
 if(vijandY>610){vijandY=150;}
if (vijandX>1220){ vijandX=50;}
if (vijandX<50){vijandX=1220;}

};    

var beweegDijand = function() {
   dijandX = veiandX + random(+8);
    dijandX = dijandX +random(10);
 dijandY= dijandY +random(1);
  if(dijandY>610){dijandY=150;}
if (dijandX>1220){ dijandX=50;}
if (dijandX<50){dijandX=1220;}
}; 



var beweegVeiand = function() {
   veiandX = veiandX + random(5)
    veiandX = veiandX +random(10);
 veiandY= veiandY +random(1);
 if(veiandY>610){veiandY=150;}
if (veiandX>1220){ veiandX=50;}
if (veiandX<50){veiandX=1220;}
}; 

;


var beweegGijand = function() {
   gijandX = gijandX + random(5)
    gijandX = gijandX +random(10);
 gijandY= gijandY +random(1);
  if(gijandY>610){gijandY=150;}
if (gijandX>1220){ gijandX=50;}
if (gijandX<50){gijandX=1220;}
}; 



var beweegMonster1 = function() {
  monster1X = monster1X + random(10);
  monster1Y= monster1Y+random(1);
  if(monster1Y>610){monster1Y=150;}
if (monster1X>1220){ monster1X=50;}
if (monster1X<50){monster1X=1220;}


}; 

var beweegMonster2 = function() {
 monster2X = monster2X + random(5)
  monster1Y= monster1Y+random(1);
  if(monster2Y>610){monster2Y=150;}
if (monster2X>1220){ monster2X=50;}
if (monster2X<50){monster2X=1220;}
}; 

 var beweegMonster3 = function() {
  monster3X = monster3X + random(5)
   monster3Y= monster3Y+random(1);
  if(monster3Y>610){monster3Y=150;}
if (monster3X>1220){ monster3X=50;}
if (monster3X<50){monster3X=1220;}
}; 
 var beweegMonster4 = function() {
  monster4X = monster4X + random(5)
   monster4Y= monster4Y+random(1);
  if(monster4Y>610){monster4Y=150;}
if (monster4X>1220){ monster4X=50;}
if (monster4X<50){monster4X=1220;}
}; 

 var beweegMonster5 = function() {
 monster5X = monster5X + random(5)
  monster5Y= monster5Y+random(1);
  if(monster5Y>610){monster5Y=150;}
if (monster5X>1220){ monster5X=50;}
if (monster5X<50){monster5X=1220;}
}; 


/**
 * Updatet globale variabelen met positie van kogel of bal
 */
var beweegKogel = function() {
  for (var i = 0; i < kogelsY.length; i++) {
        kogelsY[i] = kogelsY[i] - 5;
      };


if (afkoeltimer <= 0 ) {

 if(keyIsDown(KEY_SPACE)) {
 kogelsX.push(spelerX);
  kogelsY.push(spelerY);
 afkoeltimer = AFKOELTIMERSTART;
 }
}
afkoeltimer=afkoeltimer -1;
};






/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */
var beweegSpeler = function() {
  if (keyIsDown(65)) {
    spelerX = spelerX - 5;
  }
  if (keyIsDown(68)) {
    spelerX = spelerX + 5;
    }
    

 if (spelerX <10) {
      spelerX = 10;}
    
     
    if (spelerX > 1155) {
      spelerX = 1155;}
    

};




/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkVijandGeraakt = function() {
 for(var i = 0; i < kogelsX.length; i++) {
    if (kogelsX[i] > vijandX &&
    kogelsX[i] < vijandX + 37 &&
    kogelsY[i] > vijandY - 20 &&
    kogelsY[i] < vijandY + 50 )

     {  score1X=score1X+1;
      console.log ("vijandgeraakt!!");
      return true
     
       }
  }

 for(var i = 0; i < kogelsX.length; i++) {
    if (kogelsX[i] > veiandX &&
    kogelsX[i] < veiandX + 37 &&
    kogelsY[i] > veiandY - 20 &&
    kogelsY[i] < veiandY + 50 )

     {
        score1X=score1X+1;
      console.log ("veiandgeraakt!!");
      return true
       }
  }

for(var i = 0; i < kogelsX.length; i++) {
    if (kogelsX[i] > dijandX &&
    kogelsX[i] < dijandX + 37 &&
    kogelsY[i] > dijandY - 20 &&
    kogelsY[i] < dijandY + 50 )

     {
         score1X=score1X+1;
      console.log ("dijandgeraakt!!");
      return true
       }
  }


for(var i = 0; i < kogelsX.length; i++) {
    if (kogelsX[i] > gijandX &&
    kogelsX[i] < gijandX + 37 &&
    kogelsY[i] > gijandY - 20 &&
    kogelsY[i] < gijandY + 50 )

     {
       
      console.log ("gijandgeraakt!!");
       score1X=score1X+1;
      return true
       }
  }


for(var i = 0; i < kogelsX.length; i++) {
    if (kogelsX[i] > monster1X &&
    kogelsX[i] < monster1X + 37 &&
    kogelsY[i] > monster1Y - 20 &&
    kogelsY[i] < monster1Y + 50 )

     {
       
      console.log ("monster1geraakt!!");
      score1X=score1X+1;
      return true
       }
  }
for(var i = 0; i < kogelsX.length; i++) {
    if (kogelsX[i] > monster2X &&
    kogelsX[i] < monster2X + 37 &&
    kogelsY[i] > monster2Y - 20 &&
    kogelsY[i] < monster2Y + 50 )

     {
     
      console.log ("monster2geraakt!!");
       score1X=score1X+1;
      return true
       }
  }
for(var i = 0; i < kogelsX.length; i++) {
    if (kogelsX[i] > monster3X &&
    kogelsX[i] < monster3X + 37 &&
    kogelsY[i] > monster3Y - 20 &&
    kogelsY[i] < monster3Y + 50 )

     {
      
      console.log ("monster3geraakt!!");
       score1X=score1X+1;
      return true
       }
  }


  for(var i = 0; i < kogelsX.length; i++) {
    if (kogelsX[i] > monster4X &&
    kogelsX[i] < monster4X + 37 &&
    kogelsY[i] > monster4Y - 20 &&
    kogelsY[i] < monster4Y + 50 )

     {
       
      console.log ("monster4geraakt!!");
       score1X=score1X+1;
      return true
       }
  }



  for(var i = 0; i < kogelsX.length; i++) {
    if (kogelsX[i] > monster5X &&
    kogelsX[i] < monster5X + 37 &&
    kogelsY[i] > monster5Y - 20 &&
    kogelsY[i] < monster5Y + 50 )

     {
      console.log ("monster5geraakt!!");
       score1X=score1X+1;
      return true
       }
      
  }



    
  return false;
};


/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkSpelerGeraakt = function() {

  

    
  



    
  
  return false;
};
    



/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {
  

     if (score1X >=  400) {
       textSize(100);
    fill("white")
    text("GAMEOVER",380,400)
    textSize(50);
    fill("lightgreen")
    text("player 1 WIN!",480,480)
    return true; spelStatus=GAMEOVER;

  } else {
    return false;
  }
};
  
  
   
  
 


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('white');
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case SPELEN:
      beweegVijand();
      beweegKogel();
      beweegSpeler();
      
      beweegVijand();
      beweegDijand();
      beweegVeiand(); beweegGijand();
 beweegMonster1(); beweegMonster2(); beweegMonster3(); beweegMonster4(); beweegMonster5();
      
      
      
      if (checkVijandGeraakt()) {
        // punten erbij
        // nieuwe vijand maken
      }
      
      if (checkSpelerGeraakt()) {
        // leven eraf of gezondheid verlagen
        // eventueel: nieuwe speler maken
      }

      tekenVeld();
      tekenVijand(vijandX, vijandY);
tekenDijand(dijandX, dijandY);
      tekenVeiand(veiandX, veiandY);
      tekenGijand(gijandX, gijandY);
 tekenMonster1(monster1X,monster1Y);
 tekenMonster2(monster2X,monster2Y);
tekenMonster3(monster3X,monster3Y);
 tekenMonster4(monster4X,monster4Y);
 tekenMonster5,(monster5X,monster5Y);
      for (var i = 0; i < kogelsX.length; i++) {
        tekenKogel(kogelsX[i],kogelsY[i])
      };
     textSize(30)
    text("Score: " + score1X, 90, 100, 700, 700);
      tekenSpeler(spelerX, spelerY);

    
      

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;


      
  }
}
