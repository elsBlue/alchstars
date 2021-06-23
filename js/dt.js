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

		{
			"name" 		: "Seleucid",
			"world" 	: "Umbraton",
			"attribute" : "Water",
			"rarity"	: "4",	
			"figure" 	: "seleucid/figure.jpg",
			"category" 	: [
				{"name" : "Detonator"},
			],

			"skill" 	: [
				{	
					"type" 			: "Active",
					"name" 			: "Roar of Fury",
					"img" 			: "seleucid/skill1.jpg",
					"description" 	: "Deals 200% damage to 1 surrounding cluster.",
				},

				{	
					"type" 			: "Chain Combo",
					"name" 			: "Leaping Cleave",
					"img" 			: "seleucid/skill2.jpg",
					"description" 	: "Deals 150% damage to 1 surrounding cluster.",
				},
				
				{	
					"type" 			: "Equipment Skills",
					"name" 			: "Crushing Force",
					"img" 			: "seleucid/skill3.jpg",
					"description" 	: "There is a 30% chance of increasing Chain Combo damage by 50%.",
				}
					
			]
		},

		{
			"name" 		: "Sariel",
			"world" 	: "Umbraton",
			"attribute" : "Water",
			"rarity"	: "6",	
			"figure" 	: "sariel/figure.jpg",
			"category" 	: [
				{"name" : "Converter"},
			],

			"skill" 	: [
				{	
					"type" 			: "Active",
					"name" 			: "Turbid Wheel",
					"img" 			: "sariel/skill1.jpg",
					"description" 	: "Converts the 4 nearest Red or Green tiles to Blue.",
				},

				{	
					"type" 			: "Chain Combo",
					"name" 			: "Tidebreaker",
					"img" 			: "sariel/skill2.jpg",
					"description" 	: "Deals 150% damage 3 times. assigned randomly to enemies withing 2 surronding clusters of this unit. When a target takes damage more than once. halve the damage.",
				},
				
				{	
					"type" 			: "Equipment Skills",
					"name" 			: "Drizzle Curtain",
					"img" 			: "sariel/skill3.jpg",
					"description" 	: "Grants a Sariel Mark, up to 8 stacks. Each stack increase Sariel's DEF by 6%. Retains 50% the stack at the end of the round.",
				}
					
			]
		},

		{
			"name" 		: "Sork & Bekk",
			"world" 	: "Rediesel Wrench",
			"attribute" : "Fire",
			"rarity"	: "4",	
			"figure" 	: "sork/figure.jpg",
			"category" 	: [
				{"name" : "Detonator"},
			],

			"skill" 	: [
				{	
					"type" 			: "Active",
					"name" 			: "M23 High Explosive",
					"img" 			: "sork/skill1.jpg",
					"description" 	: "Attacks in any 1 selected direction. Deals 240% damage to the first enemy hit and to enemies within 1 surrounding circle.",
				},

				{	
					"type" 			: "Chain Combo",
					"name" 			: "Ragging Bekk",
					"img" 			: "sork/skill2.jpg",
					"description" 	: "Deals 140% damage to 12 tiles in a diamond shape.",
				},
				
				{	
					"type" 			: "Equipment Skills",
					"name" 			: "Bombardment",
					"img" 			: "sork/skill3.jpg",
					"description" 	: "Increases Active Skill damage by 20%.",
				}
					
			]
		},

		{
			"name" 		: "Tessa",
			"world" 	: "Umbraton",
			"attribute" : "Thunder",
			"rarity"	: "4",	
			"figure" 	: "tessa/figure.jpg",
			"category" 	: [
				{"name" : "Detonator"},
			],

			"skill" 	: [
				{	
					"type" 			: "Active",
					"name" 			: "Electric Current",
					"img" 			: "tessa/skill1.jpg",
					"description" 	: "Selects 1 of 4 directions around the unit and pulls over all enemies in the selected direction and the adjacent rows and columns to the unit, dealing 180% damage to the enemies that are pulled over.",
				},

				{	
					"type" 			: "Chain Combo",
					"name" 			: "Power Surge",
					"img" 			: "tessa/skill2.jpg",
					"description" 	: "Deals 150% damage to 1 surrounding cluster.",
				},
				
				{	
					"type" 			: "Equipment Skills",
					"name" 			: "Plasma Point",
					"img" 			: "tessa/skill3.jpg",
					"description" 	: "Grants a Tessa Mark. When using an Active Skill, each mark deals 20% damage to enemies within 1 surrounding cluster around Tessa. Activing the Active Skills clears all marks.",
				}
					
			]
		},

		{
			"name" 		: "Tiny One",
			"world" 	: "Rediesel Wrench",
			"attribute" : "Fire",
			"rarity"	: "4",	
			"figure" 	: "tiny/figure.jpg",
			"category" 	: [
				{"name" : "Converter"},
			],

			"skill" 	: [
				{	
					"type" 			: "Active",
					"name" 			: "Encore",
					"img" 			: "tiny/skill1.jpg",
					"description" 	: "Converts 1 traversable tile to 1 Red Prism tile.",
				},

				{	
					"type" 			: "Chain Combo",
					"name" 			: "Intense Glare",
					"img" 			: "tiny/skill2.jpg",
					"description" 	: "Deals 150% damage to 1 surrounding cluster.",
				},
				
				{	
					"type" 			: "Equipment Skills",
					"name" 			: "Spotlight",
					"img" 			: "tiny/skill3.jpg",
					"description" 	: "Tiny One's Normal Attack damage increases by 20% for this round after using Active Skill.",
				}
					
			]
		},

		{
			"name" 		: "Unimet",
			"world" 	: "Illumina Federation",
			"attribute" : "Thunder",
			"rarity"	: "3",	
			"figure" 	: "unimet/figure.jpg",
			"category" 	: [
				{"name" : "Converter"},
			],

			"skill" 	: [
				{	
					"type" 			: "Active",
					"name" 			: "Universal Support Box",
					"img" 			: "unimet/skill1.jpg",
					"description" 	: "Throws a can at any selected tile, changing the tile to a Yellow tile. A Lightning Crystal, Meteorite Crystal, Bandage, Attack, or Defense is randomly generated on the tile.",
				},

				{	
					"type" 			: "Chain Combo",
					"name" 			: "Universal Mechanical Fist",
					"img" 			: "unimet/skill2.jpg",
					"description" 	: "Deals 150% damage to 1 surrounding cluster.",
				},
				
				{	
					"type" 			: "Equipment Skills",
					"name" 			: "Machine Fanatic",
					"img" 			: "unimet/skill3.jpg",
					"description" 	: "When there are no enemies within the Chain Combo range, recovers the team's HP equal to 80% of Unimet's ATK.",
				}
					
			]
		},


		{
			"name" 		: "Uriah",
			"world" 	: "Lumopolis",
			"attribute" : "Forest",
			"rarity"	: "4",	
			"figure" 	: "uriah/figure.jpg",
			"category" 	: [
				{"name" : "Support"},
			],

			"skill" 	: [
				{	
					"type" 			: "Active",
					"name" 			: "Vines of Prayer",
					"img" 			: "uriah/skill1.jpg",
					"description" 	: "Recovers the team's HP by 60% of Uriah's Max HP. If there is any excess healing, the nearest Green tiles is converted to and enhanced tile.",
				},

				{	
					"type" 			: "Chain Combo",
					"name" 			: "Prayer of Healing",
					"img" 			: "uriah/skill2.jpg",
					"description" 	: "Recovers the team's HP by 160% of Uriah's ATK.",
				},
				
				{	
					"type" 			: "Equipment Skills",
					"name" 			: "Eulogy",
					"img" 			: "uriah/skill3.jpg",
					"description" 	: "Recovers HP equal to 40% of Uriah's DEF when passing through an enhanced Green tile.",
				}
					
			]
		},

		{
			"name" 		: "Vice",
			"world" 	: "Illumina Federation",
			"attribute" : "Water",
			"rarity"	: "5",	
			"figure" 	: "vice/figure.jpg",
			"category" 	: [
				{"name" : "Sniper"},
			],

			"skill" 	: [
				{	
					"type" 			: "Active",
					"name" 			: "Rapid Torrent",
					"img" 			: "vice/skill1.jpg",
					"description" 	: "Deals 80% damage 5 times to random enemies on the field. Launches 1 additional attack for each Water tile within 1 surrounding cluster of the unit.",
				},

				{	
					"type" 			: "Chain Combo",
					"name" 			: "Homing Arrows",
					"img" 			: "vice/skill2.jpg",
					"description" 	: "Deals 140% damage to the 2 nearest enemies",
				},
				
				{	
					"type" 			: "Equipment Skills",
					"name" 			: "Target Lock",
					"img" 			: "vice/skill3.jpg",
					"description" 	: "Vice gains 1 stack of Locking Marks whenever she deals damage. Each stack increases damage by 1%. All stacks are cleared at the end of the round.",
				}
					
			]
		},

		{
			"name" 		: "Wendy",
			"world" 	: "Independent",
			"attribute" : "Forest",
			"rarity"	: "4",	
			"figure" 	: "tiny/figure.jpg",
			"category" 	: [
				{"name" : "Converter"},
			],

			"skill" 	: [
				{	
					"type" 			: "Active",
					"name" 			: "Nimble Hurricane",
					"img" 			: "wendy/skill1.jpg",
					"description" 	: "Transports to any location and generates 1 Wendy's Feather on the spot. Tap Wendy's Feather to return to the original location. There can only 1 Wendy's Feather on battlefield.",
				},

				{	
					"type" 			: "Chain Combo",
					"name" 			: "Owl Kick",
					"img" 			: "wendy/skill2.jpg",
					"description" 	: "Deals 150% damage to 8 tiles in a cross shape.",
				},
				
				{	
					"type" 			: "Equipment Skills",
					"name" 			: "Windrider",
					"img" 			: "wendy/skill3.jpg",
					"description" 	: "When an Aurorian teleports. Wendy gains 1 stack of Mark for each cluster between the Aurorian's initial location and their teleport destination. Each stack increases the damage of Wendy's next normal attack by 1% Launching normal attacks clears the Mark.",
				}
					
			]
		},

		{
			"name" 		: "White Dwarf",
			"world" 	: "Illumina Federation",
			"attribute" : "Water",
			"rarity"	: "3",	
			"figure" 	: "white/figure.jpg",
			"category" 	: [
				{"name" : "Support"},
			],

			"skill" 	: [
				{	
					"type" 			: "Active",
					"name" 			: "Gravity Ruins",
					"img" 			: "white/skill1.jpg",
					"description" 	: "Deals 250% damage to enemies in a Cross shape to the maximum range and aggros them to the unit.",
				},

				{	
					"type" 			: "Chain Combo",
					"name" 			: "Gravity Ash",
					"img" 			: "white/skill2.jpg",
					"description" 	: "Deals 150% damage to 8 tiles in a cross shape.",
				},
				
				{	
					"type" 			: "Equipment Skills",
					"name" 			: "Gravitation Meld",
					"img" 			: "white/skill3.jpg",
					"description" 	: "Increases Active Skill damage by 20%.",
				}
					
			]
		},

		{
			"name" 		: "Wrath",
			"world" 	: "Illumina Federation",
			"attribute" : "Thunder",
			"rarity"	: "6",	
			"figure" 	: "wrath/figure.jpg",
			"category" 	: [
				{"name" : "Sniper"},
			],

			"skill" 	: [
				{	
					"type" 			: "Active",
					"name" 			: "Overload Mode",
					"img" 			: "wrath/skill1.jpg",
					"description" 	: "Enters the Overcharge state in which Wrath's Chain Combo deals damage to the nearest enemy 2 times for 2 rounds.",
				},

				{	
					"type" 			: "Chain Combo",
					"name" 			: "Patrol Attack",
					"img" 			: "wrath/skill2.jpg",
					"description" 	: "Deals 110% damage to the nearest enemy and 30% splash damage to enemies in 4 tiles in a cross shape around it.",
				},
				
				{	
					"type" 			: "Equipment Skills",
					"name" 			: "Patrol Array",
					"img" 			: "wrath/skill3.jpg",
					"description" 	: "Bullets can be reserved. When a Chain Combo deals damage, consumes 1 bullet and increases the final damage by 15%",
				}
					
			]
		},

		{
			"name" 		: "Zoya",
			"world" 	: "Illumina Federation",
			"attribute" : "Water",
			"rarity"	: "3",	
			"figure" 	: "zoya/figure.jpg",
			"category" 	: [
				{"name" : "Support"},
			],

			"skill" 	: [
				{	
					"type" 			: "Active",
					"name" 			: "Anticipation of Love",
					"img" 			: "water/skill1.jpg",
					"description" 	: "recovers the team's HP by 150% of Zoya's ATK. Each Blue tile on the field increases healing effectiveness by 5%.",
				},

				{	
					"type" 			: "Chain Combo",
					"name" 			: "Nether Sea",
					"img" 			: "zoya/skill2.jpg",
					"description" 	: "Recovers the team's HP by 160% of Zoya's ATK.",
				},
				
				{	
					"type" 			: "Equipment Skills",
					"name" 			: "Field-Zero Snow",
					"img" 			: "zoya/skill3.jpg",
					"description" 	: "Increases Chain Combo Healing Factor by 10%.",
				}
					
			]
		},

	]
}