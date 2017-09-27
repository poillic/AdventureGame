var DomManager = {
	ui : {	
	},
	init: function(){
		this.ui.img = document.querySelector('.js-img');
		this.ui.links = document.querySelector('.js-links');
		this.ui.p = document.querySelector('.js-story');
		this.ui.title = document.querySelector('.js-title');
		this.ui.atk = document.querySelector('.js-atk');
		this.ui.pv = document.querySelector('.js-pv');
		this.ui.popup = document.querySelector('.js-janken');
		this.ui.overlay = document.querySelector('.js-overlay');
	},
	createLink : function ( links ){
		for( let i = 0; i < links.length; i++ ){
			let link = links[i];
			let a = document.createElement('a');
			a.textContent = link.caption;
			a.href = "#" + link.page;
			this.ui.links.append( a );
		}
	},
	createImg : function( src ){
		this.ui.img.src = src;
	},
	displayText : function ( scene, callback ){
		var i = 0;

		this.ui.title.textContent = scene.title;
		this.ui.p.innerHTML = "";

		function letter(){
			if( i < scene.text.length ){
				this.ui.p.innerHTML += scene.text[i];
				i++;
			}else{
				clearInterval( interval );
				this.createLink( scene.links );
				callback();
			}
		}

		var interval = setInterval( letter.bind(this), 25 );
	},
	refreshUI : function( player ){
		this.ui.pv.textContent = player.pv + " / " + player.maxPv;
		this.ui.atk.textContent = player.atk + " + " + player.atkBonus;
	},
	removeUselessDOM : function(){
		this.ui.links.innerHTML = "";
	},
	updatePopup : function( ennemy, caption,  ){
		this.ui.popup.querySelector('h2').textContent = ennemy.name;
		this.ui.popup.querySelector('.js-fight-info').textContent = caption;
		this.ui.popup.querySelector('p span').textContent = ennemy.pv;
	},
	fightUI : function( state ){
		if( state == "show"){
			this.ui.popup.classList.remove('hide');
			this.ui.overlay.classList.remove('hide');
		}else if( state == "hide"){
			this.ui.popup.classList.add('hide');
			this.ui.overlay.classList.add('hide');
		}
	},
	setHash : function( hash ){
		window.location.hash = hash;
	}
};