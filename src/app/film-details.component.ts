import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } 			from '@angular/router';
import { Location } 				from '@angular/common';

import { FilmService } 			from './film.service';
import { Film } 					from './film';

@Component({
	selector: 'film-details',
	templateUrl: './film-details.component.html',
	styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
	film: Film;
	imagesUrl = './assets/images/';
	
	constructor(private filmService: FilmService,
		private route: ActivatedRoute,
		private location: Location) {}
	
	ngOnInit(): void {
		this.getFilm();
	}
	
	getFilm(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.filmService.getFilm(id)
			.subscribe(film => this.film = film);
	}
	
	goBack(): void {
		this.location.back();
	}
	
	getFilmCover(film: Film): string {
		return this.imagesUrl + film.id + ".jpg";
	}
	
	////// SAVE METHODS //////
	
	/*save(): void {
		this.filmService.updateFilm(this.film)
			.subscribe(() => this.goBack());
	}*/
}

