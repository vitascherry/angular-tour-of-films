import { Actor } from './actor';

export class Film {
	id: number;
	name: string;
	year: number;
	director: string;
	actors: Actor[];
	rating: number;
}
