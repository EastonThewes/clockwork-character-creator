export const martialArchetypes = [
  {
    name: "Skirmisher",
    type: "martial",
    bonusTrait: ["Brawn", "Wits"],
    maneuvers: ["Charge", "Shift", "Grab"],
    styles: [
      {
        name: "Shielder",
        initiate: {
          description:
            "The Skirmisher's attacks with a shield deal 2k0 damage instead of 1k0. Additionally, the Skirmisher can use shields for taking Intervene rolls against ranged Attacks from Bows and Crossbows.",
        },
        adept: {
          description:
            "The Skirmisher is able to benefit from the Shielding property even when using Large Shields. The Skirmisher may use Intervene Reactions in order to intercept attacks on any Character in a square they can reach with their weapon.",
        },
        master: {
          description:
            "The Skirmisher gains a +1k1 to Active Defense and Attack rolls with shields. The Shielder may use Ward as an Attack of Opportunity.",
        },
      },
      {
        name: "Dual-Wielder",
        initiate: {
          description:
            "The Skirmisher receives the Double-Attack Maneuver. Additionally, the Skirmisher receives no penalty to using a full-size one-handed weapon in their off hand.",
        },
        adept: {
          description:
            "When using Double Attack, the Skirmisher combines the damage bonuses of both weapons but still only chooses one for the purpose of properties. The benefits are applied to the single attack roll.",
        },
        master: {
          description:
            "Once per Round on their Turn, the Skirmisher may make a free simple attack with the offhand weapon, even if the Skirmisher does not otherwise make an Attack in that Round.",
        },
      },
      {
        name: "Bulwark",
        initiate: {
          description:
            "The Skirmisher gains the Bind Maneuver and receives a flat +4 bonus to AP as long as the Skirmisher is wearing Armor.",
        },
        adept: {
          description:
            "The Skirmisher receives a flat +6 bonus to AP (instead of +2 from Initiate talent) as long as the Skirmisher is wearing Armor. The Skirmisher also receives an additional 2k0 to Endure checks to resist being moved. This increases to 2k1 if the Skirmisher is in the Defensive stance.",
        },
        master: {
          description:
            "The Skirmisher receives a flat +8 bonus to AP. The Skirmisher gains a 2k1 bonus to Endure checks to resist being moved; this increases to 2k2 if the Skirmisher is in the Defensive stance. Additionally, the Skirmisher deals an additional 0k1 damage if Charging or Slamming.",
        },
      },
    ],
  },
  {
    name: "Ravager",
    type: "martial",
    bonusTrait: ["Brawn", "Resolve"],
    maneuvers: ["Sweep", "Charge", "Bob and Weave"],
    styles: [
      {
        name: "Two-Hander",
        initiate: {
          description:
            "The Ravager can choose to take -1k0 to their Attack roll in order to gain a 1k0 on the Damage roll if the Attack is successful. This can be taken up to the Ravager's Brawn.",
        },
        adept: {
          description:
            "The Ravager ignores the Heavy weapon Bane of -10 on Called Shots and Parries. Additionally, the Ravager ignores the -1k0 penalty to Sweep Maneuvers.",
        },
        master: {
          description: "TBD",
        },
      },
      {
        name: "Charger",
        initiate: {
          description:
            "The Ravager gains an additional 5ft of movement while Charging. If the Ravager Charges, they receive 4 AP for the current and next Turns that cannot be bypassed. If the Ravager's Charge succeeds by more than 10, then the enemy may be pushed back up to 10ft or made prone.",
        },
        adept: {
          description:
            "When making a Charge, the Ravager may select one enemy affected by the Charge to take the full brunt of the Charge. Instead of the 1k1 Damage from the Charge, the Character may roll a normal weapon Damage roll against that one enemy. The Ravager's bonus AP on the Charge rises to 6 AP.",
        },
        master: {
          description: "TBD",
        },
      },
      {
        name: "Deathless",
        initiate: {
          description:
            "The Ravager may add 1k1 to their Resolve rolls when rolling on Wound checks. Additionally, while the Ravager has Grazes, they gain 1k0 to all Attack and Maneuver rolls for every 10 grazes.",
        },
        adept: {
          description:
            "The Ravager gains a permanent AP equal to 1+Resolve, which cannot be bypassed. Additionally, for every Wound the Ravager has, all of the Ravager's Damage rolls gain 1k0.",
        },
        master: {
          description:
            "If the Ravager is brought to 0 Wounds, spending an Endeavor die allows the Ravager to return to 1 Wound. This may only be done once per Round. Additionally, for every Wound the Ravager has, all of the Ravager's Damage rolls gain 2k0.",
        },
      },
    ],
  },
  {
    name: "Gunner",
    type: "martial",
    bonusTrait: ["Presence", "Finesse"],
    maneuvers: ["Pop-Up Shot", "Pommel Strike", "Stopping Power"],
    styles: [
      {
        name: "Pistolier",
        initiate: {
          description:
            "The Gunner does not provoke Attacks of Opportunity in Melee when making attacks with Small Firearms.",
        },
        adept: {
          description:
            "The Gunner receives no penalty to having a Small Firearm in the off-hand. If reloading two Small Firearms simultaneously, the total Quick Actions required is reduced by 2. When the Gunner is using a Small and Powerful Firearm, the Range is increased by 10ft.",
        },
        master: {
          description: "TBD",
        },
      },
      {
        name: "Sharpshooter",
        initiate: {
          description:
            "The Gunner receives a Boon to Attack Rolls against targets that are in cover as well as targets that are Prone.",
        },
        adept: {
          description:
            "The Gunner may select up to 2 potential targets when using the Targeting Stance, though may only choose to fire at one. While the Gunner is in the Targeting Stance, all Simple Attacks may add the Gunner's Mastery Rank as Unkept dice to the attack roll.",
        },
        master: {
          description:
            "The Gunner may negate up to 2 Banes when taking Called Shots.",
        },
      },
      {
        name: "Dragoon",
        initiate: {
          description:
            "When the Gunner is using a Large Firearm, the additional Reload penalty is negated.",
        },
        adept: {
          description:
            "When the Gunner makes an Attack with Large Firearm, the Gunner may select one additional square adjacent to the square the target is in. Assuming the attack hits, targets in the additional square receive half the dealt damage. Cover and other protections do not apply to targets in the additional square.",
        },
        master: {
          description: "TBD",
        },
      },
    ],
  },
  {
    name: "Sentinel",
    type: "martial",
    bonusTrait: ["Presence", "Resolve"],
    maneuvers: ["Ward", "Sweep", "Trip"],
    styles: [
      {
        name: "Vanguard",
        initiate: {
          description:
            "Once per Round, the Sentinel may take 5ft of free movement if they make a successful Attack roll against an opponent. The movement must be taken immediately after the Attack is resolved. This movement does not provoke Attacks of Opportunity.",
        },
        adept: {
          description:
            "Once per Round, if the Sentinel makes a successful Attack roll against an opponent, they may make one additional Simple Attack without using an Action. The once per round restriction on 5ft of free movement from the Initiate talent is removed.",
        },
        master: {
          description:
            "The Sentinel may make an additional Simple Attack against opponents so long as the Sentinel has moved at least 5ft immediately prior to the attack.",
        },
      },
      {
        name: "Guardian",
        initiate: {
          description:
            "The Sentinel gains 1k0 on all Attack, Active Defense, and Damage Rolls against an enemy if the Sentinel acts after the enemy in the Turn Order. For every 5 Turns the Sentinel acts after the enemy, add an additional Unkept die.",
        },
        adept: {
          description:
            "The Sentinel may use Active Defense Reactions in order to intercept attacks on any Character in a square they can reach with their weapon. While in the Intercept Stance, the Sentinel's TN is increased, not lowered, by 5.",
        },
        master: {
          description:
            "The Sentinel receives an additional Reaction per Round that may be used for making Opportunity Attacks or Active Defenses to protect another Character. The Sentinel receives two Boons (+10) when making Active Defenses in order to protect another Character.",
        },
      },
      {
        name: "Harbinger",
        initiate: {
          description:
            "If the Sentinel makes a successful Attack roll against an opponent, the Sentinel may spend a Quick Action to use the Shift Maneuver to attempt to move the enemy 5ft. The Sentinel still requires 2 additional Standard Actions in order to attempt to make an opponent prone.",
        },
        adept: {
          description:
            "The Sentinel's Action cost to use the Sweep Maneuver is reduced to 2 Standard Actions. The number of targets that may be affected by Sweep is based on the Sentinel's Wits instead of Brawn.",
        },
        master: {
          description:
            "When using the Shift Maneuver, the Sentinel requires only 1 additional Standard Action in order to make an Opponent prone. The Sentinel gains one additional point in the Wits or Presence Traits, allowing the trait to reach 4.",
        },
      },
    ],
  },
  {
    name: "Hunter",
    type: "martial",
    bonusTrait: ["Finesse", "Wits"],
    maneuvers: ["Double Attack", "Bind", "Shift"],
    styles: [
      {
        name: "Tracker",
        initiate: {
          description:
            "The Hunter chooses to be proficient in Urban or Nature environments. While in their favored environment, the Hunter receives the following bonuses: +1k1 to Survival, +1k1 to Stealth, and +1k1 to Perception. The Hunter begins with one Knowledge Skill relevant to their favored environment at Rank 3.",
        },
        adept: {
          description:
            "The Hunter receives +10ft of Movement speed in their favored terrain. In addition, the Hunter receives an additional 2k0 when using the Bind Maneuver.",
        },
        master: {
          description:
            "The Hunter's benefits in their favored terrain increase to +2k2 in Survival, Stealth, and Perception. The Hunter gains a permanent +1 to their Finesse and their Evade Knack in their favored environment.",
        },
      },
      {
        name: "Stalker",
        initiate: {
          description:
            "The Hunter chooses one enemy type to excel at hunting: Undead, Constructed, Beasts, or Outsiders. When facing their favored enemy, the Hunter gains the following benefits: +1k1 Damage on all Attacks against the Enemy, +2k1 to Survival to track the Enemy, and one Knowledge Skill relevant to the enemy at Rank 3.",
        },
        adept: {
          description:
            "The Hunter chooses one additional enemy type. The Hunter gains access to the Tinkerer: Alchemy Advantage for free.",
        },
        master: {
          description:
            "The Hunter's bonuses against their favored enemies improve. Additionally, the Hunter gains access to the Inventor: Alchemy Advantage for free.",
        },
      },
      {
        name: "Marksman",
        initiate: {
          description:
            "While using Ranged weapons, the weapons have an additional 10ft of Range. For every Attack made against a target in the Round by the Hunter, the Hunter adds a Boon on their next Attack.",
        },
        adept: {
          description:
            "The Hunter gains an Unkept die on all Attack, Active Defense, and Damage Rolls against an enemy if the Hunter acts after the enemy in the Turn Order.",
        },
        master: {
          description:
            "While using Ranged weapons, the weapons Reload values are decreased by 1 to a minimum of 1. For every Attack made against a target in the Round by the Hunter, the Hunter adds a Boon on their next Damage roll.",
        },
      },
    ],
  },
  {
    name: "Scoundrel",
    type: "martial",
    bonusTrait: ["Finesse", "Brawn"],
    maneuvers: ["Distract", "Double Attack", "Pin"],
    styles: [
      {
        name: "Saboteur",
        initiate: {
          description:
            "The Scoundrel gains a +1k1 to Damage rolls against enemies they can Backstab.",
        },
        adept: {
          description:
            "If the Scoundrel moves 10ft or less in an Action, they do not provoke Attacks of Opportunity. If the Scoundrel attacks while Hidden, they receive an additional Boon to their Attack roll as well as Damage roll.",
        },
        master: {
          description:
            "If the Scoundrel is attacking a target they can Backstab, their Damage dice Explode.",
        },
      },
      {
        name: "Bruiser",
        initiate: {
          description:
            "The Scoundrel may make an Attack of Opportunity against an enemy if the enemy is adjacent and attacks a target other than the Scoundrel.",
        },
        adept: {
          description:
            "The Scoundrel may use the Grab Knack with only one Standard Action, and receives a Boon to the contested Brawn roll.",
        },
        master: {
          description:
            "When attacking enemies that have the Held, Stunned, or Prone Conditions, the Scoundrel receives +2k1 to Attack and Damage Rolls.",
        },
      },
      {
        name: "Cutter",
        initiate: {
          description:
            "If the Scoundrel is wielding only Small weapons, they may take a free 5ft move action if an enemy they are within 5ft of uses an Action to move.",
        },
        adept: {
          description:
            "In the hands of a Scoundrel, Small weapons gain the Vicious property; if the weapon is already Vicious, the increment for an extra Wound is reduced to 10.",
        },
        master: {
          description:
            "If the Scoundrel deals a Wound, they may take one additional Action on their Turn for the current Round.",
        },
      },
    ],
  },
  {
    name: "Leader",
    type: "martial",
    bonusTrait: ["Presence", "Wits"],
    maneuvers: ["Distract", "Pommel Strike", "Pin"],
    styles: [
      {
        name: "Idealogue",
        initiate: {
          description:
            "The leader may use 1 Action in order to maintain an inspiring presence until the beginning of their next Turn. The aura has a range of 10ft and provides allies that start their turn in its radius: +10ft of Movement distance per Movement Action, +1k1 to all Skill Checks, and One additional Quick Action.",
        },
        adept: {
          description:
            "The Leader may act 1 Turn later or earlier than their chosen Presence die for Initiative.",
        },
        master: {
          description:
            "The Leader may use 2 Actions to grant all allies within 20ft the following benefits: TBD",
        },
      },
      {
        name: "Provocateur",
        initiate: {
          description:
            "The leader may use 1 Action in order to maintain an aggressive presence until the beginning of their next Turn. The aura has a range of 10ft and provides allies that start their turn in its radius: +1k0 to Attack Rolls and contested effect rolls per Mastery Level, +5 to Passive Defense TN against Opportunity Attacks.",
        },
        adept: {
          description:
            "The Leader may act 1 Turn earlier than their chosen Presence die for Initiative.",
        },
        master: {
          description:
            "The Leader may use 2 Actions to grant all allies within 20ft the following benefits: TBD",
        },
      },
      {
        name: "Tactician",
        initiate: {
          description:
            "The leader may use 1 Action in order to maintain a strategic presence until the beginning of their next Turn. The aura has a range of 10ft and provides allies that start their turn in its radius: +5 to Passive Defense TN, +1k0 to Intervene Rolls per Mastery Level, and +5 to Intervene Rolls to defend an ally.",
        },
        adept: {
          description:
            "The Leader may act 1 Turn later than their chosen Presence die for Initiative.",
        },
        master: {
          description:
            "The Leader may use 2 Actions to grant all allies within 20ft the following benefits: TBD",
        },
      },
    ],
  },
];

