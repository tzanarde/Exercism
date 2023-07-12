export const abilityModifier = (abilityScore) => {
  if (abilityScore < 3) {
    throw new Error('Ability scores must be at least 3')
  } else if (abilityScore > 18) {
    throw new Error('Ability scores can be at most 18')
  } else {
    return Math.floor((abilityScore - 10) / 2);;
  }
};

export class Character {
  constructor() {
    this.strength = Character.rollAbility();
    this.dexterity = Character.rollAbility();
    this.constitution = Character.rollAbility();
    this.intelligence = Character.rollAbility();
    this.wisdom = Character.rollAbility();
    this.charisma = Character.rollAbility();
    this.hitpoints = 10 + abilityModifier(this.constitution);
  }

  static rollDice(diceSides) {
    return Math.floor(Math.random() * diceSides) + 1;
  }

  static rollAbility() {
    var results = [];
    for (let rolls = 0; rolls < 4; rolls++) {
      results.push(Character.rollDice(6));
    }
    results.sort().shift();
    return results.reduce((a, b) => a + b, 0);
  }

  get getStrength() {
    return this.strength;
  }

  get getDexterity() {
    return this.dexterity;
  }

  get getConstitution() {
    return this.constitution;
  }

  get getIntelligence() {
    return this.intelligence;
  }

  get getWisdom() {
    return this.wisdom;
  }

  get getCharisma() {
    return this.charisma;
  }

  get getHitpoints() {
    return this.hitpoints;
  }
}
