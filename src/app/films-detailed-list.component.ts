import { Component, OnInit } from '@angular/core';

import { Film }        from './film';
import { FilmService } from './film.service';

@Component({
	selector: 'films-detailed-list',
	templateUrl: './films-detailed-list.component.html',
	styleUrls: ['./films-detailed-list.component.css']
})

export class FilmsDetailedListComponent implements OnInit {
	detailed_list_title = 'Top 10 best films in history';
	imagesUrl = './assets/images/small/';
	films: Film[];
	
	constructor(private filmService: FilmService) {}
	
	getFilms(): void {
		this.filmService.getFilms()
		.subscribe(films => this.films = films);
	}
	
	ngOnInit(): void {
		this.getFilms();
	}
	
	getFilmCover(film: Film): string {
		return this.imagesUrl + film.id + ".jpg";
	}
}
