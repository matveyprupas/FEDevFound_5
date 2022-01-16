abstract class Vechile implements IVechile<IVechileProperties> {

    abstract setProperties(properties: IVechileProperties): void;

    name: string;
    countOfWeels: number;
    properties: IVechileProperties
    horn(): void {
        console.log(`${this.name} with ${this.countOfWeels} weels says: beep-beep`);
    }

}

interface IVechileProperties {
    name: string,
    countOfWeels: number;
}

interface IVechile<T> {
    name: string,
    countOfWeels: number,
    properties: T
}

class MuscleCar extends Vechile {

    setProperties(properties: IVechileProperties) {
        this.name = properties.name;
        this.countOfWeels = properties.countOfWeels;
    }
}

let corvettte = new MuscleCar();
let mustang = new MuscleCar();

corvettte.setProperties({name: "Corvette", countOfWeels: 4});
mustang.setProperties({name: "Mustang", countOfWeels: 4});

corvettte.horn();
mustang.horn();