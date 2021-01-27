class Ninja {
    constructor(name,health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
	
    sayName() {
        console.log(this.name);
    }
	
    showStats() {
        console.log(this.name,this.strength,this.speed,this.health);
    }
	
    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {   
    constructor(name,health=200) {
        super(name,health);
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
	speakWisdom() {
		console.log("Wisdom is the real gold that can give you a happy life");
		this.drinkSake();
	}