var Engine = {
	"name" : "Alchemy Stars",
	"character" : [
		{
			"name" 		: "Alice",
			"world" 	: "Northland",
			"attribute" : "Fire",
			"rarity"	: "4",	
			"figure" 	: "alice/figure.jpg",
			"category" 	: [
				{"name" : "Heal"},
				{"name" : "Buff Effect"},
			],

			"skill" 	: [
				{	
					"type" 			: "Active",
					"name" 			: "The knight & The Queen",
					"img" 			: "alice/skill1.jpg",
					"description" 	: "Descreases the next damage taken in this round by 30%, up to 2 times of Alice's max HP.",
				},

				{	
					"type" 			: "Chain Combo",
					"name" 			: "Doll's Dance",
					"img" 			: "alice/skill2.jpg",
					"description" 	: "Recovers the team's HP by 160% ~ 220% of Alice's ATK.",
				},
				
				{	
					"type" 			: "Equipment Skills",
					"name" 			: "Wonderland Trip",
					"img" 			: "alice/skill3.jpg",
					"description" 	: "if HP has been recovered in this round, Alice's basic DEF increases by 10% for this round.",
				}
					
			]
		},

		{
			"name" 		: "Amy",
			"world" 	: "Lumopolis",
			"attribute" : "Thunder",
			"rarity"	: "3",	
			"figure" 	: "amy/figure.jpg",
			"category" 	: [
				{"name" : "Heal"},
				{"name" : "Buff Effect"},
			],

			"skill" 	: [
				{	
					"type" 			: "Active",
					"name" 			: "Dawn Banner",
					"img" 			: "amy/skill1.jpg",
					"description" 	: "Places the banner on 1 selected tile. The closer Amy is to the banner, the higher her DEF increases (up to 100%). The banner disappears when touched by an enemy.",
				},

				{	
					"type" 			: "Chain Combo",
					"name" 			: "Inspiration",
					"img" 			: "amy/skill2.jpg",
					"description" 	: "Recovers the team's HP by 160% of Amy's ATK.",
				},
				
				{	
					"type" 			: "Equipment Skills",
					"name" 			: "Divine Mark of Light",
					"img" 			: "amy/skill3.jpg",
					"description" 	: "If the Banner stil exists at the end ot the round, regenerates the team's HP by 1 times of Amy's DEF.",
				}
					
			]
		},

		{
			"name" 		: "Angel",
			"world" 	: "Lumopolis",
			"attribute" : "Thunder",
			"rarity"	: "3",	
			"figure" 	: "angel/figure.jpg",
			"category" 	: [
				{"name" : "Random Multihit"},
				{"name" : "Cross Shape ATK"},
			],

			"skill" 	: [
				{	
					"type" 			: "Active",
					"name" 			: "Celestial Judgment",
					"img" 			: "angel/skill1.jpg",
					"description" 	: "Summons 12 lightning strikes, each dealing 180% damage to a random 2x2 area on the field.",
				},

				{	
					"type" 			: "Chain Combo",
					"name" 			: "Feather Dance",
					"img" 			: "angel/skill2.jpg",
					"description" 	: "Deal 150% damage to 8 ~ maximum tiles in a cross shape.",
				},
				
				{	
					"type" 			: "Equipment Skills",
					"name" 			: "Feathery Landing",
					"img" 			: "angel/skill3.jpg",
					"description" 	: "Each flash of lightning of the Active skill has a 15% chance to increase damage by 40%.",
				}
					
			]
		},


		{
			"name" 		: "Ansia",
			"world" 	: "Illumina Federation",
			"attribute" : "Thunder",
			"rarity"	: "4",	
			"figure" 	: "ansia/figure.jpg",
			"category" 	: [
				{"name" : "Surrounding Cluster ATK"},
				{"name" : "Edge ATK"},
			],

			"skill" 	: [
				{	
					"type" 			: "Active",
					"name" 			: "Sonic Wave",
					"img" 			: "ansia/skill1.jpg",
					"description" 	: "Deals 200% damage to 2 surrounding clusters and resets all tiles within the area of attack.",
				},

				{	
					"type" 			: "Chain Combo",
					"name" 			: "Pulsating Quake",
					"img" 			: "ansia/skill2.jpg",
					"description" 	: "Deals 145% ~ 160% damage to enemies within 2 surrounding clusters.",
				},
				
				{	
					"type" 			: "Equipment Skills",
					"name" 			: "Sound Edge",
					"img" 			: "ansia/skill3.jpg",
					"description" 	: "Increases the damage Ansia deals to enemies along the edge of the battlefield (the damage bonus is the highest when enemies are in the corner), up to a boost of 25% final damage.",
				}
					
			]
		},

		{
			"name" 		: "Brock",
			"world" 	: "Rediesel Wrench",
			"attribute" : "Fire",
			"rarity"	: "4",	
			"figure" 	: "brock/figure.jpg",
			"category" 	: [
				{"name" : "Diamond Shape ATK"},
				{"name" : "Fire Attack Buff"},
				{"name" : "AOE"},
				{"name" : "Aggro"},
			],

			"skill" 	: [
				{	
					"type" 			: "Active",
					"name" 			: "Turbine Absorption",
					"img" 			: "brock/skill1.jpg",
					"description" 	: "Deals 300% damage to all enemies and aggros all enemies to the unit.",
				},

				{	
					"type" 			: "Chain Combo",
					"name" 			: "Supercharged Punch",
					"img" 			: "brock/skill2.jpg",
					"description" 	: "[5] Deals 155% damage to 1 surrounding cluster.</br> [8] Deals 170% damage to 12 tiles in a diamond shape.",
				},
				
				{	
					"type" 			: "Equipment Skills",
					"name" 			: "Turbocharge",
					"img" 			: "brock/skill3.jpg",
					"description" 	: "After using an Active skill, increases Fire Aurorian's ATK equal to 1% of Brock's ATK for every enemy within 1 surrounding cluster of the unit.",
				}
					
			]
		},



	]
}