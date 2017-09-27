document.addEventListener('DOMContentLoaded', function(){
	DomManager.init();
	Game.init();
});

window.addEventListener('hashchange', function(){
	var scene = window.location.hash.replace("#", "");

	if( scene ){
		Game.exitScene(scene);
	}
});

var btns = document.querySelectorAll('.js-janken-btn');

btns.forEach( function(btn){
	btn.addEventListener('click', Game.popupEvent.bind( Game ));
});