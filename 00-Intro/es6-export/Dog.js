export default class Animal {

};

export const DOG_SPECIES = ["labrador", "Rotweiller"];

export class Dog {

    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

}
