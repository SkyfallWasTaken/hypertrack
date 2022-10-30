// db.ts
import Dexie, { type Table } from "dexie";

export interface Card {
  name: string;
  definition: string;
}

export interface Deck {
  id: string;
  name: string;
  cards: Card[];
}

export class SubclassedDexie extends Dexie {
  decks!: Table<Deck>;

  constructor() {
    super("hypertrack-db");
    this.version(1).stores({
      decks: "++id, name, *cards", // Primary key and indexed props
    });
  }
}

export const db = new SubclassedDexie();
