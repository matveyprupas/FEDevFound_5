import { Item } from "./Item";

export class Inventory {
    items: Item[];

    constructor (items?: Item[]) {
        this.items = !!items ? items : [];
    }

    addItem(item: Item): void {
        this.items.push(item);
    }

    sort(comparator?: number): Item[] {
        
        if (!!comparator) {
            return this.items.sort(( a, b ) => a.weight - b.weight )
        } else {
            return this.items.sort((a, b) => {
                const nameA = a.value.toUpperCase();
                const nameB = b.value.toUpperCase();
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
                return 0;
              });
        }
    }

    toString(): string {
        return this.items.join(', ');
    }
}
