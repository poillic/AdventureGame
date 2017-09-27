//Objet game qui va contenir toute l'application
var Game = {
	sceneId : 0,
	scene : {},
	player : {
		maxPv : 5,
		pv : 5,
		atk : 2,
		atkBonus : 0
	},
	currentEnnemy : {},
	jenkanTable : {
		"rock" : { win: "paper", lose: "scissors" },
		"paper" : { win: "scissors", lose: "rock" },
		"scissors" : { win: "rock", lose: "paper" }
	}
};

/*==========================================
 Initialisation
==========================================*/
Game.init = function(){
	DomManager.setHash( "" );
	DomManager.refreshUI( this.player );
	this.initPlayer();
	this.loadScene(0);
}

Game.initPlayer = function(){
	this.player.pv = this.player.maxPv;
	this.player.atkBonus = 0;
}

/*==========================================
 Methodes relatives a la gestion des scenes
==========================================*/
Game.loadScene = function ( sceneId ){
	this.sceneId = sceneId;
	this.scene = data[ sceneId ];

	DomManager.removeUselessDOM();
	DomManager.createImg( this.scene.illustration );
	DomManager.displayText( this.scene, this.onEnterScene.bind( this ) );
};
Game.onEnterScene = function(){
	this.scene.onEnter.call(this, this.player);
	DomManager.refreshUI( this.player );
}

Game.onExitScene = function(){
	this.scene.onExit.call(this, this.player);
	DomManager.refreshUI( this.player );
}

Game.exitScene = function( nextScene ){
	this.onExitScene();
	this.loadScene( nextScene );
}

/*==========================================
 Combat
==========================================*/
Game.fight = function( ennemy ){
	console.log( "Le combat commence" );
	this.currentEnnemy = ennemy;
	DomManager.fightUI('show');
	DomManager.updatePopup(  this.currentEnnemy, "Le combat commence !" );
}

Game.rollDice = function(min, max){
	return Math.random() * (max - min) + min;
}

Game.jankenpon = function( playerHit ){
	var choice = [ "scissors", "rock", "paper" ];
	var ennemyChoice = Math.floor( this.rollDice( 0, 3 ) );
	var ennemyHit = choice[ ennemyChoice ];

	var caption = "Vous attaquez avec " + playerHit + " et votre adversaire avec " + ennemyHit +". ";
	var dmg = 0;


	if( this.jenkanTable[playerHit].lose == ennemyHit ){
		//WIN
		dmg = Math.ceil(this.rollDice( 1, this.player.atk )) + this.player.atkBonus;
		this.currentEnnemy.pv -= dmg;
		caption += "Vous touchez votre adversaire et lui infligez " + dmg + " points de dégâts.";
	}else if( this.jenkanTable[playerHit].win == ennemyHit ){
		//LOSE
		dmg = Math.floor(this.rollDice( 1, this.currentEnnemy.atk )) + this.currentEnnemy.atkBonus;
		this.player.pv -= dmg;
		caption += "Votre adversaire vous touche ! Vous perdez " + dmg + " points de vie.";
		DomManager.refreshUI( this.player );
	}else{
		//DRAW
		caption += "Vous et votre adversaire êtes aux prises mais aucun ne se départage.";
	}

	if( this.player.pv <= 0 ){
		DomManager.fightUI('hide');
		this.exitScene( this.currentEnnemy.loseScene );
		this.player.pv = 0;
	}else if( this.currentEnnemy.pv <= 0){
		DomManager.fightUI('hide');
		this.exitScene( this.currentEnnemy.winScene );
	}else{
		DomManager.updatePopup( this.currentEnnemy, caption );
	}
}

Game.popupEvent = function(e){
	this.jankenpon( e.target.dataset.value );
}