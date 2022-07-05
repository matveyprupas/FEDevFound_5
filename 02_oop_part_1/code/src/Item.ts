import { Comparable } from './Comparable';

let id = 0;

export abstract class Item implements Comparable<Item> {
    id: number;
    name: string;
    value: number;
    weight: number;
    numberOfItems: string;

    constructor (id: number, name: string, value: number, weight: number) {
        this.id = id;
        this.name = name;
        this.value = value;
        this.weight = weight;
    }

    public compareTo(other: Item): number {
        // your code goes here
    }

    // your code goes here
}