export const sorcerousArchetypes = [
  {
    name: "Blood Ritualist",
    type: "sorcerous",
    bonusTrait: ["Resolve", "Brawn"],
    initiate: {
      talent:
        "Sense Blood - The Ritualist is aware of any spilled blood within 30ft, even if dried. With a Quick Action, they may detect the exact location of any blood within 100ft. If the Ritualist possesses or ingests a creature's blood, they receive +2k0 on all contested rolls and Damage rolls against that creature.",
      invocations: [
        {
          name: "Draw Blood",
          actionCost: 1,
          description:
            "Pick up to your Wits in targets within 30ft. Roll Strike+Resolve vs the target's Endure+Resolve. If successful, deal (Mastery Level)k1 Grazes to each target that failed the check.",
        },
        {
          name: "Litany in Blood",
          actionCost: 1,
          description:
            "Activate this Invocation as a Stance, dealing 5 Grazes upon activation and every Round the Invocation is active. For every Wound you possess, all of your Invocation Effects gain a Boon.",
        },
        {
          name: "Blood Shield",
          actionCost: 1,
          description:
            "Use as an Active Defense. Roll Intervene as the unkept die and the number of Wounds you have as the Kept die. Reduce incoming damage by this total amount.",
        },
        {
          name: "Tidal Pull",
          actionCost: 1,
          description:
            "Choose one target within 60ft. Roll Manipulate + Resolve against their Brawn + Endurance. If successful, move the target in a straight line toward you by 5ft for every Action spent and impose the Unbalanced Condition.",
        },
        {
          name: "Jagged Edge",
          actionCost: 2,
          description:
            "Choose a weapon you can touch. When the weapon strikes until the end of the combat, it imposes the Bleed Condition equal to your Mastery Rank.",
        },
        {
          name: "Bleed",
          actionCost: 1,
          description:
            "Use when a creature within Line of Sight makes a Wound check. Grant either a Bane or Boon to the check.",
        },
      ],
    },
    adept: {
      talent:
        "Trace Blood - The Ritualist may track the lingering presence of blood as long as they remain in possession of a sample. If they possess or ingest a creature's blood, they receive +3k0 on all contested rolls and Damage rolls against that creature.",
      invocations: [
        {
          name: "Thousand Cuts",
          actionCost: 2,
          description:
            "Choose a 3x3 square within 30ft. If any enemy within the square already has Grazes, deal additional Grazes equal to 3 times your Manipulate Knack.",
        },
        {
          name: "Leech",
          actionCost: 2,
          description:
            "Choose a 2x2 square within 40ft. Deal (Mastery Rank)k1 Grazes to all creatures in the square and reduce your own Grazes by the same amount. If a target already has Grazes, deal an additional 5 Grazes and heal 5 additional Grazes to yourself.",
        },
        {
          name: "Coagulate",
          actionCost: 3,
          description:
            "Choose one target within 5ft. Roll Manipulate + Resolve. Heal the target of Grazes equal to the total.",
        },
        {
          name: "Pool of Life",
          actionCost: 2,
          description:
            "All spilled blood within 10ft is drawn to the Ritualist. The GM determines the volume of blood (1-4). The next Endure+Volume in Grazes are healed as they are dealt, until the full amount is absorbed or combat ends.",
        },
      ],
    },
    master: {
      talent:
        "Know Blood - The Ritualist may imbibe a creature's blood (so long as it is not fully dried) to learn information such as gender, age, health, substance use, and glimpses of their last thoughts and emotions. If they possess or ingest a creature's blood, they receive +1k1 on all contested rolls and Damage rolls against that creature.",
      invocations: [
        {
          name: "Blood Bending",
          actionCost: 2,
          description:
            "Manipulate one target resisted by Brawn+Endure. The target can only perform Simple Attacks or other simple actions, and their movement speed is halved.",
        },
        {
          name: "Fragmented Clot",
          actionCost: 2,
          description:
            "Choose an area. Every creature in the area takes Grazes equal to the highest amount of Grazes any one creature in the area has taken.",
        },
        {
          name: "Heal Wounds",
          actionCost: 3,
          description:
            "Recover Wounds based on a high TN roll. Exact mechanics TBD.",
        },
      ],
    },
  },
  {
    name: "Shadesworn",
    type: "sorcerous",
    bonusTrait: ["Finesse", "Wits"],
    initiate: {
      talent:
        "Nightwalker - The Shadesworn thrives at night or in darkness. When Obscured, they gain +5 movement speed and +1 to Stealth Skill. They can see Obscured targets as if they were normally Visible.",
      invocations: [
        {
          name: "Walk in Shadow",
          actionCost: 2,
          description:
            "All Characters within 15ft of the Shadesworn are Obscured and gain +5 to Stealth. This Invocation cannot be used in bright light and lasts until the Shadesworn uses an Attack action. The Shadesworn may exempt chosen Creatures from the effect.",
        },
        {
          name: "Hide",
          actionCost: 1,
          description:
            "If Obscured, gain the Hidden Condition without needing cover or breaking line of sight. Until the Hidden Condition is removed, gain an additional 1k0 to Stealth checks per Mastery level.",
        },
        {
          name: "Hex Mark",
          actionCost: 1,
          description:
            "Choose one target within line of sight. For the rest of Combat, all attacks against the target deal additional Grazes equal to 2 ' Mastery Rank.",
        },
        {
          name: "Blind",
          actionCost: 2,
          description:
            "Choose a 10ft cube within 50ft. Inky darkness fills the space, imposing the Blind and Hidden conditions on everyone inside until they leave. The darkness blocks Line of Sight and lasts until the end of the Round.",
        },
        {
          name: "Mirror Image",
          actionCost: 1,
          description:
            "Use this Invocation as an Active Defense with Intervene + Wits. If successful, the attack is negated, and you may reposition within 15ft for free.",
        },
        {
          name: "Sliver of Shadow",
          actionCost: 2,
          description:
            "Manifest a melee weapon out of shadows. The weapon lasts until the end of Combat or until exposed to Direct light. It deals additional (Mastery Rank)k0 damage but does not trigger Wound checks on Grazes.",
        },
      ],
    },
    adept: {
      talent:
        "Thief of Shadows - When Obscured, gain +10 movement speed (instead of +5) and +1 to the Evade knack. The Shadesworn can see Obscured targets as Visible and Hidden targets as if they were only Obscured. They may use a Quick Action to snuff out a light source temporarily or mark a 10ft square as Obscured (if connected to another Obscured area).",
      invocations: [
        {
          name: "Creeping Dark",
          actionCost: 1,
          description:
            "If Obscured, shift into a shadowy form and pass through a small opening (e.g., keyhole, cracked window, door gap) within 15ft. Increase the distance traveled by 10ft per additional Action spent. This may be used to travel vertically, and the Shadesworn is considered Hidden at the end.",
        },
        {
          name: "Slithering Shadows",
          actionCost: 3,
          description:
            "Choose a 15ft square within 40ft. Deal Grazes to all creatures in the area, using the number of Obscured 5ft squares in the area as the Unkept die and Wits as the Kept Trait.",
        },
        {
          name: "TBD",
          actionCost: 2,
          description: "Effect TBD.",
        },
        {
          name: "TBD",
          actionCost: 2,
          description: "Effect TBD.",
        },
      ],
    },
    master: {
      talent: "TBD",
      invocations: [
        {
          name: "Become Shadow",
          actionCost: 2,
          description: "Like Dishonored 2's ability, effect TBD.",
        },
        {
          name: "TBD",
          actionCost: 2,
          description: "Effect TBD.",
        },
        {
          name: "TBD",
          actionCost: 2,
          description: "Effect TBD.",
        },
        {
          name: "TBD",
          actionCost: 2,
          description: "Effect TBD.",
        },
      ],
    },
  },
  {
    name: "Bone Keeper",
    type: "sorcerous",
    bonusTrait: ["Brawn", "Presence"],
    initiate: {
      talent:
        "Puppeteer - Choose a corpse to make into a Puppet. It takes a full Action to create one Puppet, with an additional Puppet created per Action spent. The Bone Keeper may control up to their Presence score in Puppets at a time. Each Puppet grants one additional Action (usable only for directing Puppets). Puppets may intercept attacks within 5ft, rolling Intervene + Wits.",
      invocations: [
        {
          name: "Chill Touch",
          actionCost: 2,
          description:
            "Touch a target within melee reach using Manipulate + Finesse against their Passive TN. Only Dodge may be used to avoid this Invocation. Deal Mastery Rank + Brawn damage, and the target gains the Drained Condition until the end of Combat.",
        },
        {
          name: "Meld Bone",
          actionCost: 2,
          description:
            "Shape and mold bone you can touch into an object (weapon, armor, key, etc.). Roll Manipulate + Brawn against a TN determined by the GM. The item may be larger than the bone source, but size and refinement influence the TN.",
        },
        {
          name: "Knitting",
          actionCost: 3,
          description:
            "Heal Mastery Rank + Wits in Grazes on a target within melee reach. If targeting a Puppet, this Invocation restores double Grazes.",
        },
        {
          name: "Splintering Bone",
          actionCost: 2,
          description:
            "Choose a number of squares in a line equal to your Finesse + 2. Roll Manipulate + Brawn as both Attack and Damage. Each creature in the target area takes damage unless they Dodge against your Attack roll.",
        },
        {
          name: "Bone Lance",
          actionCost: 2,
          description:
            "Create one sharp bone spike per Mastery level. Attack at a 30ft range using Strike + Finesse. The spikes have Medium and Powerful properties, with Wits as the damage die. Multiple spikes may target separate creatures.",
        },
        {
          name: "Grasping Hands",
          actionCost: 2,
          description:
            "Choose a number of squares within 20ft equal to Resolve + 2. Roll Manipulate + Brawn. These squares become difficult terrain, and any creature ending their turn in one must roll Endure + Brawn against your Manipulate + Brawn or be Held.",
        },
      ],
    },
    adept: {
      talent:
        "Conductor - The Bone Keeper can control Puppets in hordes. A Horde contains up to Presence ' 3 Puppets and takes only one Action to direct. The Horde moves as a contiguous mass (up to 20ft per Action). Each Puppet in the Horde has 15 Grazes and takes double damage from AoE attacks. Every square adjacent to the Horde is Difficult Terrain, and enemies ending their Turn adjacent take Brawn ' 2 flat damage (stacking).",
      invocations: [
        {
          name: "Animate Effigy",
          actionCost: 2,
          description:
            "Choose a corpse in good condition to create an Effigy. Effigies grant 2 Actions instead of 1 and have unique benefits: Fast Effigies gain +10ft movement and +6 TN to be hit, Strong Effigies gain Brawn + 2k2 damage and the Grab Maneuver, Steady Effigies have 15 ' Brawn Grazes and 10ft Reach. Effigies can intercept attacks within 5ft, rolling Intervene + Wits with two Boons (+10).",
        },
        {
          name: "Corpse Explosion",
          actionCost: 1,
          description:
            "Choose a controlled Puppet. When it is destroyed, every adjacent creature takes (Mastery Rank)k2 damage and is Stunned.",
        },
        {
          name: "Manipulate Bone",
          actionCost: 2,
          description:
            "Move, shift, or mold bone mass within 30ft. Roll Manipulate + Brawn against a TN determined by the GM. The item may be larger than the source material, but complexity influences TN.",
        },
        {
          name: "TBD",
          actionCost: 2,
          description: "Effect TBD.",
        },
        {
          name: "TBD",
          actionCost: 2,
          description: "Effect TBD.",
        },
      ],
    },
    master: {
      talent:
        "Sculptor - Directing a Puppet takes either a Quick or Standard Action. The maximum Horde size increases to Presence ' 5.",
      invocations: [
        {
          name: "Animate Graveborn",
          actionCost: 3,
          description:
            "Create a Graveborn from 3+ corpses. The Graveborn remains tethered until destroyed or released. It has: 3 Standard Actions per turn, Passive TN 20, no Active Defenses, 5 Wounds (Wound occurs at 10 + Resolve ' 5 Grazes), 30ft movement, (Strike)k4 Attack, (Brawn)k3 Damage. It may move, attack, and use Maneuvers using the Bone Keeper's Traits and Knacks. Graveborn cannot use weapons but gain a Feature upon creation (e.g., Quadrapedal for +10ft movement, Bipedal for Reach, Winged for 30ft flight but 3 Wounds).",
        },
        {
          name: "Mending",
          actionCost: 3,
          description:
            "Remove one Wound from a target if enough of the body part remains. If the missing part is gone, the Bone Keeper may undertake an Endeavor outside combat to regenerate or replace it.",
        },
        {
          name: "TBD",
          actionCost: 2,
          description: "Effect TBD.",
        },
        {
          name: "TBD",
          actionCost: 2,
          description: "Effect TBD.",
        },
      ],
    },
  },
  {
    name: "Entropist",
    type: "sorcerous",
    bonusTrait: ["Wits", "Finesse"],
    initiate: {
      talent:
        "Second-Keeper - The Entropist can shift their Turn in the Round by up to 2 Turns earlier or later. They also know the combat Turn order in-character. Additionally, they may advance or slow time in a 1ft sphere by up to a factor of 2, but only at touch range and as a full action.",
      invocations: [
        {
          name: "Blur",
          actionCost: 2,
          description:
            "Choose a target within 5ft (including yourself). Their form blurs, shifting unpredictably. Until they are hit, they receive a TN bonus equal to Mastery Rank ' 3.",
        },
        {
          name: "Catch",
          actionCost: 2,
          description:
            "Use as an Active Defense against any attack within 10ft. Roll Intervene + Wits against the incoming Attack. Projectiles, including firearms, may be caught, stopping midair. A second Reaction from the Entropist or another may redirect the attack.",
        },
        {
          name: "Decay",
          actionCost: "1-3",
          description:
            "Choose an object within 30ft. The material rapidly ages and weakens. Roll Manipulate as the Unkept die and the number of Actions spent as the Kept die for damage. At Adept, this may target living creatures.",
        },
        {
          name: "Covered Wound",
          actionCost: 1,
          description:
            "As a Reaction, allow an ally to ignore Grazes for one attack, up to Intervene ' 3 Grazes. After the attack, the Grazes return without triggering a Wound check.",
        },
        {
          name: "Delay",
          actionCost: 2,
          description:
            "Choose a target and roll Manipulate + Wits against their Endure + Presence. If successful, their Turn is delayed by 1 Turn, plus 1 additional Turn for every 10 higher the Entropist's roll is. If their Turn is delayed past Turn 12, they do not act this Round.",
        },
        {
          name: "Quicken",
          actionCost: 1,
          description:
            "As a Reaction, reduce the Action cost of a Maneuver or Invocation within 20ft by 1 Action.",
        },
      ],
    },
    adept: {
      talent:
        "Minute-Keeper - The Entropist can shift their Turn by up to 4 Turns earlier or later. They may also advance or slow time in a 6ft sphere by up to a factor of 3.",
      invocations: [
        {
          name: "Haste",
          actionCost: 2,
          description:
            "Target within 40ft gains one Standard Action and one Quick Action. If they have already acted this Round, they may use the extra actions on your Turn. At Master, this affects up to 2 targets.",
        },
        {
          name: "Slow",
          actionCost: 2,
          description:
            "Target within 40ft loses one Standard and one Quick Action. If they have already acted, their next Initiative roll is reduced to 1 die. At Master, this affects up to 2 targets.",
        },
        {
          name: "Link",
          actionCost: 1,
          description:
            "Link up to Wits targets within 15ft of each other. If one takes damage, all others take half that amount in Grazes. Lasts for Wits Turns.",
        },
        {
          name: "Feigned Health",
          actionCost: 1,
          description:
            "Target ignores the penalty from a single Wound for Mastery Rank Rounds (including the current Round).",
        },
      ],
    },
    master: {
      talent:
        "Hour-Keeper - The Entropist can shift their Turn by up to 6 Turns earlier or later. They may also advance or slow time in a 12ft sphere by up to a factor of 5.",
      invocations: [
        {
          name: "Stasis",
          actionCost: 3,
          description:
            "Select a 10ft square within 20ft. Everything inside is slowed to near-frozen for Wits ' 2 Turns. While inside, no Actions or Quick Actions may be taken. If the Entropist takes a Wound, the effect ends prematurely.",
        },
        {
          name: "TBD",
          actionCost: 2,
          description: "Effect TBD.",
        },
        {
          name: "TBD",
          actionCost: 2,
          description: "Effect TBD.",
        },
        {
          name: "TBD",
          actionCost: 2,
          description: "Effect TBD.",
        },
      ],
    },
  },
  {
    name: "Witch",
    type: "sorcerous",
    bonusTrait: ["Presence", "Resolve"],
    initiate: {
      talent:
        "Lesser Demesne - The Witch chooses a Demesne and a Nature. The Player and GM collaborate to define the Demesne, its Aspect, and mechanical impact. The Demesne is a location where the Witch is strongest. At Initiate, it may be no larger than a small building or outdoor space. Inside, the Witch recovers from a wound in 3 days instead of 5, and all their Invocations gain an additional Kept die. The Nature governs the Witch's affinity, such as Spider (webs), Raven (roosting), or a poisonous plant (spreading). The Witch gains a 2k0 bonus to Skills relevant to their Nature and a familiar they can freely share senses with and command within 100ft.",
      invocations: [
        {
          name: "Twist Flora",
          actionCost: 2,
          description:
            "Transform a 10ft square into difficult terrain. Roll Manipulate + Presence against Endure + Brawn of enemies inside. On failure, they gain the Held Condition; on failure by 15+, they become Prone. If an enemy ends their turn in the area, they take (Mastery Rank)k0 + 2k2 damage.",
        },
        {
          name: "Vengeful Barbs",
          actionCost: 1,
          description:
            "Use Intervene + Wits as an Active Defense. If the defense fails, the attacker takes 2 ' Intervene in Grazes. If it succeeds, the attack is mitigated by 3 ' Intervene, and the attacker takes equal Grazes.",
        },
        {
          name: "Call Minor Swarm",
          actionCost: 2,
          description:
            "Summon a swarm of insects (5ft ' Mastery Rank) that moves 20ft as a Quick Action. Creatures inside gain the Drained Condition and +5 TN vs. Ranged attacks. Lasts until combat ends.",
        },
        {
          name: "Creeping Bramble",
          actionCost: 2,
          description:
            "Choose a 5ft square within 50ft. If an enemy enters or leaves, they must roll Endure + Brawn vs. Manipulate + Wits or gain the Held Condition.",
        },
        {
          name: "Curse",
          actionCost: 1,
          description:
            "Target within 30ft suffers -1k0 per Mastery Level to a chosen Trait for Presence hours. The Witch always knows their direction.",
        },
        {
          name: "Zephyr",
          actionCost: 3,
          description:
            "Move a number of squares equal to Presence ' 2. This movement ignores difficult terrain, does not provoke Attacks of Opportunity, and may traverse vertical surfaces. If the Witch passes through an enemy's square, they take (Mastery Rank) + 2k2 damage.",
        },
      ],
    },
    adept: {
      talent:
        "Greater Demesne - The Witch's Demesne expands to a multi-story building or moderate outdoor space (up to an acre). Inside, they recover from wounds in 2 days instead of 5, gain control over flora and fauna, and have doubled movement speed. Additionally, they receive a Boon to their passive TN to be hit. Their Familiar's range increases to 1000ft, and they gain a 2k1 bonus to Skills associated with their Aspect. The Witch may transform into a Creature of their Nature with a Quick Action once per Scene.",
      invocations: [
        {
          name: "Strangling Vine",
          actionCost: 2,
          description:
            "Choose a 5ft square containing vegetation within 50ft. A tendril ensnares a target within 15ft (20ft if from the Witch). The target gains the Held Condition until the vine takes 20 Grazes. Once per Round, roll Manipulate + Presence vs. Endure + Brawn; on success, the target is pulled 5ft, plus 5ft for every 10 they fail the check by.",
        },
        {
          name: "Call Swarm",
          actionCost: 2,
          description:
            "Summon a swarm of creatures (5ft ' Mastery Rank). They move 20ft as a Quick Action. Enemies inside take Mastery Rank + Presence in damage. The swarm provides +10 TN vs. Ranged attacks. The Witch may dissipate it as a Quick Action. Lasts until combat ends.",
        },
        {
          name: "Spreading Ague",
          actionCost: 2,
          description:
            "Choose a target within 40ft. Roll Manipulate + Presence vs. Endure + Resolve. If they succeed, they gain Bleed 5. If they fail, they also suffer a Bane for every 15 they fail by. Adjacent creatures also suffer these effects.",
        },
        {
          name: "Beast's Eyes",
          actionCost: 1,
          description:
            "Pick a non-human Creature within hearing range. You may share senses with and command it for one Round, up to 100ft away.",
        },
      ],
    },
    master: {
      talent:
        "True Demesne - The Witch's Demesne expands to a large complex or up to a square mile. Inside, they recover from wounds in 1 day, gain full control over all aspects of their Demesne, and are aware of all creatures within. At Master, the Witch fully embodies their Nature, may freely transform into it with a Quick Action, and may adapt a physical feature of their Nature once per Scene (e.g., claws, wings, eyes). Their Familiar may be controlled at any distance.",
      invocations: [
        {
          name: "Greater Curse",
          actionCost: 2,
          description:
            "Choose a target within 30ft. They suffer -2k0 per Mastery Level to a chosen Trait for Presence hours. The Witch always knows their direction, and the Curse cannot be removed without special intervention.",
        },
        {
          name: "Dominate Person",
          actionCost: 3,
          description:
            "Roll Manipulate + Presence against the target's Endure + Resolve. On success, the target follows a single command for Mastery Rank Rounds. Commands that force self-harm grant another resistance roll.",
        },
        {
          name: "TBD",
          actionCost: 2,
          description: "Effect TBD.",
        },
        {
          name: "TBD",
          actionCost: 2,
          description: "Effect TBD.",
        },
      ],
    },
  },
];
