var game = new Phaser.Game(800, 700, Phaser.CANVAS, 'gameDiv'); //{ preload: preload, create: create, update: update, render: render });

var sprite;
var cursors;
var tilesprite;

var instructions;
var aitext;
var aiback;

var d = false; //whether the player is dead to control the explosion animation x and y position
var end = false;

//weapon variables
var bullets;
var bulletTime = 0;
var wdp = 1; //player ship deals wdp damage, enemy deals wdp/2 damage

//enemy variables
var enemies =[];
var enemyg;
var enemyBullets;
var enemiesTotal = 0;
var enemiesAlive = 0;
var SilEnemies = 10;
var AAEnemies = 5;
var VicEnemies = 15;
var explosions;

//variables for the story
var QosB = false;

var system = "Silesia";

var gMap; //galaxy map
var hyperspace; //map background
var GMG; //map group
var SButton; //silesia button
var AButton; //azizos button
var VButton; //vichama button
var gMS;

var shieldback; //shield background sprite

var playerX = 4105; //player starting x and y position
var playerY = 1115;

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

//objective for AA and Vichama
var Aobjx = -2500;
var Aobjy = 475;
var AAarrow;

var Vobjx = -1950;
var Vobjy = -1950;
var Vicarrow;

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
game.state.add('opening', openState);
game.state.add('play', playState);
game.state.add('die', dieState);
game.state.add('end', endState);

game.state.start('boot');