import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const films = [
			{ id: 1, name: 'The Shawshank Redemption',       year: 1990, director: 'test', actors: [ {id: 1, name: 'Tyrion Lannister'}, {id: 2, name: 'Jon Snow'}, {id: 3, name: 'Jaime Lannister'}, {id: 4, name: 'Petyr Baelish'}, {id: 5, name: 'Jorah Mormont'} ], rating: 3 },
			{ id: 2, name: 'The Godfather',                  year: 1991, director: 'test', actors: [ {id: 1, name: 'Tyrion Lannister'}, {id: 2, name: 'Jon Snow'}, {id: 3, name: 'Jaime Lannister'}, {id: 4, name: 'Petyr Baelish'}, {id: 5, name: 'Jorah Mormont'} ], rating: 4 },
			{ id: 3, name: 'The Dark Knight',                year: 1992, director: 'test', actors: [ {id: 1, name: 'Tyrion Lannister'}, {id: 2, name: 'Jon Snow'}, {id: 3, name: 'Jaime Lannister'}, {id: 4, name: 'Petyr Baelish'}, {id: 5, name: 'Jorah Mormont'} ], rating: 2 },
			{ id: 4, name: '12 Angry Men',                   year: 1993, director: 'test', actors: [ {id: 1, name: 'Tyrion Lannister'}, {id: 2, name: 'Jon Snow'}, {id: 3, name: 'Jaime Lannister'}, {id: 4, name: 'Petyr Baelish'}, {id: 5, name: 'Jorah Mormont'} ], rating: 3 },
			{ id: 5, name: 'Schindler\'s List',              year: 1994, director: 'test', actors: [ {id: 1, name: 'Tyrion Lannister'}, {id: 2, name: 'Jon Snow'}, {id: 3, name: 'Jaime Lannister'}, {id: 4, name: 'Petyr Baelish'}, {id: 5, name: 'Jorah Mormont'} ], rating: 1 },
			{ id: 6, name: 'Pulp Fiction',                   year: 1995, director: 'test', actors: [ {id: 1, name: 'Tyrion Lannister'}, {id: 2, name: 'Jon Snow'}, {id: 3, name: 'Jaime Lannister'}, {id: 4, name: 'Petyr Baelish'}, {id: 5, name: 'Jorah Mormont'} ], rating: 3 },
			{ id: 7, name: 'The Lord of the Rings',          year: 1996, director: 'test', actors: [ {id: 1, name: 'Tyrion Lannister'}, {id: 2, name: 'Jon Snow'}, {id: 3, name: 'Jaime Lannister'}, {id: 4, name: 'Petyr Baelish'}, {id: 5, name: 'Jorah Mormont'} ], rating: 5 },
			{ id: 8, name: 'The Good, the Bad and the Ugly', year: 1997, director: 'test', actors: [ {id: 1, name: 'Tyrion Lannister'}, {id: 2, name: 'Jon Snow'}, {id: 3, name: 'Jaime Lannister'}, {id: 4, name: 'Petyr Baelish'}, {id: 5, name: 'Jorah Mormont'} ], rating: 3 },
			{ id: 9, name: 'Fight Club',                     year: 1998, director: 'test', actors: [ {id: 1, name: 'Tyrion Lannister'}, {id: 2, name: 'Jon Snow'}, {id: 3, name: 'Jaime Lannister'}, {id: 4, name: 'Petyr Baelish'}, {id: 5, name: 'Jorah Mormont'} ], rating: 1 },
			{ id: 10, name:'Forrest Gump',                   year: 1999, director: 'test', actors: [ {id: 1, name: 'Tyrion Lannister'}, {id: 2, name: 'Jon Snow'}, {id: 3, name: 'Jaime Lannister'}, {id: 4, name: 'Petyr Baelish'}, {id: 5, name: 'Jorah Mormont'} ], rating: 3 }
		];
		return {films};
	}
}
