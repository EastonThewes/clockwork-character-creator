const manuevers = [
  {
    name: "Aim",
    description:
      "Applies to ranged weapons only. Attack using this Maneuver using two or more Actions to Aim. If three Actions are spent Aiming, make the attack with a Boon (+5). The shot is taken as a part of the last Action spent.",
    knackTrait: ["Strike", "Finesse"],
    actionCost: "2-3",
    reactionCost: "0",
  },
  {
    name: "Bind",
    description:
      "Use this Maneuver with Manipulate+Finesse OR Manipulate+Brawn and specify a weapon (may include shields) held by an enemy. The defender rolls Endure+Finesse to resist. If successful, the opponent's weapon is unusable until they take one Standard Action to free it. Note that the defender can always just let go of the weapon as a Quick Action. If you choose to take two additional Banes (-10) and an additional action, the opponent is Disarmed. This must be declared prior to the roll.",
    knackTrait: ["Manipulate", "Finesse", "Manipulate", "Brawn"],
    actionCost: "2-3",
    reactionCost: "0",
  },
  {
    name: "Charge",
    description:
      "Move at least 10ft and up to your movement speed at an enemy. The enemy must be at least 10ft away in a straight line. Roll this Maneuver with Attack + Brawn against the enemy's Endure + Brawn Check. If the Charge succeeds, the enemy takes 1k1 damage and is pushed back 5ft in the direction of your Charge (enemies can be pushed at a diagonal). If the charge succeeds by more than 5, then the enemy may be pushed back up to 10ft. If you choose to use 3 Actions for a Charge instead of 2, you may target one additional enemy adjacent to the first.",
    knackTrait: ["Strike", "Brawn"],
    actionCost: "2-3",
    reactionCost: "0",
  },
  {
    name: "Distract",
    description:
      "Roll this Maneuver against the enemy's Wits+Endure. If successful, the opponent may take one less Reaction until the end of the Round. For every 20 this beats the opponent's roll, they receive one less Reaction.",
    knackTrait: ["Manipulate", "Presence"],
    actionCost: "1",
    reactionCost: "0",
  },
  {
    name: "double-attack",
    description:
      "Attack with this Maneuver. The opponent receives a -10 penalty to Interventions to block or evade this attack. The Player chooses which weapon's properties are in effect for the attack and damage rolls.",
    knackTrait: ["Strike", "Finesse"],
    actionCost: "2",
    reactionCost: "0",
  },
  {
    name: "Feint",
    description:
      "Make an Attack with this Maneuver. If the Attack lands, it does no damage but the opponent cannot use an Interventions against subsequent attacks from the Character that made the Feint until their next Action.",
    knackTrait: ["Strike", "Finesse"],
    actionCost: "1",
    reactionCost: "0",
  },
  {
    name: "Grab",
    description:
      "Roll this Maneuver opposed to one opponent's Brawn+Endure. If Successful, the opponent receives the Held Condition. At least one hand has to be free in order to use this knack.",
    knackTrait: ["Manipulate", "Brawn"],
    actionCost: "1",
    reactionCost: "0",
  },
  {
    name: "Lunge",
    description:
      "Attack using this Maneuver. Increase the threaten range of this one attack by 5ft, and get +5 damage if you hit. Your Passive TN receives a penalty -5 until you take a move action or the Round ends.",
    knackTrait: ["Strike", "Finesse"],
    actionCost: "2",
    reactionCost: "0",
  },
  {
    name: "Pin",
    description:
      "Attack using this Maneuver. If the hit succeeds, the Opponent has the Held Condition but receives no damage.",
    knackTrait: ["Strike", "Finesse"],
    actionCost: "1",
    reactionCost: "0",
  },
  {
    name: "Pommel Strike",
    description:
      "Attack using this Maneuver. If you hit, the opponent takes 1k1 damage and the opponent has the Stunned Condition.",
    knackTrait: ["Strike", "Finesse"],
    actionCost: "2",
    reactionCost: "0",
  },
  {
    name: "Pop Up Shot",
    description:
      "Attack using this Maneuver while in Cover. You may make an Attack using this Maneuver, and then return to cover. This Maneuver may be used in concert with the Aim Maneuver.",
    knackTrait: ["Strike", "Finesse"],
    actionCost: "2",
    reactionCost: "0",
  },
  {
    name: "Shield Bash",
    description:
      "Attack with this Maneuver using your shield. If successful, the opponent takes the shield's normal damage and is Shifted 5 feet away from you, or in a diagonal of your choice. If you choose to take two Banes (-10) to hit, the opponent is shifted 10 feet away. If you make three Banes (-15) to hit, the opponent is prone.",
    knackTrait: ["Strike", "Brawn"],
    actionCost: "2",
    reactionCost: "0",
  },
  {
    name: "Shift",
    description:
      "Roll this Maneuver opposed to one opponent's Brawn+Endure. If successful, move the enemy 5ft in a direction of your choice per Action spent on this knack. If you move the enemy away from you, you get a free move to occupy their vacated space if you choose to use it. If you rotate the enemy, you do not need to move. Both you and the enemy being Shifted do not provoke Attacks of Opportunity. You may choose to make the enemy Prone instead of moving them by spending 2 additional Standard Actions.",
    knackTrait: ["Manipulate", "Brawn"],
    actionCost: "1-3",
    reactionCost: "0",
  },
  {
    name: "Sweep",
    description:
      "Attack in a broad arc. Choose any number of enemies that you can threaten equal to your Brawn. Roll a single attack using this Maneuver at -1k0 to hit. Resolve whether or not each separate enemy is hit. Roll damage separately for each enemy you hit.",
    knackTrait: ["Strike", "Finesse"],
    actionCost: "3",
    reactionCost: "0",
  },
  {
    name: "Throw",
    description:
      "Use this Maneuver to accurately throw objects and thrown weapons. Simple Attacks with Thrown Weapons do not involve throwing the weapon. Characters get this Knack for free when choosing the Weapon Mastery Advantage with a Thrown Weapon.",
    knackTrait: ["Strike", "Finesse"],
    actionCost: "1",
    reactionCost: "0",
  },
  {
    name: "Ward",
    description:
      "Applicable to weapons with the Reach property only. Attack with this Maneuver. If you hit, the opponent's movement this Turn is treated as if it is on difficult terrain, and you may Shift the opponent 5ft directly away from you.",
    knackTrait: ["Manipulate", "Finesse"],
    actionCost: "2",
    reactionCost: "0",
  },
  {
    name: "Bob and Weave",
    description:
      "Use Bob and Weave as an Intervention. If an opponent's melee attack misses, move 5ft in any direction without provoking Attacks of Opportunity from that Opponent. For each additional Reaction spent, choose an additional Opponent to avoid Opportunity Attacks from.",
    knackTrait: ["Intervene", "Wits"],
    actionCost: "0",
    reactionCost: "1 Reaction",
  },
  {
    name: "Catch",
    description:
      "Intervene using this Maneuver with Intervene+Finesse OR Intervene+Brawn. If successful, the Attack fails to land and the opponent's attacking weapon is unusable until they take one Standard Action to free it. Note that the attacker can always just let go of the weapon using a Quick Action. If you choose to take two additional Banes (-10) and an additional reaction, the opponent is Disarmed. This must be declared prior to the roll.",
    knackTrait: ["Intervene", "Finesse", "Intervene", "Brawn"],
    actionCost: "0",
    reactionCost: "2",
  },
  {
    name: "Dodge",
    description:
      "Use Dodge as an Intervention. If successful, move yourself 5ft in any direction there is an unoccupied space and go prone. You do not provoke Attacks of Opportunity. If you succeed on a TN 15 Acrobatics check, you may avoid going prone.",
    knackTrait: ["Intervene", "Finesse"],
    actionCost: "0",
    reactionCost: "2",
  },
  {
    name: "Parry",
    description:
      "Use this as an Active Defense if you have a weapon or shield equipped.",
    knackTrait: ["Intervene", "Wits"],
    actionCost: "0",
    reactionCost: "1 Reaction",
  },
  {
    name: "Riposte",
    description:
      "Following a successful Parry, you may use 1 Reaction to Riposte. The Riposte uses the Attack Roll of the successful Parry and otherwise counts as a Simple Attack.",
    knackTrait: ["N/A"],
    actionCost: "0",
    reactionCost: "1 Reaction",
  },
  {
    name: "Stop Thrust",
    description:
      "Use two to interrupt the enemy's attack or action with one of your own. If your attack succeeds and causes a Wound, the enemy's attack or action is interrupted. If the attack fails to hit or cause a Wound, then the enemy's attack lands but deals -5 to damage, and other actions proceed as normal.",
    knackTrait: ["Intervene", "Finesse"],
    actionCost: "0",
    reactionCost: "2",
  },
  {
    name: "Stopping Power",
    description:
      "Used in conjunction with the Targeting Stance. Spend an additional Reaction (2 total) when taking a shot while in the Targeting Stance. Use Intervene + Finesse instead of making just a Simple Attack. If your attack succeeds and causes a Wound, the enemy's attacker action is interrupted. If the attack fails to hit or cause a Wound, then the enemy's attack lands but deals -5 to damage, and other actions proceed as normal.",
    knackTrait: ["Intervene", "Finesse"],
    actionCost: "0",
    reactionCost: "2",
  },
  {
    name: "Defensive Stance",
    description:
      "Adopt a defensive stance. While in this stance, all attacks are made at a 1k1 Penalty, but Passive TN to be hit receives a Boon of 5, and all Active Defenses also Receive a Boon of 10. The Character can choose which way they face.",
    knackTrait: [],
    actionCost: "1",
    reactionCost: "0",
  },
  {
    name: "Intercept Stance",
    description:
      "Used with Melee Weapons only. Adopt an aggressive stance. While in this stance, passive TN to be hit is decreased by 5, but any Opportunity Attacks taken are made with a 1k1 bonus to hit.",
    knackTrait: [],
    actionCost: "1",
    reactionCost: "0",
  },
  {
    name: "Targeting Stance",
    description:
      "Used with Ranged weapons only. While in this Stance, a Character picks a single target they are aware of. The Character may use 1 Reaction later within the round to make a Simple Attack against the target. While in this Stance, the Gunner must maintain line of sight to the target.",
    knackTrait: [],
    actionCost: "1",
    reactionCost: "1",
  },
];
