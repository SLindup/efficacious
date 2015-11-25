var game = new Phaser.Game(800, 700, Phaser.CANVAS, 'gameDiv'); //{ preload: preload, create: create, update: update, render: render });

var sprite;
var cursors;
var tilesprite;

var shieldback;

var playerX = 875;
var playerY = 925;

//armour
var armour;
var armour2;
var armour3;
var armour4;
var armour5;

//shield
var shieldbar;
var shieldTotal = 100;
var shield = shieldTotal;
var shieldtimer;
var health = 50;
var rechargeTime = 2000;

//items
var planet;
var sun;
var planet2;

//objective
var arrow;
var walls;
var wall;
var wall2;
var wall3;
var wall4;

//shield timers
var discharge;
var retimer;

//hud text
var statusback;
var statusText;

var point;
var objx = 3995; //objective arrow x and y coords
var objy = 1035;

var mkey;
var map;

var pausedText;
var pText2;
var pkey;

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('die', dieState);

game.state.start('boot');