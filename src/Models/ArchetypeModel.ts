export interface MartialArchetype {
  name: string;
  type: "martial"; // Make this a literal type
  bonusTrait: string[];
  maneuvers: string[];
  styles: {
    name: string;
    initiate: { description: string };
    adept: { description: string };
    master: { description: string };
  }[];
}

export interface SorcerousArchetype {
  name: string;
  type: "sorcerous"; // Make this a literal type
  bonusTrait: string[];
  initiate: {
    talent: string;
    invocations: {
      name: string;
      actionCost: string | number;
      description: string;
    }[];
  };
  adept: {
    talent: string;
    invocations: {
      name: string;
      actionCost: string | number;
      description: string;
    }[];
  };
  master: {
    talent: string;
    invocations: {
      name: string;
      actionCost: string | number;
      description: string;
    }[];
  };
}

export type Archetype = MartialArchetype | SorcerousArchetype;
