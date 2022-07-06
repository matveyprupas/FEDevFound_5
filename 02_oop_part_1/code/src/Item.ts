import { Comparable } from './Comparable';

let id = 0;

export abstract class Item implements Comparable<Item> {
    id: number;
    name: string;
    value: number;
    weight: number;
    numberOfItems: string;

    constructor (name: string, value: number, weight: number) {
        this.id = id++;
        this.name = name;
        this.value = value;
        this.weight = weight;
    }

    public compareTo(other: Item): number {
        if (this.value > other.value) {
            return 1;
        } else if (this.value < other.value) {
            return -1;
        }

        const thisName = this.name.toLowerCase();
        const otherName = other.name.toLowerCase();

        if (thisName > otherName) {
            return 1;
        } else {
            return -1;
        }
    }

    abstract use(): void;

    toString(): string {
        return 'abracadabra'
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getValue(): number {
        return this.value;
    }

    getWeight(): number {
        return this.weight;
    }

    setName(name: string): void {
        this.name = name;
    }

    setValue(value: number): void {
        this.value = value;
    }

    setWeight(weight: number): void {
        this.weight = weight;
    }
}
