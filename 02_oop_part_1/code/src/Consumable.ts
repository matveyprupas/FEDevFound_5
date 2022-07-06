import { Item } from "./Item";

export abstract class Consumable extends Item {
    consumed: boolean;
    spoiled: boolean;
    
    constructor (name: string, value: number, consumed: boolean, spoiled: boolean) {
        super(name, value, 0);

        this.consumed = consumed;
        this.spoiled = spoiled;
    }

    public compareTo(other: Item): number {
        return 1;
    }

    abstract eat(): void;

    use(): String {
        return 'st';
    }

    isConsumed(): boolean {
        return this.consumed;
    }

    setConsumed(consumed: boolean): void {
        this.consumed = consumed;
    }
}
