/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// === GameObject ===

class GameObject {
    constructor(argGame){
        this.createdAt = argGame.createdAt;
        this.name = argGame.name;
        this.dimensions = argGame.dimensions;
    }
    // Methods of the GameObject
    destroy() {
        return `${this.name} was removed from the game.`;
    }
}


//=== CharacterStats ===


class CharacterStats extends GameObject { // __proto__
    constructor(argStats) {
        super(argStats); // this and methods
        this.healthPoints = argStats.healthPoints;
    }
    //Methods
    takeDamage() {
        return `${this.name} took damage.`;
    }
}



// === Humanoid  ===

class Humanoid extends CharacterStats {
    constructor (argHuman) {
        super(argHuman);
        this.team = argHuman.team;
        this.weapons = argHuman.weapons;
        this.language = argHuman.language;
    }
    //Methods
    greet() {
        return `${this.name} offers a greeting in ${this.language}.`;
    }
}



const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


// ===============Stretch task================ 

//====== Vilain=====

class Vilain extends Humanoid  {
    constructor (atrVil) {
        super(atrVil);
        this.swordDamage = atrVil.swordDamage;
    }
    //Methods
    attackWithSword(opponent) {
        let opponentHealth = opponent.healthPoints;
        //if health gets to 0 or drops below 0;
        if(this.healthPoints <= 0) {
        return `${opponent.name} the game is over for you and you have been killed by ${this.name}`;
        } else {
        opponent.healthPoints -= this.swordDamage;
        if(opponent.healthPoints <= 0) {
            return `${opponent.name} the game is over for you and you have been killed by ${this.name}`;
        } else {
            return `${opponent.name} you have been attacked by ${this.name} and your health is ${opponent.healthPoints}`;
        }
        }
    }//method
} //vilain  


//=======Hero=====

class Hero extends Humanoid {
    constructor (artHero){
        super(artHero);
        this.arrowDamade= artHero.arrowDamade;
        this.arrowCount = artHero.arrowCount;
    }
// methods
    shootArrow(opponent) {
        let opponentHealth = opponent.healthPoints;
        //if arrowCount gets to 0 or drops below 0;
        if(this.arrowCount <= 0) {
          return `${this.name} you have no more arrows to shoot`;
        } else {
          this.arrowCount -= 1;
          console.log(`${this.name} you have ${this.arrowCount} arrows left`);
        }
        //if health gets to 0 or drops below 0;
        if(this.healthPoints <= 0) {
          return `${opponent.name} the game is over for you and you have been killed by ${this.name}`;
        } else {
          opponent.healthPoints -= this.arrowDamade;
          if(opponent.healthPoints <= 0) {
            return `${opponent.name} the game is over for you and you have been killed by ${this.name}`;
          } else {
            return `${opponent.name} you have been attacked by ${this.name} and your health is ${opponent.healthPoints}`;
          }
        }
    }// method
}// hero
    


const heroOne = new Hero({
createdAt: new Date(),
dimensions: {
  length: 1,
  width: 2,
  height: 4,
},
healthPoints: 10,
name: 'HeroPlayer1',
team: 'Kingdom',
weapons: [
  'Giant Sword',
  'Shield',
],
language: 'English',
arrowDamade: 2,
arrowCount: 2
});

const vilainOne = new Vilain({
createdAt: new Date(),
dimensions: {
  length: 1,
  width: 2,
  height: 4,
},
healthPoints: 10,
name: 'VilainPlayer1',
team: 'Kingdom',
weapons: [
  'Bow',
  'Dagger',
],
language: 'English',
swordDamage: 5
});

console.log(vilainOne.attackWithSword(heroOne));
console.log(heroOne.shootArrow(vilainOne));
console.log(heroOne.shootArrow(vilainOne));
console.log(heroOne.shootArrow(vilainOne));
console.log(vilainOne.attackWithSword(heroOne));
