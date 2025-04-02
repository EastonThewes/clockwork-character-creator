import { Archetype } from "./ArchetypeModel";

export class Traits {
  [key: string]: number;
  brawn: number = 2;
  finesse: number = 2;
  resolve: number = 2;
  wits: number = 2;
  presence: number = 2;
}

export class TraitModifiers {
  [key: string]: number;
  brawn: number = 0;
  finesse: number = 0;
  resolve: number = 0;
  wits: number = 0;
  presence: number = 0;
}

class Knacks {
  [key: string]: number;
  strike: number = 0;
  manipulate: number = 0;
  evade: number = 0;
  intervene: number = 0;
  endure: number = 0;
}

class Experience {
  [key: string]: number;
  xp: number = 50;
  skillXP: number = 20;
}

class Defense {
  [key: string]: number;
  armorPoints: number = 0;
  targetNumber: number = 0;
}

class Health {
  [key: string]: number;
  wounds: number = 0;
  maxWounds: number = 0;
}

class Skill {
  type: string = "";
  trait: string[] = [];
  name: string = "";
  desc: string = "";
}

class Advantage {
  name: string = "";
  type: string = "";
  xpCost: number[] = [];
  desc: string = "";
}

class Aspect {
  drives: string[] = [];
  troubles: string[] = [];
}

export class Weapon {
  name: string = "";
  size: string = "";
  weight: string = "";
  style: string = "";
  modifiers: string = "";
  attack: string = "";
  damage: string = "";
}

export class Manuever {
  name: string = "";
  description: string = "";
  knackTrait: string[] = [];
  actionCost: string = "";
  reactionCost: string = "";
}

export enum ArcheTypeLevels {
  initiate,
  adept,
  master,
}
export interface CharacterArchetype {
  archetype: Archetype; // The archetype information
  selectedStyle?: string; // The selected style
  invocations?: Invocation[];
  level: ArcheTypeLevels; // This is what level this archetype is at when it was chosen
  rank: number; // This is the rank at which this archetype was chosen
  type: string; // If this archetype was given by a rank or an advantage
}

export interface Invocation {
  name: string;
  actionCost: string | number;
  description: string;
}

export class Character {
  id: string = "";
  name: string = "New Character"; // The name of the character
  rank: number = 0; // The current rank of the character

  archetypes: CharacterArchetype[] = []; // This is the list of archetypes and how they were chosen
  bonusTrait: string = ""; // This is the chosen bonus trait
  disadvantageTrait: string = ""; // This is the trait you make go down by 1

  // traits: Traits = new Traits();                        // The list of traits
  // archetypeTraitModifiers: TraitModifiers[] = [];
  // knacks: Knacks = new Knacks();
  // experience: Experience = new Experience();
  // defense: Defense = new Defense();
  // health: Health = new Health();
  // skills: Skill[] = [];
  // advantages: Advantage[] = [];
  // endeavorDice: number = 1;
  // aspect: Aspect = new Aspect();
  // weapons: Weapon[] = [];
}
