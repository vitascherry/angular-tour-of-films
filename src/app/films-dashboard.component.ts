import { Component, OnInit } from '@angular/core';

import { Film }              from './film';
import { FilmService }       from './film.service';

@Component({
	selector: 'films-dashboard',
	templateUrl: './films-dashboard.component.html',
	styleUrls: ['./films-dashboard.component.css']
})
export class FilmsDashboardComponent implements OnInit {
	dashboard_title = 'Top 10 best films in history';
	films: Film[];

	constructor(private filmService: FilmService) { }

	ngOnInit(): void {
		this.filmService.getFilms()
			.subscribe(films => this.films = films.slice(0, films.length));
	}
}
