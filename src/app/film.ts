import { Actor } from './actor';
import { Comment } from './comment';

export class Film {
	id: string;
	name: string;
	year: number;
	director: string;
	actors: Actor[];
	comments: Comment[];
	rating: number;
}
