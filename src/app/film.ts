import { Actor } from './actor';

export class Film {
	id: string;
	name: string;
	year: number;
	director: string;
	actors: Actor[];
	rating: number;
}
