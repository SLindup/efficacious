var game = new Phaser.Game(800, 700, Phaser.CANVAS, 'gameDiv'); //{ preload: preload, create: create, update: update, render: render });

var sprite;
var cursors;
var tilesprite;

//weapon variables
var bullets;
var bulletTime = 0;

//enemy variables
var enemies;
var enemyBullets;
var enemiesTotal = 0;
var enemiesAlive = 0;

var system = "Vichama";

var gMap;
var hyperspace;
var GMG;
var SButton;
var AButton;
var VButton;

var shieldback;

var playerX = 300;
var playerY = -421;

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

//silesia
var silesia;
var planet;
var sun;
var planet2;

//ArsuAzizos
var AA;
var AAtilesprite;
var arsu;
var azizos;
var qos;
var moloch;
var martu;
var ashratu;
var AAmap;
var AAmG;

var AAmD;
var ArsuM;
var AzizosM;
var QosM;
var MolochM;
var MartuM;
var AshratuM;

var AAarrow;

//Vichama
var vichama;
var Vtilesprite;
var vSun;
var kon;
var supay;
var vMap;
var VmG;

var VmD;
var VmKon;
var VmSupay;
var VmVichana;

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

var here;

var mkey;
var SilesiaMap;
var map;
var mText;
var mDesc;
var mDesc2;
var mDescS;

var pausedText;
var pText2;
var pkey;

var jkey;

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('die', dieState);

game.state.start('boot');