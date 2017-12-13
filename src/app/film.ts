import { Actor }   from './actor';
import { Comment } from './comment';
import { Genre }   from './genre';

export class Film {
	id: string;
	name: string;
	year: number;
	director: string;
	genres: Genre[];
	actors: Actor[];
	comments: Comment[];
	rating: number;
}
