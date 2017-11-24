import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Film }        	  from './film';
import { FilmService }   	  from './film.service';

@Component({
	selector: 'films-list',
	templateUrl: './films-list.component.html',
	styleUrls: ['./films-list.component.css']
})

export class FilmsListComponent implements OnInit {
	list_title = 'Top 10 best films in history';
	films: Film[];
	
	constructor(private router: Router,
		private filmService: FilmService) {}
	
	getFilms(): void {
		this.filmService.getFilms()
			.subscribe(films => this.films = films);
	}
	
	ngOnInit(): void {
		this.getFilms();
	}
	
	gotoDetails(film: Film): void {
		this.router.navigate(['/details', film.id]);
	}
	
	////// SAVE METHODS //////
	
	/*add(name: string): void {
		name = name.trim();
		if (!name) { return; }
		this.filmService.addFilm({ name } as Film)
			.subscribe(film => {
				.films.push(film);
			});
	}*/
	
	/*delete(film: Film): void {
		this.films = this.films.filter(h => h !== film);
		this.filmService.deleteFilm(film).subscribe();
	}*/
}

