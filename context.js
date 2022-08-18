function eat() {
	console.log(`${this.name} eats fish food`);
}

class Fish {
	constructor(name) {
		this.name = name;
	}

	swim() {
		console.log(`${this.name} swimming in the water`);
	}
}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
eat(); // ? undefined eats fish food

/********************************* Scenario 2 *********************************/
nemo.eat = eat;
nemo.eat(); // ? this might work? => Nemo eats fish food

/********************************* Scenario 3 *********************************/
nemo.eat = eat;
eat(); // ? undefined eats fish food

/********************************* Scenario 4 *********************************/
nemo.swim(); // ? Nemo swimming in the water

/********************************* Scenario 5 *********************************/
const swim = nemo.swim;
swim(); // ? TypeError, cannot read properties of undefined (reading 'name')

/********************************* Scenario 6 *********************************/
const swim2 = nemo.swim;
swim2(); // ? TypeError, cannot read properties of undefined (reading 'name')

/********************************* Scenario 7 *********************************/
swim(); // ? TypeError, cannot read properties of undefined (reading 'name')
