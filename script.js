/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

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

var spelerX = 800; // x-positie van speler
var spelerY = 580; // y-positie van speler

var kogelX = 0;    // x-positie van kogel
var kogelY = 0;    // y-positie van kogel

var vijandX = 350;   // x-positie van vijand
var vijandY = 350;   // y-positie van vijand

var dijandX = 500;   // x-positie van vijand
var dijandY = 400;   // y-positie van vijand

var veiandX = 850;   // x-positie van vijand
var veiandY = 200;   // y-positie van vijand

var gijandX = 80;   // x-positie van vijand
var gijandY = 500;  // y-positie van vijand
             
var monster1X=550; // x-positie van vijand
var monster1Y=350 // y-positie van vijand

var monster2X=500; // x-positie van vijand
var monster2Y=400 // y-positie van vijand

var monster3X=850; // x-positie van vijand
var monster3Y=250 // y-positie van vijand

var monster4X=80; // x-positie van vijand
var monster4Y=550 // y-positie van vijand

var monster5X=80; // x-positie van vijand
var monster5Y=570  // y-positie van vijand
                  
var score = 0; // aantal behaalde punten





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
 var tekenMonster4 = function(x, y) {
    
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
 

};

/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenKogel = function(x, y) {
  

};

/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenSpeler = function(x, y) {
  
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

fill("green")
rect(x+10,y+5, 5,5)
rect(x+20,y+5, 5,5)
  
fill("green") 
rect(x+15,y+10, 5,5)



 
};


/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var beweegVijand = function() {

vijandX = vijandX + random(10) + random(-1)

};    

var beweegDijand = function() {
 
dijandX = dijandX + random(10) + random(-1)

}; 

var beweegVeiand = function() {
 
veiandX = veiandX + random(10) + random(-1)

}; 


var beweegGijand = function() {
 
gijandX = gijandX + random(10) + random(-1)

}; 


var beweegGijand = function() {
 
gijandX = gijandX + random(10) + random(-1)

}; 

var beweegGijand = function() {
 
gijandX = gijandX + random(10) + random(-1)

}; 

var beweegGijand = function() {
 
gijandX = gijandX + random(10) + random(-1)

}; 
var beweegMonster = function() {
 
monsterX = gijandX + random(10) + random(-1)

}; 

var beweegGijand = function() {
 
gijandX = gijandX + random(10) + random(-1)

}; 


/**
 * Updatet globale variabelen met positie van kogel of bal
 */
var beweegKogel = function() { }

 // position of the ball

// how far the ball moves every time


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
    

 if (spelerX <50) {
      spelerX = 50;}
    
     
    if (spelerX > 1220) {
      spelerX = 1220;}
    

};


/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkVijandGeraakt = function() {

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
    
  return false;
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
  background("white");
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
      beweegDijand();
      beweegVeiand(); beweegGijand();
      beweegKogel();
      beweegSpeler();
      
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









      tekenKogel(kogelX, kogelY);
      tekenSpeler(spelerX, spelerY);
      
      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
  }
}