var data = [
	{
		text : "Une violente migraine vous tire de votre sommeil. Vous ouvrez les yeux dans un lit de paille peu confortable. Les cendres encore fumantes de la cheminée vous indique que la matinée doit être bien entamée. Le crâne toujours résonnant vous mettez un premier pied au sol afin de visiter la pièce.",
		title : "L'éveil",
		illustration : "http://lorempixel.com/900/400/",
		links: [
			{
				caption : 'Fouiller la maison',
				page : 1
			},
			{
				caption : 'Sortir de le maison',
				page : 2
			}
		],
		onEnter : function(player){this.initPlayer(); },
		onExit : function(player){}
	},
	{ // 1
		text : "La maison est petite, vous apercevez d'un coup d'oeil que vous ne trouverez rien de valeur.",
		title : "La maison",
		illustration : "http://lorempixel.com/900/400/",
		links: [
			{
				caption : 'Sortir de la maison',
				page : 2
			}
		],
		onEnter : function(player){},
		onExit : function(player){}
	},
	{ // 2
		text : "En ouvrant la porte vous êtes ébloui par le soleil, alors que vos yeux s'adapte à cette luminosité vous en profitez pour vous laissez réchauffer par la chaleur des premiers soleil printanier. Au loin un vieil homme vous fais un signe de main et vous interpelle.",
		title : "Le printemps est là",
		illustration : "http://lorempixel.com/900/400/",
		links: [
			{
				caption : "Avancez vers l'homme",
				page : 3
			},
			{
				caption : 'Aller dans la direction opposée',
				page : 4
			}
		],
		onEnter : function(player){},
		onExit : function(player){}
	},
	{ // 3
		text : "L'homme : \"Tu es enfin réveillé, ça fait plaisir à voir. Je ne pensais que tu t'en remettrais aussi vite.\"",
		title : "Souvenirs",
		illustration : "http://lorempixel.com/900/400/",
		links: [
			{
				caption : "Que m'est-il arrivé ?",
				page : 5
			}
		],
		onEnter : function(player){},
		onExit : function(player){}
	},
	{ // 4
		text : "Pendant que l'homme arrive vers vous, vous profitez d'un moment d'inattention pour vous dissimuler derrière la maison. Il n'y a rien de passionnant, un chat dort sur une pierre ensoleillée. Une hache est plantée dans le billot dédié à découper les bûches.",
		title : "Esquive",
		illustration : "http://lorempixel.com/900/400/",
		links: [
			{
				caption : 'Retourner voir l\'homme',
				page : 5
			}
		],
		onEnter : function(player){ },
		onExit : function(player){}
	},
	{ // 5
		text : "L'homme : \"Je t'ai retrouvé il y'a trois jours sur le bord de la route entre Blancsouche et Fort Tran. Je ne sais pas à quel endroit tu te rendais mais ce qui est sûr c'est que quelqu'un t'es tombé dessus et t'as laissé pour mort.\"",
		title : "Souvenirs",
		illustration : "http://lorempixel.com/900/400/",
		links: [
			{
				caption : 'Fort Tran ? Blancsouche ?',
				page : 6
			},
			{
				caption : 'Laisser pour mort ?',
				page : 7
			}
		],
		onEnter : function(player){},
		onExit : function(player){}
	},
	{ // 6
		text : "L'homme : \"Tu me fais marcher ? Tu ne te souviens pas ? Laisse moi te rafraîchir la mémoire. Blancsouche est une petite ville de fermiers plus au sud et Fort Tran est au nord c'est la ville de résidence du gouverneur de notre région.\"",
		title : "Géographie",
		illustration : "http://lorempixel.com/900/400/",
		links: [
			{
				caption : 'Laisser pour mort ?',
				page : 7
			},
			{
				caption : 'Merci, je vais y aller.',
				page : 8
			}
		],
		onEnter : function(player){ },
		onExit : function(player){}
	},
	{ // 7
		text : "L'homme :\"Oui, comme je te l'ai dit. On t'a retrouvé allonger sur le bord de la route la tête couverte de sang, t'as pris un sale coup !\"",
		title : "Découverte",
		illustration : "http://lorempixel.com/900/400/",
		links: [
			{
				caption : 'Fort Tran ? Blancsouche ?',
				page : 6
			},
			{
				caption : 'Merci, je vais y aller.',
				page : 8
			}
		],
		onEnter : function(player){},
		onExit : function(player){}
	},
	{ // 8
		text : "L'homme :\"Tu comptes repartir tout de suite ? A peine remis de ta blessure ? Ce n'est pas malin. Reste ici encore une nuit pour te requinquer, tu partiras demain. Hé ! J'en ai oublié mes manières, je ne me suis même pas présenté, moi c'est Udrem.\"",
		title : "Un peu de repos",
		illustration : "http://lorempixel.com/900/400/",
		links: [
			{
				caption : 'Passer la nuit chez Udrem.',
				page : 9
			}
		],
		onEnter : function(player){},
		onExit : function(player){}
	},
	{ // 9
		text : "Vous passez la soirée avec Udrem qui vous décrit les routes dans la région. A une journée de marche en suivant la route vers le nord vous trouverez Fort Tran, et à deux jours de marche vers le sud vous arriverez à Blancsouche.",
		title : "La soirée",
		illustration : "http://lorempixel.com/900/400/",
		links: [
			{
				caption : 'Allez vous coucher',
				page : 10
			}
		],
		onEnter : function(player){},
		onExit : function(player){}
	},
	{ // 10
		text : "Après un dernier repas avec votre hôte, vous vous préparez pour partir. Udrem vous indique le chemin que vous devez prendre pour rejoindre la route principale. Au bout d'une bonne heure de marche vous arrivez sur la route.",
		title : "La voie royale",
		illustration : "http://lorempixel.com/900/400/",
		links: [
			{
				caption : 'Allez vers le sud.',
				page : 11
			},
			{
				caption : 'Allez vers le nord.',
				page : 12
			}
		],
		onEnter : function(player){},
		onExit : function(player){}
	},
	{ // 11
		text : "Sur la route vers Blancsouche vous croisez quelques négociants, leur chariots chargés de nourriture d'hiver, pomme de terre, betteraves, carrotes et autres racines. Vous entendez un de ces négociants pester contre ces denrées qui ne valent pas assez et qu'il a hâte que les produits fassent leurs retours pour augmenter ses gains. Cela fait maintenant une journée que vous marchez, vous commencez à fatiguer. Vous continuez votre marche quelque peu jusqu'à rencontrer une convoi de marchands.",
		title : "Vers le sud",
		illustration : "http://lorempixel.com/900/400/",
		links: [
			{
				caption : 'Allez voir le camp de marchands.',
				page : 13
			},
			{
				caption : 'Camper aux abords du camp.',
				page : 14
			}
		],
		onEnter : function(player){},
		onExit : function(player){}
	},
	{ // 12
		text : "La route vers Fort Tran est assez calme en ce début de printemps, vous vous faites doubler par quelques négociants revenant de Blancsouche. Vers le milieu d'après midi alors que vous marchez près d'une grosse pierre triangulaire un frisson vous parcours le dos. Une voix vous interpelle : \"Encore toi ! T'en as pas eu assez la dernière fois ?\". Vous comprenez qu'il s'agit de votre agresseur et qu'il est temps pour vous de vous défenre ! ",
		title : "Vers le nord",
		illustration : "http://lorempixel.com/900/400/",
		links: [
			{
				caption : 'Allez vers le sud.',
				page : 11
			},
			{
				caption : 'Allez vers le nord.',
				page : 12
			}
		],
		onEnter : function(player){ this.fight( {pv:5, name: "Bandit", atk: 2, atkBonus: 0, winScene: 15, loseScene: 16} ); },
		onExit : function(player){}
	},
	{ // 13
		text : "",
		title : "13",
		illustration : "http://lorempixel.com/900/400/",
		links: [
			{
				caption : '14',
				page : 14
			}
		],
		onEnter : function(player){  },
		onExit : function(player){}
	},
	{ // 14
		text : "",
		title : "14",
		illustration : "http://lorempixel.com/900/400/",
		links: [
			{
				caption : '15',
				page : 15
			}
		],
		onEnter : function(player){},
		onExit : function(player){}
	},
	{ // 15
		text : "Vous arrivez à vaincre votre adversaire, qui vous implore de l'épargner.",
		title : "Victoire",
		illustration : "http://lorempixel.com/900/400/",
		links: [
		],
		onEnter : function(player){ this.fight( {pv:5, name: "Bandit", atk: 2, atkBonus: 0, winScene: 15} ); },
		onExit : function(player){}
	},
	{ // 16
		text : "Bandit : \"Cette fois si ne pense pas que tu vas t'en remettre !\". Alors que vos oreilles sifflent et que votre vue se trouble, vos forces vous quitte sur le bord de la route. Vous êtes mort.",
		title : "Vers le nord",
		illustration : "http://lorempixel.com/900/400/",
		links: [
			{
				caption : 'Recommencer',
				page : 0
			}
		],
		onEnter : function(player){},
		onExit : function(player){}
	}
];